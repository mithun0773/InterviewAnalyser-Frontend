import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import "../styles/auth.css";
import Navbar from "../layout/Navbar";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await API.post("/auth/register", form);
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page-wrapper">
      <Navbar />
      <div className="auth-container">
        <form className="auth-box" onSubmit={handleSubmit}>
          <h2>Join the Future</h2>
          <p className="subtitle">
            Start your journey toward your dream career today.
          </p>

          <div className="input-group">
            <input
              type="text"
              className="auth-input"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              className="auth-input"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              className="auth-input"
              placeholder="Create Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button className="auth-btn">Create Account</button>

          {msg && (
            <p
              className="auth-msg"
              style={{
                color: msg.includes("failed") ? "#dc2626" : "#059669",
                background: msg.includes("failed") ? "#fef2f2" : "#f0fdf4",
              }}
            >
              {msg}
            </p>
          )}

          <p className="auth-link">
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
