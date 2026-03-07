import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import API from "../api";
import "../styles/goals.css";

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [heatmap, setHeatmap] = useState([]);
  const [text, setText] = useState("");
  const token = localStorage.getItem("authToken");

  const loadData = async () => {
    try {
      const [todayRes, heatmapRes] = await Promise.all([
        API.get("/goals/today", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        API.get("/goals/heatmap", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setGoals(todayRes.data);
      setHeatmap(heatmapRes.data);
    } catch (err) {
      console.error("Failed to load goals");
    }
  };

  const addGoal = async () => {
    if (!text.trim()) return;
    await API.post(
      "/goals/add",
      { text },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    setText("");
    loadData();
  };

  const completeGoal = async (id) => {
    await API.put(
      `/goals/done/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  // Calculate quick stats
  const completedToday = goals.filter((g) => g.completed).length;

  return (
    <AppLayout>
      <div className="goals-container">
        <header className="goals-header">
          <div>
            <h1>Daily Momentum</h1>
            <p>Consistency is the bridge between goals and accomplishment.</p>
          </div>
          <div className="streak-badge">
            <span className="fire-icon">🔥</span>
            <div className="streak-info">
              <strong>{heatmap.filter((h) => h.completed).length} Days</strong>
              <span>Active Streak</span>
            </div>
          </div>
        </header>

        {/* Input Card */}
        <div className="goal-input-card">
          <input
            placeholder="What's the one thing you'll achieve today?"
            className="modern-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addGoal()}
          />
          <button className="add-goal-btn" onClick={addGoal}>
            Focus on This
          </button>
        </div>

        <div className="goals-grid">
          {/* List Section */}
          <section className="tasks-section">
            <div className="section-title">
              <h3>Today's Focus</h3>
              <span className="task-count">
                {completedToday}/{goals.length} Done
              </span>
            </div>
            <div className="goal-list">
              {goals.length === 0 ? (
                <div className="empty-state">
                  No goals yet. Set your intention above!
                </div>
              ) : (
                goals.map((g) => (
                  <div
                    key={g._id}
                    className={`goal-card ${g.completed ? "is-done" : ""}`}
                  >
                    <div className="goal-content">
                      <div
                        className={`status-dot ${g.completed ? "checked" : ""}`}
                      ></div>
                      <span className="goal-text">{g.text}</span>
                    </div>
                    {!g.completed && (
                      <button
                        className="check-btn"
                        onClick={() => completeGoal(g._id)}
                      >
                        Done
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Heatmap Section */}
          <section className="heatmap-section">
            <div className="section-title">
              <h3>Activity Map</h3>
              <span>Last 30 Days</span>
            </div>
            <div className="heatmap-card">
              <div className="heatmap-grid">
                {heatmap.map((h, i) => (
                  <div
                    key={i}
                    className={`heatbox ${h.completed ? "level-high" : "level-none"}`}
                    title={h.date || "Activity"}
                  ></div>
                ))}
              </div>
              <div className="heatmap-legend">
                <span>Less</span>
                <div className="heatbox level-none"></div>
                <div className="heatbox level-high"></div>
                <span>More</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
