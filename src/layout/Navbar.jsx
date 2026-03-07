import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ setOpen }) => {
  const location = useLocation();
  // Don't show the hamburger on Login/Register pages
  const isAuthPage =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <nav className="navbar">
      <div className="nav-left">
        {!isAuthPage && (
          <button
            className="menu-toggle"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        <div className="nav-logo">
          Career<span>Companion</span> 🚀
        </div>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-item">
          Login
        </Link>
        <Link to="/register" className="nav-item btn-primary">
          Join Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
