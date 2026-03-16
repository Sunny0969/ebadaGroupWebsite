import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../../contexts/AuthContext";
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
  const { user, login, register, logout, isAuthenticated } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    industry: "",
    address: ""
  });

  // Check URL parameter for register mode
  useEffect(() => {
    const registerParam = searchParams.get('register');
    if (registerParam === 'true') {
      setShowRegister(true);
      // Remove the parameter from URL after setting state
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login(loginData.email, loginData.password);
    } catch (err: any) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validation
    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (registerData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = registerData;
      await register(dataToSend);
      setShowRegister(false);
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="emp">
        <Header />
        <section className="emp-portal">
          <div className="emp-wrap">
            <div className="emp-portal__login">
              <h2 className="emp-portal__login-title">
                {showRegister ? "Create Account" : "Client Portal Login"}
              </h2>
              <p className="emp-portal__login-subtitle">
                {showRegister 
                  ? "Register to access your dashboard, post jobs, and manage candidates."
                  : "Access your dashboard, candidate database, and billing information."}
              </p>
              
              {error && (
                <div style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  background: "rgba(232, 67, 26, 0.1)",
                  border: "1px solid var(--accent)",
                  borderRadius: "var(--r)",
                  color: "var(--accent)",
                  fontSize: "0.9rem"
                }}>
                  {error}
                </div>
              )}

              {showRegister ? (
                <form onSubmit={handleRegister} style={{ marginTop: "2rem" }}>
                  <div className="emp-form-group">
                    <label>Company Name <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="text" 
                      required 
                      value={registerData.companyName}
                      onChange={(e) => setRegisterData({...registerData, companyName: e.target.value})}
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div className="emp-form-group">
                    <label>Contact Person <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="text" 
                      required 
                      value={registerData.contactPerson}
                      onChange={(e) => setRegisterData({...registerData, contactPerson: e.target.value})}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="emp-form-group">
                    <label>Email Address <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="email" 
                      required 
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div className="emp-form-group">
                    <label>Phone <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="tel" 
                      required 
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="emp-form-group">
                    <label>Industry</label>
                    <select 
                      value={registerData.industry}
                      onChange={(e) => setRegisterData({...registerData, industry: e.target.value})}
                    >
                      <option value="">Select Industry</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Construction">Construction</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Technology">Technology</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="emp-form-group">
                    <label>Address</label>
                    <textarea 
                      value={registerData.address}
                      onChange={(e) => setRegisterData({...registerData, address: e.target.value})}
                      placeholder="Company Address (Optional)"
                      rows={2}
                    />
                  </div>
                  <div className="emp-form-group">
                    <label>Password <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="password" 
                      required 
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                      placeholder="Minimum 6 characters"
                      minLength={6}
                    />
                  </div>
                  <div className="emp-form-group">
                    <label>Confirm Password <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="password" 
                      required 
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                      placeholder="Confirm Password"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="emp-btn emp-btn--primary" 
                    style={{ width: "100%", marginTop: "1rem" }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Registering..." : "Register"}
                  </button>
                  <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <p style={{ color: "var(--txt-2)", fontSize: "0.9rem" }}>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setShowRegister(false);
                          setError("");
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--accent)",
                          cursor: "pointer",
                          fontWeight: 600,
                          textDecoration: "underline"
                        }}
                      >
                        Login here
                      </button>
                    </p>
                  </div>
                </form>
              ) : (
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
                  <button 
                    type="submit" 
                    className="emp-btn emp-btn--primary" 
                    style={{ width: "100%", marginTop: "1rem" }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                  <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <Link to="/support" style={{ color: "var(--accent)", fontSize: "0.9rem" }}>Forgot Password?</Link>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                    <p style={{ color: "var(--txt-2)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Don't have an account?</p>
                    <button
                      type="button"
                      onClick={() => {
                        setShowRegister(true);
                        setError("");
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--accent)",
                        cursor: "pointer",
                        fontWeight: 600,
                        textDecoration: "underline",
                        fontSize: "1rem"
                      }}
                    >
                      Register Now
                    </button>
                  </div>
                </form>
              )}
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
            <div>
              <h1 className="emp-h1">Client Portal</h1>
              <p style={{ color: "var(--txt-2)", marginTop: "0.5rem" }}>
                Welcome, {user?.contactPerson} ({user?.companyName})
              </p>
            </div>
            <button className="emp-btn emp-btn--outline" onClick={logout}>Logout</button>
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
