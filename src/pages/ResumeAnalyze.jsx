// import React, { useState } from "react";
// import API from "../api";
// import "../styles/resume.css";
// import AppLayout from "../layout/AppLayout";

// const ResumeAnalyze = () => {
//   const [file, setFile] = useState(null);
//   const [report, setReport] = useState(null);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) return setMsg("Please upload a resume");

//     const token = localStorage.getItem("authToken");
//     const form = new FormData();
//     form.append("file", file);

//     setLoading(true);
//     setMsg("");

//     try {
//       const res = await API.post("/resume/analyze", form, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setReport(res.data.report);
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AppLayout>
//       <div className="resume-analyzer-wrapper">
//         <div className="analyzer-hero">
//           <h1>
//             Resume Intelligence <span className="ai-sparkle">✨</span>
//           </h1>
//           <p>
//             Optimize your profile for the modern job market with AI-driven
//             insights.
//           </p>
//         </div>

//         {/* Upload Section */}
//         <div className="upload-container">
//           <form onSubmit={handleSubmit} className="modern-form">
//             <label className={`upload-zone ${file ? "active" : ""}`}>
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//               <div className="upload-icon">{file ? "✅" : "📄"}</div>
//               <h3>{file ? file.name : "Drop your resume here"}</h3>
//               <p>Supports PDF, DOCX, and TXT</p>
//             </label>

//             <button
//               type="submit"
//               className={`analyze-btn ${loading ? "loading" : ""}`}
//               disabled={loading}
//             >
//               {loading ? "Analyzing Matrix..." : "Analyze Impact"}
//             </button>
//           </form>
//           {msg && <p className="error-message">{msg}</p>}
//         </div>

//         {/* Results Section */}
//         {report && (
//           <div className="analysis-results">
//             {/* Top Score Bento */}
//             <div className="result-bento-grid">
//               <div className="bento-card score-card">
//                 <div
//                   className="score-ring"
//                   style={{ "--score-pct": `${report.score}%` }}
//                 >
//                   <div className="score-inner">
//                     <h2>{report.score}</h2>
//                     <span>Score</span>
//                   </div>
//                 </div>
//                 <h3>ATS Compatibility</h3>
//                 <p>
//                   {report.score > 75
//                     ? "Excellent work! Your resume is highly readable by automated systems."
//                     : "Minor formatting issues detected. Follow AI suggestions below."}
//                 </p>
//               </div>

//               <div className="bento-card insight-card">
//                 <div className="insight-header">
//                   <span className="insight-icon">💡</span>
//                   <h3>AI Strategic Advice</h3>
//                 </div>
//                 <div className="suggestion-cloud">
//                   {report.suggestions.map((s, i) => (
//                     <div key={i} className="suggestion-pill">
//                       {s}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Detailed Skills Section */}
//             <div className="skills-bento-grid">
//               <div className="bento-card list-card">
//                 <h4 className="green-text">Identified Core Strengths</h4>
//                 <div className="tag-box">
//                   {report.skillsFound.map((s, i) => (
//                     <span key={i} className="tag tag-success">
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="bento-card list-card">
//                 <h4 className="red-text">High-Priority Skill Gaps</h4>
//                 <div className="tag-box">
//                   {report.missingSkills.map((s, i) => (
//                     <span key={i} className="tag tag-danger">
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </AppLayout>
//   );
// };

// export default ResumeAnalyze;

// import React, { useState } from "react";
// import AppLayout from "../layout/AppLayout";
// import API from "../api";
// import "../styles/resume.css";

// export default function ResumeAnalyze() {
//   const [file, setFile] = useState(null);
//   const [role, setRole] = useState("MERN Stack Developer"); // Pass this to AI
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//  const handleUpload = async () => {
//    if (!file) return;
//    setLoading(true);
//    const formData = new FormData();
//    formData.append("resume", file);
//    formData.append("targetRole", role);

//    try {
//      const { data } = await API.post("/resume/analyze", formData);
//      // LOG THIS to see exactly what the AI sent back
//      console.log("AI Result:", data);
//      setResult(data);
//    } catch (err) {
//      console.error("Upload Error:", err);
//    } finally {
//      setLoading(false);
//    }
//  };

//   return (
//     <AppLayout>
//       <div className="resume-page">
//         <div className="upload-section">
//           <h2>AI Resume Insights</h2>
//           <p>
//             Upload your PDF/Doc to see how you match against industry standards.
//           </p>

//           <select
//             className="role-select"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option>MERN Stack Developer</option>
//             <option>Frontend Engineer</option>
//             <option>Backend Architect</option>
//             <option>DevOps Engineer</option>
//           </select>

//           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//           <button
//             className="analyze-btn"
//             onClick={handleUpload}
//             disabled={loading}
//           >
//             {loading ? "AI is Thinking..." : "Analyze Resume"}
//           </button>
//         </div>

