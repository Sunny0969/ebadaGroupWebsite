import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Employers.css";

const SAMPLE_JOBS = [
  { id: 1, title: "Production Line Operator", status: "Active", candidates: 12, posted: "2024-03-15" },
  { id: 2, title: "Quality Control Inspector", status: "Active", candidates: 8, posted: "2024-03-18" },
  { id: 3, title: "Mechanical Engineer", status: "Filled", candidates: 15, posted: "2024-03-10" }
];

const SAMPLE_CANDIDATES = [
  { id: 1, name: "Tanaka Hiroshi", position: "Production Line Operator", experience: "3 years", status: "Screening", applied: "2024-03-20" },
  { id: 2, name: "Yamada Yuki", position: "Quality Control Inspector", experience: "5 years", status: "Interview Scheduled", applied: "2024-03-19" },
  { id: 3, name: "Suzuki Kenji", position: "Production Line Operator", experience: "2 years", status: "New", applied: "2024-03-21" }
];

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple login check - in real app, this would authenticate with backend
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="emp">
        <Header />
        <section className="emp-portal">
          <div className="emp-wrap">
            <div className="emp-portal__login">
              <h2 className="emp-portal__login-title">Client Portal Login</h2>
              <p className="emp-portal__login-subtitle">Access your dashboard, candidate database, and billing information.</p>
              
              <form onSubmit={handleLogin} style={{ marginTop: "2rem" }}>
                <div className="emp-form-group">
                  <label>Email Address <span className="emp-form-group__required">*</span></label>
                  <input 
                    type="email" 
                    required 
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    placeholder="your.email@company.com"
                  />
                </div>
                <div className="emp-form-group">
                  <label>Password <span className="emp-form-group__required">*</span></label>
                  <input 
                    type="password" 
                    required 
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="emp-btn emp-btn--primary" style={{ width: "100%", marginTop: "1rem" }}>
                  Login
                </button>
                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                  <Link to="/support" style={{ color: "var(--accent)", fontSize: "0.9rem" }}>Forgot Password?</Link>
                </div>
                <div style={{ textAlign: "center", marginTop: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Don't have an account?</p>
                  <a href="/employers/post-job" style={{ color: "var(--accent)", fontWeight: 600 }}>Contact us to get access</a>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="emp">
      <Header />

      <section className="emp-portal">
        <div className="emp-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <h1 className="emp-h1">Client Portal</h1>
            <button className="emp-btn emp-btn--outline" onClick={() => setIsLoggedIn(false)}>Logout</button>
          </div>

          {/* Dashboard Stats */}
          <div className="emp-portal__dashboard">
            <h2 className="emp-h2" style={{ marginBottom: "1.5rem" }}>Dashboard Overview</h2>
            <div className="emp-portal__stats">
              <div className="emp-portal__stat">
                <div className="emp-portal__stat-value">3</div>
                <div className="emp-portal__stat-label">Active Job Postings</div>
              </div>
              <div className="emp-portal__stat">
                <div className="emp-portal__stat-value">35</div>
                <div className="emp-portal__stat-label">Total Candidates</div>
              </div>
              <div className="emp-portal__stat">
                <div className="emp-portal__stat-value">8</div>
                <div className="emp-portal__stat-label">Interviews Scheduled</div>
              </div>
              <div className="emp-portal__stat">
                <div className="emp-portal__stat-value">1</div>
                <div className="emp-portal__stat-label">Positions Filled</div>
              </div>
            </div>
          </div>

          {/* Active Job Postings */}
          <div className="emp-portal__dashboard">
            <h2 className="emp-h2" style={{ marginBottom: "1.5rem" }}>Active Job Postings</h2>
            <table className="emp-portal__table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Status</th>
                  <th>Candidates</th>
                  <th>Posted Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_JOBS.map(job => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>
                      <span style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "100px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        background: job.status === "Active" ? "rgba(232,67,26,0.1)" : "rgba(138,149,163,0.1)",
                        color: job.status === "Active" ? "var(--accent)" : "var(--muted)"
                      }}>
                        {job.status}
                      </span>
                    </td>
                    <td>{job.candidates}</td>
                    <td>{job.posted}</td>
                    <td>
                      <button 
                        className="emp-btn emp-btn--sm" 
                        style={{ marginRight: "0.5rem" }}
                        onClick={() => alert(`Viewing details for: ${job.title}`)}
                      >
                        View
                      </button>
                      <Link to="/employers/post-job" className="emp-btn emp-btn--sm emp-btn--outline" style={{ textDecoration: "none", display: "inline-block" }}>
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Candidate Database */}
          <div className="emp-portal__dashboard">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <h2 className="emp-h2" style={{ margin: 0 }}>Candidate Database</h2>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <input 
                  type="text" 
                  placeholder="Search candidates..." 
                  style={{ padding: "0.6rem 1rem", border: "1px solid var(--border)", borderRadius: "var(--r)", fontSize: "0.9rem" }}
                />
                <select style={{ padding: "0.6rem 1rem", border: "1px solid var(--border)", borderRadius: "var(--r)", fontSize: "0.9rem" }}>
                  <option>All Positions</option>
                  <option>Production Line Operator</option>
                  <option>Quality Control Inspector</option>
                </select>
              </div>
            </div>
            <table className="emp-portal__table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Experience</th>
                  <th>Status</th>
                  <th>Applied</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_CANDIDATES.map(candidate => (
                  <tr key={candidate.id}>
                    <td>{candidate.name}</td>
                    <td>{candidate.position}</td>
                    <td>{candidate.experience}</td>
                    <td>
                      <span style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "100px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        background: candidate.status === "New" ? "rgba(232,67,26,0.1)" : "rgba(138,149,163,0.1)",
                        color: candidate.status === "New" ? "var(--accent)" : "var(--muted)"
                      }}>
                        {candidate.status}
                      </span>
                    </td>
                    <td>{candidate.applied}</td>
                    <td>
                      <button 
                        className="emp-btn emp-btn--sm" 
                        style={{ marginRight: "0.5rem" }}
                        onClick={() => alert(`Viewing profile of ${candidate.name}`)}
                      >
                        View Profile
                      </button>
                      <button 
                        className="emp-btn emp-btn--sm emp-btn--outline"
                        onClick={() => alert(`Interview request sent for ${candidate.name}`)}
                      >
                        Request Interview
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Billing & Invoices */}
          <div className="emp-portal__dashboard">
            <h2 className="emp-h2" style={{ marginBottom: "1.5rem" }}>Billing & Invoices</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", borderLeft: "3px solid var(--accent)" }}>
                <div style={{ fontSize: "0.9rem", color: "var(--txt-2)", marginBottom: "0.5rem" }}>Outstanding Balance</div>
                <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--accent)" }}>¥0</div>
              </div>
              <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", borderLeft: "3px solid var(--accent)" }}>
                <div style={{ fontSize: "0.9rem", color: "var(--txt-2)", marginBottom: "0.5rem" }}>This Month</div>
                <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--navy)" }}>¥450,000</div>
              </div>
              <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", borderLeft: "3px solid var(--accent)" }}>
                <div style={{ fontSize: "0.9rem", color: "var(--txt-2)", marginBottom: "0.5rem" }}>Last Payment</div>
                <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--navy)" }}>¥320,000</div>
              </div>
            </div>
            <table className="emp-portal__table">
              <thead>
                <tr>
                  <th>Invoice #</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INV-2024-001</td>
                  <td>2024-03-15</td>
                  <td>¥450,000</td>
                  <td>
                    <span style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "100px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      background: "rgba(138,149,163,0.1)",
                      color: "var(--muted)"
                    }}>
                      Paid
                    </span>
                  </td>
                  <td>
                    <button 
                      className="emp-btn emp-btn--sm emp-btn--outline"
                      onClick={() => alert("Invoice download would be initiated here")}
                    >
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>INV-2024-002</td>
                  <td>2024-02-15</td>
                  <td>¥320,000</td>
                  <td>
                    <span style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "100px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      background: "rgba(138,149,163,0.1)",
                      color: "var(--muted)"
                    }}>
                      Paid
                    </span>
                  </td>
                  <td>
                    <button 
                      className="emp-btn emp-btn--sm emp-btn--outline"
                      onClick={() => alert("Invoice download would be initiated here")}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
