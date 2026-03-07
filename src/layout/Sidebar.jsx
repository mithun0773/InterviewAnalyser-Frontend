import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Resume Analyzer", path: "/resume", icon: "📄" },
    { name: "Skill Gap", path: "/skills", icon: "🎯" },
    { name: "Job Matches", path: "/jobs", icon: "💼" },
    { name: "Interview Prep", path: "/interview", icon: "🎤" },
    { name: "Daily Goals", path: "/goals", icon: "🏆" },
  ];

  return (
    <>
      <div className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="logo-sq">AI</div>
          <h3>CareerUp</h3>
        </div>

        {/* This wrapper ensures the nav takes available space, pushing footer down */}
        <nav className="sidebar-nav-container">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            className="logout-btn-premium"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            <span className="btn-icon">🚪</span>
            <span className="btn-text">Logout</span>
          </button>
        </div>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
