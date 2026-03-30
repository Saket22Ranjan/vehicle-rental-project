import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles');
        setVehicles(response.data);
      } catch (err) {
        setError('Failed to load vehicles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) return <div className="p-8 text-center" style={{minHeight: '100vh', background: 'var(--black)', color: 'var(--white)'}}>Loading vehicles...</div>;
  if (error) return <div className="p-8 text-center text-red-500" style={{minHeight: '100vh', background: 'var(--black)', color: 'var(--white)'}}>{error}</div>;

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--black)",
      padding: "6rem 2rem 2rem",
      position: "relative"
    }}>
      {/* Hero Header */}
      <div style={{
        textAlign: "center",
        padding: "3rem 2rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <span style={{
          display: "inline-block",
          background: "rgba(232,79,29,0.15)",
          color: "#ff7a4d",
          padding: "0.35rem 1rem",
          borderRadius: "100px",
          fontSize: "0.8rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "1rem"
        }}>
          Our Fleet
        </span>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          letterSpacing: "3px",
          lineHeight: "1",
          marginBottom: "1rem",
          color: "var(--white)"
        }}>
          CHOOSE YOUR<br />RIDE
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "var(--gray-400)",
          maxWidth: "500px",
          margin: "0 auto",
          lineHeight: "1.7"
        }}>
          Premium motorcycles • Instant booking • Starting just ₹{Math.min(...vehicles.map(v=>v.pricePerHour)) || 10}/hr
        </p>
      </div>

      {/* Vehicles Grid */}
      <div style={{
        maxWidth: "1400px",
        margin: "3rem auto",
        padding: "0 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
        gap: "2rem"
      }}>
        {vehicles.map(vehicle => (
          <div 
            key={vehicle._id}
            style={{
              background: "var(--gray-800)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: vehicle.available ? "pointer" : "default"
            }}
            onMouseEnter={(e) => {
              if (vehicle.available) {
                e.currentTarget.style.borderColor = "rgba(232,79,29,0.35)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            onClick={vehicle.available ? () => navigate(`/rent/${vehicle._id}`) : null}
          >
            {/* Badge */}
            <div style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: vehicle.available ? "#22c55e" : "#ef4444",
              color: "white",
              padding: "0.25rem 0.75rem",
              borderRadius: "100px",
              fontSize: "0.75rem",
              fontWeight: "500",
              zIndex: 2
            }}>
              {vehicle.available ? "AVAILABLE" : "RENTED"}
            </div>

            {/* SVG Illustration */}
            <div style={{
              height: "220px",
              background: "var(--gray-700)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              position: "relative"
            }}>
              <svg viewBox="0 0 280 140" fill="none" style={{width: "85%"}}>
                {/* Bike body */}
                <ellipse cx="140" cy="130" rx="100" ry="9" fill="rgba(0,0,0,0.3)" />
                <path d="M60 100 L110 72 L170 60 L220 78 L230 90" stroke="#e84f1d" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M110 72 L105 102" stroke="#e84f1d" strokeWidth="6" strokeLinecap="round" />
                <path d="M130 60 Q155 38 182 48 L175 63 L128 64 Z" fill="#e84f1d" />
                {/* Wheels */}
                <circle cx="60" cy="105" r="30" stroke="#3a3a3a" strokeWidth="8" />
                <circle cx="60" cy="105" r="20" stroke="#252525" strokeWidth="3" />
                <circle cx="220" cy="105" r="30" stroke="#3a3a3a" strokeWidth="8" />
                <circle cx="220" cy="105" r="20" stroke="#252525" strokeWidth="3" />
                {/* Headlight */}
                <circle cx="240" cy="83" r="12" fill="#111" />
                <circle cx="240" cy="83" r="7" fill="#e84f1d" opacity="0.9" />
              </svg>
            </div>

            {/* Content */}
            <div style={{padding: "1.8rem"}}>
              <span style={{
                display: "inline-block",
                background: "rgba(232,79,29,0.12)",
                color: "#ff7a4d",
                borderRadius: "100px",
                padding: "0.25rem 0.8rem",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "0.8rem"
              }}>
                {vehicle.type}
              </span>
              <h3 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.6rem",
                letterSpacing: "1px",
                marginBottom: "0.4rem",
                color: "var(--white)"
              }}>
                {vehicle.name}
              </h3>
              {vehicle.description && (
                <p style={{
                  color: "var(--gray-400)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  marginBottom: "1.2rem"
                }}>
                  {vehicle.description}
                </p>
              )}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.06)"
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  letterSpacing: "1px",
                  color: "var(--orange)"
                }}>
                  ₹{vehicle.pricePerHour}<span style={{fontSize: "0.85rem", color: "var(--gray-400)"}}>/hr</span>
                </div>
                {vehicle.available ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/rent/${vehicle._id}`);
                    }}
                    style={{
                      background: "var(--orange)",
                      color: "var(--white)",
                      border: "none",
                      padding: "0.65rem 1.8rem",
                      borderRadius: "100px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      letterSpacing: "0.5px"
                    }}
                    onMouseEnter={(e) => e.target.style.background = "#ff7a4d"}
                    onMouseLeave={(e) => e.target.style.background = "var(--orange)"}
                  >
                    Rent Now →
                  </button>
                ) : (
                  <span style={{
                    color: "var(--gray-400)",
                    fontSize: "0.85rem"
                  }}>
                    Unavailable
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;

