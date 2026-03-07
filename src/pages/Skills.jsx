import React, { useState } from "react";
import AppLayout from "../layout/AppLayout";
import API from "../api";
import "../styles/skillgap.css";

const ROLES = [
  { id: "mern", label: "MERN Stack Developer", icon: "⚛️" },
  { id: "frontend", label: "Frontend Architect", icon: "🎨" },
  { id: "backend", label: "Backend Systems", icon: "⚙️" },
  { id: "cloud", label: "Cloud & DevOps", icon: "☁️" },
  { id: "ai-ml", label: "AI/ML Specialist", icon: "🤖" },
];

export default function SkillGap() {
  const [skills, setSkills] = useState("");
  const [role, setRole] = useState("mern");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!skills.trim()) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const res = await API.post(
        "/skills/analyze",
        { skills, role },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setResult(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="matrix-container">
        <header className="matrix-header">
          <span className="status-pill">AI Engine 2.5 Active</span>
          <h1>
            Skill <span className="text-gradient">Intelligence</span>
          </h1>
          <p>Map your expertise against Indian market benchmarks.</p>
        </header>

        {/* MODERN INPUT SECTION */}
        <section className="glass-panel input-area">
          <div className="role-selector-grid">
            {ROLES.map((r) => (
              <button
                key={r.id}
                className={`role-tab ${role === r.id ? "active" : ""}`}
                onClick={() => setRole(r.id)}
              >
                <span className="role-icon">{r.icon}</span>
                {r.label}
              </button>
            ))}
          </div>

          <div className="textarea-wrapper">
            <textarea
              className="matrix-input"
              placeholder="Paste your skills or job description keywords..."
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
            <button
              className={`glow-button ${loading ? "loading" : ""}`}
              onClick={handleAnalyze}
            >
              {loading ? <div className="spinner"></div> : "GENERATE MATRIX"}
            </button>
          </div>
        </section>

        {result && (
          <div className="bento-matrix-grid">
            {/* CARD 1: READINESS */}
            <div className="matrix-card hero-card">
              <div className="card-label">Market Readiness</div>
              <div className="score-display">
                <span className="big-num">{result.score}%</span>
                <div className="level-tag">{result.level}</div>
              </div>
              <p className="salary-hint">
                Est. Value:{" "}
                <span className="green-text">{result.salaryInsight}</span>
              </p>
            </div>

            {/* CARD 2: STRENGTHS */}
            <div className="matrix-card">
              <h3>✅ Core Strengths</h3>
              <div className="pill-cloud">
                {result.userSkills.map((s, i) => (
                  <span key={i} className="pill pill-green">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CARD 3: GAPS */}
            <div className="matrix-card">
              <h3>🚀 Priority Gaps</h3>
              <div className="pill-cloud">
                {result.missingSkills.map((s, i) => (
                  <span key={i} className="pill pill-red">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CARD 4: ROADMAP */}
            <div className="matrix-card roadmap-card full-width">
              <h3>🎯 Execution Roadmap</h3>
              <div className="timeline">
                {result.roadmap.map((step, i) => (
                  <div key={i} className="timeline-item">
                    <div className="time-tag">{step.phase}</div>
                    <div className="time-content">
                      <strong>{step.task}</strong>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
