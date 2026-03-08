import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("authUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <header className="glass-header">
          <div className="user-info">
            <h1>Creative Cloud Dashboard</h1>
            <p>
              Welcome back,{" "}
              <span className="highlight">{user?.name || "Explorer"}</span>
            </p>
          </div>
          <button className="ai-status-pill">AI Engine: Online</button>
        </header>

        <div className="bento-grid">
          {/* Large Hero Card */}
          <div className="bento-item hero-card">
            <div className="card-content">
              <span className="badge">AI ANALYSIS</span>
              <h2>Resume Strength</h2>
              <div className="score-display">
                <span className="big-num">72</span>
                <span className="percent">%</span>
              </div>
              <p>Your profile is in the top 15% of applicants this week.</p>
            </div>
            <div className="card-visual">
              <div className="abstract-shape"></div>
            </div>
          </div>

          {/* Medium Stats */}
          <div className="bento-item stat-glass blue">
            <h3>Skill Gap</h3>
            <p className="stat-val">Moderate</p>
            <div className="progress-bar">
              <div className="fill" style={{ width: "60%" }}></div>
            </div>
          </div>

          <div className="bento-item stat-glass purple">
            <h3>Job Matches</h3>
            <p className="stat-val">15</p>
            <span className="trend-up">↑ 12% increase</span>
          </div>

          {/* Quick Actions - Floating Style */}
          <div className="bento-item actions-container">
            <h3>Accelerate with AI</h3>
            <div className="action-pills">
              <Link to="/resume" className="pill">
                📄 Analyzer
              </Link>
              <Link to="/skills" className="pill">
                📊 Skills
              </Link>
              <Link to="/jobs" className="pill">
                💼 Jobs
              </Link>
              <Link to="/interview" className="pill">
                🎤 Mock Prep
              </Link>
            </div>
          </div>

          {/* Activity Feed - Clean List */}
          <div className="bento-item activity-card">
            <h3>Recent Intelligence</h3>
            <div className="feed">
              <div className="feed-item">
                <div className="dot"></div>
                <span>
                  Resume optimized for <strong>Google</strong>
                </span>
              </div>
              <div className="feed-item">
                <div className="dot"></div>
                <span>
                  New skill match: <strong>React Query</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
