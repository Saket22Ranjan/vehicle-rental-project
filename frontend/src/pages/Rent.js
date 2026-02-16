import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function Rent() {
    const { id } = useParams(); // vehicleId
    const navigate = useNavigate();
    const [hours, setHours] = useState("");

    const handleBooking = async () => {
        const user = JSON.parse(localStorage.getItem("user"));

        const res = await API.post("/bookings/rent", {
            userId: user._id,
            vehicleId: id,
            hours: Number(hours)
        });

        alert(`Booking Confirmed! Total Price ₹${res.data.totalPrice}`);
        navigate("/vehicles");
    };

    return (
        <div style={{ padding: 30 }}>
            <h2>Enter Rental Duration</h2>

            <input
                type="number"
                placeholder="Hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
            />

            <br /><br />
            <button onClick={handleBooking}>Confirm Booking</button>
        </div>
    );
}

export default Rent;
