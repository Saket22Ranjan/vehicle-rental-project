const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Vehicle = require("../models/Vehicle");

// -------------------- CREATE BOOKING --------------------
router.post("/rent", async (req, res) => {
    try {
        const { userId, vehicleId, hours } = req.body;

        const vehicle = await Vehicle.findById(vehicleId);

        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

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


// -------------------- GET BOOKINGS FOR USER --------------------
router.get("/user/:userId", async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.userId })
            .populate("vehicleId"); // includes vehicle details

        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