//         {result && (
//           <div className="result-container">
//             {/* The Match Meter */}
//             <div className="score-card">
//               <div className="score-circle">
//                 <h3>{result.score}%</h3>
//                 <span>Match Score</span>
//               </div>
//               <div className="level-tag">{result.level} Level</div>
//             </div>

//             <div className="details-grid">
//               <div className="detail-box">
//                 <h4>Skills Identified</h4>
//                 <div className="chips">
//                   {/* 1. Only show the container if result exists */}
//                   {result && (
//                     <div className="result-container">
//                       <div className="score-card">
//                         <h3>{result.score}% Match</h3>
//                       </div>

//                       <div className="details-grid">
//                         <div className="detail-box">
//                           <h4>Skills Identified</h4>
//                           <div className="chips">
//                             {/* 2. Use ?. to prevent crashes if skillsFound is missing */}
//                             {result.skillsFound?.map((s, i) => (
//                               <span key={i} className="chip green">
//                                 {s}
//                               </span>
//                             ))}
//                           </div>
//                         </div>

//                         <div className="detail-box">
//                           <h4>Skill Gaps</h4>
//                           <div className="chips">
//                             {result.missingSkills?.map((s, i) => (
//                               <span key={i} className="chip red">
//                                 {s}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="ai-suggestions">
//                         <h4>AI Recommendations</h4>
//                         {/* Check if suggestions exist and has length */}
//                         {result.suggestions && result.suggestions.length > 0 ? (
//                           <ul>
//                             {result.suggestions.map((s, i) => (
//                               <li key={i}>{s}</li>
//                             ))}
//                           </ul>
//                         ) : (
//                           <p>No specific recommendations found.</p>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="ai-suggestions">
//               <h4>AI Recommendations</h4>
//               <ul>
//                 {result.suggestions.map((s, i) => (
//                   <li key={i}>{s}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </AppLayout>
//   );
// }
import React, { useState } from "react";
import AppLayout from "../layout/AppLayout";
import API from "../api";
import "../styles/resume.css";

export default function ResumeAnalyze() {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("MERN Stack Developer");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("targetRole", role);

    try {
      const { data } = await API.post("/resume/analyze", formData);
      setResult(data);
    } catch (err) {
      console.error("Upload Error:", err);
      alert("Analysis failed. Please check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="resume-page">
        {/* Input Section */}
        <div className="upload-card">
          <div className="upload-header">
            <h2>AI Resume Insights</h2>
            <p>
              Upload your PDF to see how you match against industry standards.
            </p>
          </div>

          <div className="controls-row">
            <select
              className="role-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>MERN Stack Developer</option>
              <option>Frontend Engineer</option>
              <option>Backend Architect</option>
              <option>DevOps Engineer</option>
            </select>

            <div className="file-input-wrapper">
              <input
                type="file"
                id="resume-upload"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".pdf"
              />
              <label htmlFor="resume-upload" className="file-label">
                {file ? file.name : "Choose PDF..."}
              </label>
            </div>

            <button
              className={`analyze-btn ${loading ? "loading" : ""}`}
              onClick={handleUpload}
              disabled={loading || !file}
            >
              {loading ? <div className="spinner"></div> : "Analyze Resume"}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="result-container animate-fade-in">
            <div className="score-summary-card">
              <div className="score-viz">
                <div
                  className="circular-progress"
                  style={{ "--percent": result.score }}
                >
                  <div className="inner-content">
                    <span className="score-num">{result.score}%</span>
                    <span className="score-label">Match</span>
                  </div>
                </div>
              </div>
              <div className="score-info">
                <span className="level-badge">{result.level} Level</span>
                <h3>Candidate Fit Assessment</h3>
                <p>
                  Based on your profile, you have a{" "}
                  <strong>{result.score}%</strong> match for the{" "}
                  <strong>{role}</strong> position.
                </p>
              </div>
            </div>

            <div className="details-grid">
              <div className="detail-box success">
                <h4>
                  <span className="icon">✓</span> Skills Identified
                </h4>
                <div className="chips">
                  {result.skillsFound?.length > 0 ? (
                    result.skillsFound.map((s, i) => (
                      <span key={i} className="chip">
                        {s}
                      </span>
                    ))
                  ) : (
                    <p className="empty-text">No matching skills detected.</p>
                  )}
                </div>
              </div>

              <div className="detail-box warning">
                <h4>
                  <span className="icon">!</span> Skill Gaps
                </h4>
                <div className="chips">
                  {result.missingSkills?.length > 0 ? (
                    result.missingSkills.map((s, i) => (
                      <span key={i} className="chip">
                        {s}
                      </span>
                    ))
                  ) : (
                    <p className="empty-text">No significant gaps found!</p>
                  )}
                </div>
              </div>
            </div>

            <div className="ai-suggestions-card">
              <h4>🚀 Strategic Recommendations</h4>
              {result.suggestions?.length > 0 ? (
                <ul>
                  {result.suggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              ) : (
                <p>
                  Maintain your current profile or explore advanced
                  certifications.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
