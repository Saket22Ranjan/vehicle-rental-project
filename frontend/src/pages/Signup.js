import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // ✅ added

// ✅ FIX: create API with correct backend URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

function Signup() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Backend: POST /api/users/signup — body: { name, phone, email }
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await API.post("/users/signup", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/vehicles");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--black)",
        padding: "6rem 2rem 2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed", right: 0, top: 0,
          width: "50vw", height: "100vh",
          background: "linear-gradient(225deg, rgba(232,79,29,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="login-container">
        <div className="login-left">
          <div className="login-brand">RIDE<span>X</span></div>
          <div>
            <div className="login-big-text">
              JOIN THE<br /><span className="accent">RIDERS</span><br />CLUB
            </div>
            <ul className="login-features">
              {[
                "Free account, no credit card needed",
                "Book any vehicle in seconds",
                "Exclusive member discounts",
                "Full booking history & receipts",
              ].map((f) => (
                <li key={f}>
                  <div className="check-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" stroke="#e84f1d" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="login-right">
          <div className="tab-switch">
            <button className="tab-btn" onClick={() => navigate("/login")}>
              Sign In
            </button>
            <button className="tab-btn active">Sign Up</button>
          </div>

          {error && (
            <div
              style={{
                background: "rgba(232,79,29,0.1)",
                border: "1px solid rgba(232,79,29,0.3)",
                color: "#ff7a4d",
                padding: "0.8rem 1rem",
                borderRadius: "10px",
                fontSize: "0.88rem",
                marginBottom: "1rem",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                className="form-input"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={loading}
            >
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT →"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
            Already have an account?{" "}
            <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;