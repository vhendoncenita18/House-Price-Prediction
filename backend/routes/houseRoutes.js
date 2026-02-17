const express = require("express");
const router = express.Router();
const House = require("../models/House");


// ✅ GET all houses
router.get("/", async (req, res) => {
  try {
    const houses = await House.find();
    res.json(houses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ POST new house
router.post("/", async (req, res) => {
  try {
    const newHouse = new House(req.body);
    await newHouse.save();

    res.status(201).json(newHouse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
