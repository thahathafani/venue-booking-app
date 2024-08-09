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