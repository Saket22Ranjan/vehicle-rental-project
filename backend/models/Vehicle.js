const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String, // Car or Bike
        required: true
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Vehicle", vehicleSchema);
