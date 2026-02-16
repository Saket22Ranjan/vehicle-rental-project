import React, { useState } from "react";
import API from "../services/api";

function Login() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleLogin = async () => {
        const res = await API.post("/users/login", { name, phone });

        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/vehicles";

    };

    return (
        <div style={{ padding: 30 }}>
            <h2>Login</h2>

            <input
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            /><br /><br />

            <input
                placeholder="Enter Phone"
                onChange={(e) => setPhone(e.target.value)}
            /><br /><br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
