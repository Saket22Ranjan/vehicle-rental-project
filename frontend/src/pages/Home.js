import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "var(--black)" }}>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-badge">
            <svg width="8" height="8" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="4" fill="#e84f1d" />
            </svg>
            Premium Vehicle Rentals
          </div>

          <h1 className="hero-title">
            RIDE <span className="accent">YOUR</span>
            <span className="line2">WAY</span>
          </h1>

          <p className="hero-sub">
            Discover the freedom of two wheels. Premium bikes and scooters
            available for hourly, daily, or long-term rental.
          </p>

          <div className="hero-cta">
            <button
              className="btn btn-primary btn-big"
              onClick={() => navigate("/vehicles")}
            >
              Browse Vehicles
            </button>
            <button
              className="btn btn-ghost btn-big"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="num">120+</div>
              <div className="label">Vehicles</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="num">4.9★</div>
              <div className="label">Rating</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="num">5K+</div>
              <div className="label">Happy Riders</div>
            </div>
          </div>
        </div>

        {/* Hero Bike Illustration */}
        <div className="hero-visual">
          <div className="bike-showcase">
            <div className="bike-svg-container">
              <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" fill="none">
                <ellipse cx="300" cy="275" rx="180" ry="18" fill="rgba(0,0,0,0.35)" />
                <circle cx="160" cy="230" r="65" stroke="#3a3a3a" strokeWidth="14" />
                <circle cx="160" cy="230" r="50" stroke="#252525" strokeWidth="4" />
                <circle cx="160" cy="230" r="18" fill="#252525" />
                <circle cx="160" cy="230" r="10" fill="#e84f1d" />
                <line x1="160" y1="165" x2="160" y2="248" stroke="#3a3a3a" strokeWidth="2.5" />
                <line x1="95" y1="200" x2="218" y2="260" stroke="#3a3a3a" strokeWidth="2.5" />
                <line x1="95" y1="260" x2="218" y2="200" stroke="#3a3a3a" strokeWidth="2.5" />
                <circle cx="440" cy="230" r="65" stroke="#3a3a3a" strokeWidth="14" />
                <circle cx="440" cy="230" r="50" stroke="#252525" strokeWidth="4" />
                <circle cx="440" cy="230" r="18" fill="#252525" />
                <circle cx="440" cy="230" r="10" fill="#e84f1d" />
                <line x1="440" y1="165" x2="440" y2="248" stroke="#3a3a3a" strokeWidth="2.5" />
                <line x1="375" y1="200" x2="498" y2="260" stroke="#3a3a3a" strokeWidth="2.5" />
                <line x1="375" y1="260" x2="498" y2="200" stroke="#3a3a3a" strokeWidth="2.5" />
                <path d="M160 230 L240 210" stroke="#3a3a3a" strokeWidth="6" strokeLinecap="round" />
                <rect x="200" y="195" width="120" height="70" rx="8" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2" />
                <rect x="212" y="207" width="96" height="46" rx="6" fill="#111" />
                <path d="M240 200 L280 140 L350 130 L420 165 L440 165" stroke="#e84f1d" strokeWidth="10" strokeLinecap="round" />
                <path d="M240 200 L160 200" stroke="#2a2a2a" strokeWidth="10" strokeLinecap="round" />
                <path d="M280 140 L260 200" stroke="#e84f1d" strokeWidth="8" strokeLinecap="round" />
                <path d="M350 130 L320 200" stroke="#e84f1d" strokeWidth="8" strokeLinecap="round" />
                <path d="M420 165 L440 165 L450 230" stroke="#2a2a2a" strokeWidth="10" strokeLinecap="round" />
                <path d="M275 130 Q310 100 355 128 L340 165 L290 165 Z" fill="#e84f1d" />
                <path d="M280 130 Q310 105 350 128 L345 145 L285 145 Z" fill="#ff6535" opacity="0.5" />
                <path d="M240 165 Q290 150 360 155 L355 175 L235 175 Z" fill="#1a1a1a" />
                <circle cx="464" cy="155" r="22" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="3" />
                <circle cx="464" cy="155" r="16" fill="#e84f1d" opacity="0.9" />
                <circle cx="464" cy="155" r="10" fill="#ffddcc" opacity="0.8" />
                <path d="M200 240 Q180 250 150 255 Q130 255 100 265" stroke="#3a3a3a" strokeWidth="8" strokeLinecap="round" />
                <path d="M440 140 L480 125 M440 140 L400 125" stroke="#3a3a3a" strokeWidth="7" strokeLinecap="round" />
                <circle cx="480" cy="122" r="8" fill="#252525" stroke="#444" strokeWidth="2" />
                <circle cx="400" cy="122" r="8" fill="#252525" stroke="#444" strokeWidth="2" />
              </svg>
              <div className="bike-label top-right">
                <div className="l-title">Top Speed</div>
                <div className="l-val">180 km/h</div>
              </div>
              <div className="bike-label bottom-left">
                <div className="l-title">From</div>
                <div className="l-val">₹99/hr</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <div className="features-strip">
        <div className="feat-item">
          <div className="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e84f1d" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="feat-text">
            <div className="title">Fully Insured</div>
            <div className="desc">All vehicles covered</div>
          </div>
        </div>
        <div className="feat-item">
          <div className="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e84f1d" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className="feat-text">
            <div className="title">24/7 Support</div>
            <div className="desc">Always here for you</div>
          </div>
        </div>
        <div className="feat-item">
          <div className="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e84f1d" strokeWidth="2" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="feat-text">
            <div className="title">Doorstep Delivery</div>
            <div className="desc">We come to you</div>
          </div>
        </div>
        <div className="feat-item">
          <div className="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e84f1d" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="feat-text">
            <div className="title">No Hidden Fees</div>
            <div className="desc">Transparent pricing</div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <span className="section-label">Simple Process</span>
          <h2 className="section-title">RENT IN 3 EASY STEPS</h2>
          <p style={{ color: "var(--gray-400)", fontSize: "0.95rem" }}>
            Getting on the road has never been easier.
          </p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">01</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <h3>Choose Your Ride</h3>
            <p>Browse our fleet of bikes, scooters, and motorcycles. Filter by type and availability.</p>
          </div>
          <div className="step-card">
            <div className="step-num">02</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3>Pick Your Hours</h3>
            <p>Select how many hours you need. Flexible hourly pricing to match your plans.</p>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <h3>Ride &amp; Enjoy</h3>
            <p>Confirm your booking instantly and hit the road. Return when done — simple!</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: "var(--gray-900)" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <span className="section-label">Reviews</span>
          <h2 className="section-title">RIDERS LOVE US</h2>
        </div>
        <div className="reviews-grid">
          {[
            { initials: "AR", name: "Arjun Rathore", tag: "Delhi · 12 rentals", stars: 5, text: "Absolutely seamless experience! The Royal Enfield I rented was in perfect condition, delivered right on time." },
            { initials: "PS", name: "Priya Sharma", tag: "Mumbai · 8 rentals", stars: 5, text: "Best bike rental service I've used. Transparent pricing, great selection, and booking is super easy!" },
            { initials: "VK", name: "Vikram Kapoor", tag: "Bangalore · 5 rentals", stars: 4, text: "Rented a scooter for a week — best decision ever. The team was responsive and bike was well maintained." },
          ].map((r) => (
            <div className="review-card" key={r.name}>
              <div className="stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <p className="review-text">"{r.text}"</p>
              <div className="reviewer">
                <div className="avatar">{r.initials}</div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-tag">{r.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;