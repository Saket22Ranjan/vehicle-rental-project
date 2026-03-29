import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <div className="logo">RIDE<span>X</span></div>
          <p>Your trusted partner for premium vehicle rentals. Ride freely, ride boldly.</p>
        </div>
        <div className="footer-col">
          <h4>Vehicles</h4>
          <ul>
            <li><Link to="/vehicles">Motorcycles</Link></li>
            <li><Link to="/vehicles">Scooters</Link></li>
            <li><Link to="/vehicles">Sports Bikes</Link></li>
            <li><Link to="/vehicles">Cruisers</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/bookings">My Bookings</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <span>© 2025 RideX Vehicle Rentals. All rights reserved.</span>
        <span>Made with ❤️ for riders</span>
      </div>
    </>
  );
}

export default Footer;