import express from "express";
import protect from "../controllers/authMiddleware";
import Listing from "../models/Listing";

const router = express.Router();

// Create a new listing api

router.post("/listings", protect, async (req, res) => {
    const { title, description, price, location, images, availableDates } = req.body;

 try{
    const listing = new Listing({

        host: req.user.id,
        title,
        description,
        price,
        location,
        images,
        availableDates,
    });

    const createdListing = await listing.save();
    res.status(201).json(createdListing);
 } catch (error) {
    res.status(500).json({ message: "Server error" });
 }
});