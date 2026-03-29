import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function RentUI() {
  const { id } = useParams(); // vehicleId from URL /rent/:id
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);
  const [hours, setHours] = useState(1);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // Fetch the specific vehicle details — GET /api/vehicles returns all;
  // we filter client-side since there's no /api/vehicles/:id route yet
  useEffect(() => {
    API.get("/vehicles")
      .then((res) => {
        const found = res.data.find((v) => v._id === id);
        if (found) setVehicle(found);
        else setError("Vehicle not found.");
      })
      .catch(() => setError("Could not load vehicle details."))
      .finally(() => setLoading(false));
  }, [id]);

  // POST /api/bookings/rent — body: { userId, vehicleId, hours }
  // Backend calculates totalPrice = pricePerHour * hours
  const handleBooking = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await API.post("/bookings/rent", {
        userId: user._id,
        vehicleId: id,
        hours: Number(hours),
      });
      setSuccess(true);
      setTimeout(() => navigate("/bookings"), 2500);
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || "Booking failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const totalPrice = vehicle ? vehicle.pricePerHour * hours : 0;

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--black)", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "5rem" }}>
        <p style={{ color: "var(--gray-400)", fontSize: "1.1rem" }}>Loading vehicle...</p>
      </div>
    );
  }

  if (!vehicle && !loading) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--black)", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "5rem", flexDirection: "column", gap: "1rem" }}>
        <p style={{ color: "#ff7a4d", fontSize: "1.1rem" }}>Vehicle not found.</p>
        <button className="btn btn-ghost" onClick={() => navigate("/vehicles")}>← Back to Vehicles</button>
      </div>
    );
  }

  if (success) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--black)", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "5rem", flexDirection: "column", gap: "1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: "4rem" }}>🎉</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", letterSpacing: 2 }}>BOOKING CONFIRMED!</h2>
        <p style={{ color: "var(--gray-400)" }}>Redirecting to your bookings...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        paddingTop: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem 2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          background: "var(--gray-800)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 24,
          overflow: "hidden",
        }}
      >
        {/* LEFT — Vehicle Info */}
        <div
          style={{
            background: "var(--gray-900)",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <button
            onClick={() => navigate("/vehicles")}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--gray-400)",
              fontSize: "0.85rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: 0,
            }}
          >
            ← Back to Vehicles
          </button>

          {/* Vehicle SVG illustration */}
          <div
            style={{
              background: "var(--gray-800)",
              borderRadius: 16,
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: "drop-shadow(0 0 30px rgba(232,79,29,0.2))",
            }}
          >
            <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
              <ellipse cx="140" cy="130" rx="100" ry="9" fill="rgba(0,0,0,0.3)" />
              <circle cx="58" cy="105" r="33" stroke="#3a3a3a" strokeWidth="9" />
              <circle cx="58" cy="105" r="22" stroke="#252525" strokeWidth="3" />
              <circle cx="58" cy="105" r="9" fill="#252525" /><circle cx="58" cy="105" r="5" fill="#e84f1d" />
              <circle cx="222" cy="105" r="33" stroke="#3a3a3a" strokeWidth="9" />
              <circle cx="222" cy="105" r="22" stroke="#252525" strokeWidth="3" />
              <circle cx="222" cy="105" r="9" fill="#252525" /><circle cx="222" cy="105" r="5" fill="#e84f1d" />
              <path d="M58 100 L108 72 L168 60 L215 78 L222 90" stroke="#e84f1d" strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M108 72 L103 102" stroke="#e84f1d" strokeWidth="6" strokeLinecap="round" />
              <path d="M130 60 Q155 38 182 48 L175 63 L128 64 Z" fill="#e84f1d" />
              <path d="M98 86 L166 77 L170 90 L94 96 Z" fill="#111" />
              <path d="M215 76 L232 64 L244 80" stroke="#555" strokeWidth="4" fill="none" />
              <circle cx="242" cy="83" r="13" fill="#111" /><circle cx="242" cy="83" r="8" fill="#e84f1d" opacity="0.9" />
              <path d="M58 96 Q38 104 18 109" stroke="#333" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <span
              style={{
                display: "inline-block",
                background: "rgba(232,79,29,0.12)",
                color: "#ff7a4d",
                borderRadius: 100,
                padding: "0.2rem 0.7rem",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: "0.5rem",
              }}
            >
              {vehicle.type}
            </span>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: 2, marginBottom: "0.5rem" }}>
              {vehicle.name}
            </h2>
            {vehicle.description && (
              <p style={{ color: "var(--gray-400)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                {vehicle.description}
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: 1 }}>Rate</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", letterSpacing: 1 }}>
                ₹{vehicle.pricePerHour}<span style={{ fontSize: "0.9rem", fontFamily: "inherit", letterSpacing: 0, color: "var(--gray-400)" }}>/hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Booking Form */}
        <div style={{ padding: "2.5rem" }}>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", letterSpacing: 2, marginBottom: "0.3rem" }}>
            BOOK THIS VEHICLE
          </h3>
          <p style={{ color: "var(--orange)", fontSize: "0.85rem", marginBottom: "2rem" }}>
            {vehicle.name} · {vehicle.type}
          </p>

          {!user && (
            <div
              style={{
                background: "rgba(232,79,29,0.08)",
                border: "1px solid rgba(232,79,29,0.2)",
                borderRadius: 12,
                padding: "1rem",
                fontSize: "0.85rem",
                color: "var(--gray-200)",
                marginBottom: "1.5rem",
              }}
            >
              ⚠️ You need to{" "}
              <span
                style={{ color: "var(--orange)", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                sign in
              </span>{" "}
              to make a booking.
            </div>
          )}

          {error && (
            <div
              style={{
                background: "rgba(232,79,29,0.1)",
                border: "1px solid rgba(232,79,29,0.3)",
                color: "#ff7a4d",
                padding: "0.8rem 1rem",
                borderRadius: 10,
                fontSize: "0.88rem",
                marginBottom: "1rem",
              }}
            >
              {error}
            </div>
          )}

          {/* Hours selector */}
          <div className="form-group">
            <label className="form-label">Rental Duration (Hours)</label>
            <input
              type="number"
              className="form-input"
              min={1}
              max={72}
              value={hours}
              onChange={(e) => setHours(Math.max(1, Number(e.target.value)))}
            />
          </div>

          {/* Quick pick buttons */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {[1, 2, 4, 6, 8, 12, 24].map((h) => (
              <button
                key={h}
                onClick={() => setHours(h)}
                style={{
                  background: hours === h ? "var(--orange)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${hours === h ? "var(--orange)" : "rgba(255,255,255,0.1)"}`,
                  color: "var(--white)",
                  padding: "0.35rem 0.8rem",
                  borderRadius: 100,
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {h}h
              </button>
            ))}
          </div>

          {/* Pricing summary */}
          <div className="modal-total" style={{ marginTop: 0 }}>
            <div>
              <div className="total-label">Total Price</div>
              <div style={{ fontSize: "0.78rem", color: "var(--gray-400)", marginTop: 2 }}>
                ₹{vehicle.pricePerHour} × {hours} hour{hours > 1 ? "s" : ""}
              </div>
            </div>
            <div className="total-price">₹{totalPrice}</div>
          </div>

          {/* Customer info (read-only if logged in) */}
          {user && (
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.06)",
                fontSize: "0.85rem",
                color: "var(--gray-200)",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "var(--gray-400)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: 1 }}>Booking For</div>
              <strong>{user.name}</strong> · {user.phone}
            </div>
          )}

          <button
            className="form-submit"
            onClick={handleBooking}
            disabled={submitting}
            style={{ marginTop: "1.5rem", opacity: submitting ? 0.7 : 1 }}
          >
            {submitting ? "CONFIRMING..." : `CONFIRM BOOKING — ₹${totalPrice} →`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RentUI;