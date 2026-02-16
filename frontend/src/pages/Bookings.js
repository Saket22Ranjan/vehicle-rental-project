import React, { useEffect, useState } from "react";
import API from "../services/api";

function Bookings() {
    const [bookings, setBookings] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (!user) return;

        API.get(`/bookings/user/${user._id}`)
            .then(res => setBookings(res.data))
            .catch(err => console.log(err));
    }, [user]);

    return (
        <div style={{ padding: 30 }}>
            <h2>My Bookings</h2>

            {bookings.length === 0 ? (
                <p>No bookings yet</p>
            ) : (
                bookings.map(b => (
                    <div key={b._id} style={{
                        border: "1px solid #ccc",
                        padding: 15,
                        marginBottom: 10
                    }}>
                        <h3>{b.vehicleId?.name}</h3>
                        <p>Type: {b.vehicleId?.type}</p>
                        <p>Hours: {b.hours}</p>
                        <p>Total Paid: ₹{b.totalPrice}</p>
                        <p>Date: {new Date(b.bookingTime).toLocaleString()}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Bookings;
