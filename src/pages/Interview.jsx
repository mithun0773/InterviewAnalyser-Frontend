import React, { useState } from "react";
import AppLayout from "../layout/AppLayout";
import API from "../api";
import "../styles/interview.css";

const ROLES = [
  { id: "MERN Stack", icon: "⚛️", color: "#61DAFB" },
  { id: "Frontend Architect", icon: "🎨", color: "#EC4899" },
  { id: "Backend Systems", icon: "⚙️", color: "#10B981" },
  { id: "Cloud/DevOps", icon: "☁️", color: "#3B82F6" },
  { id: "AI Engineer", icon: "🤖", color: "#8B5CF6" },
];

export default function Interview() {
  const [role, setRole] = useState("MERN Stack");
  const [level, setLevel] = useState("medium");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const startSession = async () => {
    setLoading(true);
    try {
      const res = await API.post(
        "/interview/generate",
        { role, level },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        },
      );
      setQuestions(res.data.questions);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="battle-container">
        <header className="battle-header">
          <div className="status-badge">
            System: <span>Ready</span>
          </div>
          <h1>
            Technical <span className="gradient-text">Battleground</span>
          </h1>
          <p>Deploy AI-driven interview simulations for your target role.</p>
        </header>

        {/* ROLE SELECTION SCROLLER */}
        <section className="config-glass-panel">
          <div className="role-scroller">
            {ROLES.map((r) => (
              <div
                key={r.id}
                className={`role-pill-card ${role === r.id ? "active" : ""}`}
                onClick={() => setRole(r.id)}
              >
                <div
                  className="icon-wrap"
                  style={{ backgroundColor: `${r.color}20` }}
                >
                  {r.icon}
                </div>
                <span>{r.id}</span>
              </div>
            ))}
          </div>

          <div className="config-controls">
            <div className="difficulty-segmented">
              {["easy", "medium", "hard"].map((l) => (
                <button
                  key={l}
                  className={`seg-btn ${level === l ? "active " + l : ""}`}
                  onClick={() => setLevel(l)}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              className={`ultra-fire-btn ${loading ? "is-loading" : ""}`}
              onClick={startSession}
              disabled={loading}
            >
              <div className="btn-content">
                {loading ? "INITIALIZING..." : "START SESSION"}
                {loading && <div className="scanning-line"></div>}
              </div>
            </button>
          </div>
        </section>

        {/* QUESTION GRID */}
        <div className="interview-grid">
          {questions.map((item, i) => (
            <div key={i} className="q-bento-card">
              <div className="q-meta">
                <span className="q-index">OBJ-0{i + 1}</span>
                <span className="q-type">ALGORITHM/THEORY</span>
              </div>
              <h3>{item.q}</h3>

              <div className="coach-tip-box">
                <strong>💡 Strategy:</strong> {item.tip}
              </div>

              <details className="answer-terminal-dropdown">
                <summary>REVEAL EXPERT ANALYSIS</summary>
                <div className="terminal-box">
                  <div className="terminal-top">
                    <div className="t-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span>model_answer.sh</span>
                  </div>
                  <pre>
                    <code>{item.a}</code>
                  </pre>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
