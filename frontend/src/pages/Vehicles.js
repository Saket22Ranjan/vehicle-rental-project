import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);
    const navigate = useNavigate();   // ✅ Hook must be here (top level)

    // Fetch vehicles from backend
    useEffect(() => {
        API.get("/vehicles")
            .then(res => setVehicles(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ padding: 30 }}>
            <h2>Available Vehicles</h2>
            <button
    onClick={() => navigate("/bookings")}
    style={{
        marginBottom: 20,
        padding: "8px 15px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: 4
    }}
>
    View My Bookings
</button>


            {vehicles.length === 0 ? (
                <p>No vehicles available</p>
            ) : (
                vehicles.map(v => (
                    <div
                        key={v._id}
                        style={{
                            border: "1px solid #ccc",
                            padding: 15,
                            marginBottom: 10,
                            borderRadius: 5
                        }}
                    >
                        <h3>{v.name}</h3>
                        <p><strong>Type:</strong> {v.type}</p>
                        <p><strong>Price:</strong> ₹{v.pricePerHour} / hour</p>
                        <p>{v.description}</p>

                        <button
                            onClick={() => navigate(`/rent/${v._id}`)}
                            style={{
                                padding: "8px 15px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                                borderRadius: 4
                            }}
                        >
                            Rent Now
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Vehicles;
