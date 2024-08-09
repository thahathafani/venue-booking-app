import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import dotenv from "dotenv";


dotenv.config();

const router = express.Router();

// Register api

router.post("/register", async (req, res) => {
    const { name, email, password, isHost } = req.body;

    try{
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ mesaage: "User already exists" });
        }

        const user = new User({ name, email, password, isHost });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        res.status(201).json({ token });
    } catch (error){
        res.status(500).json({
            message: "Server error"
        });
    }
    
});

// Login api 

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password"});
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30",
        });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }

});


// validate token api

router.get("/me", async (req, res) => {
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");


        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(401).json({ message: "Token is not found" });
    }
});

// user profile

router.get("/profile", protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });


  // Update user profile
router.put("/profile", protect, async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = await User.findById(req.user.id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      user.name = name || user.name;
      user.email = email || user.email;
  
      if (password) {
        user.password = password;
      }
  
      const updatedUser = await user.save();
  
      res.json({
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isHost: updatedUser.isHost,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

export default router;