// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AppLayout from "../layout/AppLayout";
// import API from "../api";
// import "../styles/job.css";

// export default function JobRecommend() {
//   const [skills, setSkills] = useState("");
//   const [results, setResults] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleRecommend = async () => {
//     if (!skills.trim())
//       return setMsg("Please list your skills to get started.");
//     setLoading(true);
//     setMsg("");

//     try {
//       const token = localStorage.getItem("authToken");
//       const res = await API.post(
//         "/jobs/recommend",
//         { skills },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       );
//       setResults(res.data.recommendations);
//     } catch (err) {
//       setMsg(
//         err.response?.data?.message ||
//           "Something went wrong. Please try again.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AppLayout>
//       <div className="job-page">
//         <header className="job-header">
//           <h1>
//             Role Matcher <span className="ai-tag">Beta</span>
//           </h1>
//           <p>
//             AI scans thousands of job descriptions to find where you fit best.
//           </p>
//         </header>

//         <div className="job-input-box">
//           <textarea
//             className="modern-textarea"
//             placeholder="E.g. React, Node.js, AWS, System Design, Python..."
//             value={skills}
//             onChange={(e) => setSkills(e.target.value)}
//           ></textarea>
//           <button
//             className="primary-cta"
//             onClick={handleRecommend}
//             disabled={loading}
//           >
//             {loading ? (
//               <span className="spinner"></span>
//             ) : (
//               "Find My Perfect Role"
//             )}
//           </button>
//           {msg && <p className="error-toast">{msg}</p>}
//         </div>

//         <div className="recommendations-grid">
//           {results.map((job, i) => (
//             <div className="job-bento-card" key={i}>
//               <div className="match-ring">
//                 <svg viewBox="0 0 36 36" className="circular-chart">
//                   <path
//                     className="circle-bg"
//                     d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                   />
//                   <path
//                     className="circle"
//                     strokeDasharray={`${job.score}, 100`}
//                     d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                   />
//                 </svg>
//                 <span className="match-val">{job.score}%</span>
//               </div>

//               <div className="job-info">
//                 <h3>{job.title}</h3>
//                 <p>{job.description}</p>

//                 <div className="gap-analysis">
//                   <h4>Missing Skills</h4>
//                   <div className="chip-container">
//                     {job.missingSkills.length === 0 ? (
//                       <span className="success-text">✨ Ready to Apply!</span>
//                     ) : (
//                       job.missingSkills.map((s, j) => (
//                         <span key={j} className="skill-chip-red">
//                           {s}
//                         </span>
//                       ))
//                     )}
//                   </div>
//                 </div>

//                 <div className="card-actions">
//                   <button
//                     onClick={() => navigate("/skills")}
//                     className="secondary-btn"
//                   >
//                     Bridge Gap
//                   </button>
//                   <button
//                     onClick={() => navigate("/interview")}
//                     className="ghost-btn"
//                   >
//                     Prep Interview
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </AppLayout>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AppLayout from "../layout/AppLayout";
// import API from "../api";
// import "../styles/job.css";

// export default function JobRecommend() {
//   const [skills, setSkills] = useState("");
//   const [results, setResults] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleRecommend = async () => {
//     if (!skills.trim())
//       return setMsg("Please list your skills to get started.");
//     setLoading(true);
//     setMsg("");

//     try {
//       const token = localStorage.getItem("authToken");
//       const res = await API.post(
//         "/jobs/recommend",
//         { skills },
//         { headers: { Authorization: `Bearer ${token}` } },
//       );
//       setResults(res.data.recommendations);
//     } catch (err) {
//       setMsg(
//         err.response?.data?.message || "AI Engine busy. Try again shortly.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AppLayout>
//       <div className="job-match-container">
//         {/* Dynamic Background Elements */}
//         <div className="bg-glow blue"></div>
//         <div className="bg-glow purple"></div>

//         <header className="job-hero">
//           <div className="hero-content">
//             <span className="ai-badge">Next-Gen Intelligence</span>
//             <h1>
//               Discover Your{" "}
//               <span className="gradient-text">Elite Career Path</span>
//             </h1>
//             <p>
//               Our neural network maps your skills against global market demands.
//             </p>
//           </div>
//         </header>

