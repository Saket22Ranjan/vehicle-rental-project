const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");



router.post("/add", async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(201).json(vehicle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const vehicles = await Vehicle.find({ available: true });
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
