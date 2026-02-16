const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    },
    hours: Number,
    totalPrice: Number,
    bookingTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Booking", bookingSchema);
