// routes/category.js
const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); // Assuming you have a Category model

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
