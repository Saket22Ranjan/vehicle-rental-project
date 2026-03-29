import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function LoginUI() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Backend: POST /api/users/login — body: { name, phone }
  // It finds-or-creates user by phone and returns the user object
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await API.post("/users/login", {
        name: formData.name,
        phone: formData.phone,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/vehicles");
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || "Login failed. Please try again.");
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
      {/* Glow */}
      <div
        style={{
          position: "fixed", left: 0, top: 0,
          width: "50vw", height: "100vh",
          background: "linear-gradient(135deg, rgba(232,79,29,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="login-container">
        {/* LEFT PANEL */}
        <div className="login-left">
          <div className="login-brand">RIDE<span>X</span></div>
          <div>
            <div className="login-big-text">
              UNLOCK YOUR<br /><span className="accent">NEXT</span><br />ADVENTURE
            </div>
            <ul className="login-features">
              {[
                "Access to 120+ premium vehicles",
                "Instant hourly bookings",
                "Track all your trips & bookings",
                "24/7 customer support",
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

        {/* RIGHT PANEL */}
        <div className="login-right">
          {/* Tab switch */}
          <div className="tab-switch">
            <button className="tab-btn active">Sign In</button>
            <button
              className="tab-btn"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
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

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                name="name"
                placeholder="Saket Ranjan"
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
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--gray-400)",
                marginTop: "-0.5rem",
                lineHeight: 1.5,
              }}
            >
              New to RideX? We'll create an account automatically if your number
              isn't registered yet.
            </p>

            <button
              type="submit"
              className="form-submit"
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "SIGNING IN..." : "SIGN IN →"}
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "0.85rem",
              color: "var(--gray-400)",
            }}
          >
            Want a full account?{" "}
            <Link
              to="/signup"
              style={{ color: "var(--orange)", textDecoration: "none" }}
            >
              Sign Up with email
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginUI;