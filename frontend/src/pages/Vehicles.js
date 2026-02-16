import React, { useEffect, useState } from "react";
import API from "../services/api";

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);

    // Fetch vehicles from backend
    useEffect(() => {
        API.get("/vehicles")
            .then(res => setVehicles(res.data))
            .catch(err => console.log(err));
    }, []);
    
    const handleRent = async (vehicle) => {
    const hours = prompt("Enter number of hours:");

    if (!hours) return;

    const user = JSON.parse(localStorage.getItem("user"));

    const res = await API.post("/bookings/rent", {
        userId: user._id,
        vehicleId: vehicle._id,
        hours: Number(hours)
    });

    alert(`Booked Successfully! Total Price ₹${res.data.totalPrice}`);
};


    return (
        <div style={{ padding: 30 }}>
            <h2>Available Vehicles</h2>

            {vehicles.length === 0 ? (
                <p>No vehicles available</p>
) : (
    vehicles.map(v => (
        <div key={v._id} style={{
            border: "1px solid gray",
            padding: 15,
            marginBottom: 10
        }}>
            <h3>{v.name}</h3>
            <p>Type: {v.type}</p>
            <p>Price: ₹{v.pricePerHour} / hour</p>
            <p>{v.description}</p>
            <button onClick={() => handleRent(v)}>
                Rent Now
            </button>
        </div>
    ))
            )}
        </div>
    );
}

export default Vehicles;
