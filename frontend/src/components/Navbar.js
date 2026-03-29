import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, [location]); // re-check on every route change

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{ boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.5)" : "none" }}>
      <Link to="/" className="logo" style={{ textDecoration: "none" }}>
        RIDE<span>X</span>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
        </li>
        <li>
          <Link to="/vehicles" className={isActive("/vehicles") ? "active" : ""}>Vehicles</Link>
        </li>
        {user && (
          <li>
            <Link to="/bookings" className={isActive("/bookings") ? "active" : ""}>My Bookings</Link>
          </li>
        )}
      </ul>

      <div className="nav-actions">
        {!user ? (
          <>
            <button className="btn btn-ghost" onClick={() => navigate("/login")}>
              Sign In
            </button>
            <button className="btn btn-primary" onClick={() => navigate("/signup")}>
              Get Started
            </button>
          </>
        ) : (
          <>
            <span style={{ color: "var(--gray-200)", fontSize: "0.88rem" }}>
              Hey, {user.name?.split(" ")[0]} 👋
            </span>
            <button className="btn btn-ghost" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;