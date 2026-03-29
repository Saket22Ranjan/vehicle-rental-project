import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">
          🚗 Vehicle Rental
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          {!user ? (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="nav-link">Signup</Link>
            </>
          ) : (
            <>
              <Link to="/vehicles" className="nav-link">Vehicles</Link>
              <Link to="/bookings" className="nav-link">Bookings</Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

