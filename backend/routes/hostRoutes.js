import express from "express";
import protect from "../controllers/authMiddleware";
import Listing from "../models/Listing"; // need to work on the listings api 

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

// update listing api

router.put("/listings/:id", protect, async (req, res) => {
    const { title, description, price, location, images, availableDates } = req.body;

    try{

        let listing = await Listing.findById(req.params.id);

        if (!listings) {
            return res.status(404).json({ message: "Listings not found" });
        }

        if (listing.host.toString() !== req.user.id ) {
            return res.status(401).json({ message: "User not authorized" });
        }

            listing.title = title || listing.title;
            listing.description = description || listing.description;
            listing.price = price || listing.price;
            listing.location = location || listing.location;
            listing.images = images || listing.images;
            listing.availableDates = availableDates || listing.availableDates;
        
            const updateListing = await listing.save();
            res.status(500).json({ message: "server error" });

    } catch (error) {
        res.status(500).json({ message: "Server error"});
    }
});

// Delete a listing