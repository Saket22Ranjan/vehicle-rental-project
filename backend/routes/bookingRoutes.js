const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Vehicle = require("../models/Vehicle");

// Create Booking
router.post("/rent", async (req, res) => {
    try {
        const { userId, vehicleId, hours } = req.body;

        const vehicle = await Vehicle.findById(vehicleId);

        const totalPrice = vehicle.pricePerHour * hours;

        const booking = new Booking({
            userId,
            vehicleId,
            hours,
            totalPrice
        });

        await booking.save();

        res.json(booking);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