//         <section className="input-module">
//           <div className="glass-textarea-wrapper">
//             <textarea
//               className="ai-textarea"
//               placeholder="Enter your stack (e.g., React, Go, Docker, PostgreSQL...)"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//             ></textarea>
//             <div className="textarea-footer">
//               <span className="hint">
//                 AI analyzes context, not just keywords
//               </span>
//               <button
//                 className="neon-cta"
//                 onClick={handleRecommend}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <div className="loader"></div>
//                 ) : (
//                   "Generate Recommendations"
//                 )}
//               </button>
//             </div>
//           </div>
//           {msg && <p className="error-toast">{msg}</p>}
//         </section>

//         <div className="recommendations-view">
//           {results.map((job, i) => (
//             <div className="bento-card" key={i}>
//               <div className="card-top">
//                 <div className="match-visual">
//                   <svg viewBox="0 0 36 36" className="circular-chart-ai">
//                     <path
//                       className="circle-bg"
//                       d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                     />
//                     <path
//                       className="circle-progress"
//                       strokeDasharray={`${job.score}, 100`}
//                       d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                     />
//                   </svg>
//                   <div className="score-center">
//                     <span className="val">{job.score}%</span>
//                   </div>
//                 </div>
//                 <div className="role-meta">
//                   <span className="salary-tag">{job.salary || "$100k+"}</span>
//                   <h3>{job.title}</h3>
//                 </div>
//               </div>

//               <div className="card-body">
//                 <p className="job-desc">{job.description}</p>

//                 <div className="gap-analysis">
//                   <span className="label">Growth Gap</span>
//                   <div className="skill-tags">
//                     {job.missingSkills?.length > 0 ? (
//                       job.missingSkills.map((s, j) => (
//                         <span key={j} className="tag red">
//                           {s}
//                         </span>
//                       ))
//                     ) : (
//                       <span className="tag green">Perfect Alignment</span>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="card-footer">
//                 <button
//                   onClick={() => navigate("/skills")}
//                   className="action-btn blur"
//                 >
//                   Bridge Gap
//                 </button>
//                 <button
//                   onClick={() => navigate("/interview")}
//                   className="action-btn solid"
//                 >
//                   Interview Ready
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </AppLayout>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import API from "../api";
import "../styles/job.css";

export default function JobRecommend() {
  const [skills, setSkills] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRecommend = async () => {
    if (!skills.trim()) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const res = await API.post(
        "/jobs/recommend",
        { skills },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setResults(res.data.recommendations);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Improved Indian Currency Formatter (Lakhs Per Annum)
  const formatLPA = (val) => {
    // If AI provides a number like 1500000, convert to "15.0 LPA"
    const amount =
      typeof val === "string" ? parseInt(val.replace(/[^0-9]/g, "")) : val;
    if (!amount) return "Market Standard";

    const lakhs = amount / 100000;
    return `₹${lakhs.toFixed(1)} LPA`;
  };

  return (
    <AppLayout>
      <div className="resume-container">
        <header className="resume-header">
          <h1>
            Career <span className="highlight">Pathfinder</span>
          </h1>
          <p>AI-driven role matching for the Indian tech ecosystem.</p>
        </header>

        <section className="upload-section">
          <textarea
            className="resume-textarea"
            placeholder="Enter skills (e.g., React, Node.js, Python, AWS...)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          {/* Button with Shimmer & Loading Styling */}
          <button
            className={`analyze-btn ${loading ? "loading-active" : ""}`}
            onClick={handleRecommend}
            disabled={loading}
          >
            {loading ? (
              <div className="loader-container">
                <div className="spinner-dot"></div>
                <span>Neural Mapping...</span>
              </div>
            ) : (
              "Identify Best Roles"
            )}
          </button>
        </section>

        {results.length > 0 && (
          <div className="result-container animate-fade-in">
            <div className="bento-grid">
              {results.map((job, i) => (
                <div className="detail-box" key={i}>
                  <div className="box-top">
                    <span className="match-tag">{job.score}% Match</span>
                    <span className="salary-badge">
                      {formatLPA(job.salary)}
                    </span>
                  </div>
                  <h3>{job.title}</h3>
                  <p className="job-summary">{job.description}</p>

                  <div className="gap-section">
                    <label>Growth Gaps:</label>
                    <div className="skill-chips">
                      {job.missingSkills.map((s, j) => (
                        <span key={j} className="chip-red">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/interview")}
                    className="action-link"
                  >
                    Start Prep Roadmap →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}