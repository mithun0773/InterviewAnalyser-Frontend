import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/layout.css";

export default function AppLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout-container">
      {/* Topbar: Always on top */}
      <header className="topbar">
        <button className="hamburger-btn" onClick={() => setOpen(!open)}>
          <div className={`nav-icon ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <h2 className="top-title">
          Career<span>Companion</span>
        </h2>
      </header>

      <div className="main-wrapper">
        {/* Sidebar: Slides out */}
        <Sidebar open={open} setOpen={setOpen} />

        {/* Content: Padded to avoid being hidden under topbar */}
        <main className="main-content">
          <div className="content-inner">{children}</div>
        </main>
      </div>
    </div>
  );
}
