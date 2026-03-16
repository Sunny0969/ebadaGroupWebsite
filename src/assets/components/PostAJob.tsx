import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../../contexts/AuthContext";
import "./Employers.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function PostAJob() {
  const { user, token, login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState<"post" | "consultation">("post");
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<any>(null);

  // Show login modal if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    }
  }, [isAuthenticated]);

  // Pre-fill form with user data when logged in
  useEffect(() => {
    if (user && isAuthenticated) {
      setFormData(prev => ({
        ...prev,
        companyName: user.companyName || prev.companyName,
        contactPerson: user.contactPerson || prev.contactPerson,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
      }));
    }
  }, [user, isAuthenticated]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    try {
      await login(loginData.email, loginData.password);
      setShowLoginModal(false);
    } catch (err: any) {
      setLoginError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoggingIn(false);
    }
  };
  const [formData, setFormData] = useState({
    // Job Posting
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    jobTitle: "",
    jobType: "",
    location: "",
    salary: "",
    experience: "",
    description: "",
    requirements: "",
    timeline: "",
    
    // Consultation
    consultationCompany: "",
    consultationContact: "",
    consultationEmail: "",
    consultationPhone: "",
    industry: "",
    hiringNeeds: "",
    urgency: "",
    contactMethod: ""
  });

  // Validation function
  const validateForm = (type: "post" | "consultation") => {
    const newErrors: Record<string, string> = {};

    if (type === "post") {
      // Use user data if available, otherwise use form data
      const companyName = user?.companyName || formData.companyName;
      const contactPerson = user?.contactPerson || formData.contactPerson;
      const email = user?.email || formData.email;
      const phone = user?.phone || formData.phone;

      if (!companyName.trim()) newErrors.companyName = "Company name is required";
      if (!contactPerson.trim()) newErrors.contactPerson = "Contact person is required";
      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
      if (!formData.jobType) newErrors.jobType = "Job type is required";
      if (!formData.location) newErrors.location = "Location is required";
      if (!formData.description.trim()) newErrors.description = "Job description is required";
    } else {
      if (!formData.consultationCompany.trim()) newErrors.consultationCompany = "Company name is required";
      if (!formData.consultationContact.trim()) newErrors.consultationContact = "Contact person is required";
      if (!formData.consultationEmail.trim()) {
        newErrors.consultationEmail = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.consultationEmail)) {
        newErrors.consultationEmail = "Please enter a valid email address";
      }
      if (!formData.consultationPhone.trim()) newErrors.consultationPhone = "Phone number is required";
      if (!formData.industry) newErrors.industry = "Industry is required";
      if (!formData.hiringNeeds.trim()) newErrors.hiringNeeds = "Hiring needs description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm("post")) {
      return;
    }

    // Prepare data for confirmation - use logged in user's info
    const jobData = {
      companyName: user?.companyName || formData.companyName,
      contactPerson: user?.contactPerson || formData.contactPerson,
      email: user?.email || formData.email,
      phone: user?.phone || formData.phone,
      jobTitle: formData.jobTitle,
      jobType: formData.jobType,
      location: formData.location,
      salary: formData.salary,
      experience: formData.experience || undefined,
      description: formData.description,
      requirements: formData.requirements || undefined,
      timeline: formData.timeline || undefined
    };

    setSubmittedData(jobData);
    setShowConfirmation(true);
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm("consultation")) {
      return;
    }

    // Prepare data for confirmation
    const consultationData = {
      companyName: formData.consultationCompany,
      contactPerson: formData.consultationContact,
      email: formData.consultationEmail,
      phone: formData.consultationPhone,
      industry: formData.industry,
      hiringNeeds: formData.hiringNeeds,
      urgency: formData.urgency || undefined,
      contactMethod: formData.contactMethod || undefined
    };

    setSubmittedData(consultationData);
    setShowConfirmation(true);
  };

  const confirmAndSubmit = async () => {
    setIsSubmitting(true);
    setShowConfirmation(false);

    try {
      const url = activeTab === "post" 
        ? `${API_BASE_URL}/api/job-postings`
        : `${API_BASE_URL}/api/consultations`;

      console.log('📤 Submitting to:', url);
      console.log('📦 Data:', submittedData);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(submittedData),
      }).catch((fetchError) => {
        // Network error - server not running
        console.error('❌ Network Error:', fetchError);
        throw new Error(`Cannot connect to backend server at ${API_BASE_URL}. Please make sure the backend server is running. Open a new terminal and run: cd backend && npm run dev`);
      });

      console.log('📥 Response status:', response.status);
      
      // Check if response is ok before parsing JSON
      let result;
      try {
        result = await response.json();
        console.log('📥 Response data:', result);
      } catch (jsonError) {
        console.error('❌ JSON Parse Error:', jsonError);
        throw new Error('Invalid response from server. Please check backend server logs.');
      }

      if (!response.ok) {
        console.error('API Error:', result);
        throw new Error(result.message || result.error || 'Failed to submit');
      }

      // Success - show thank you page
      setSubmitted(true);
      
      // Reset form
      setFormData({
        companyName: "", contactPerson: "", email: "", phone: "",
        jobTitle: "", jobType: "", location: "", salary: "",
        experience: "", description: "", requirements: "", timeline: "",
        consultationCompany: "", consultationContact: "", consultationEmail: "",
        consultationPhone: "", industry: "", hiringNeeds: "", urgency: "", contactMethod: ""
      });
      setErrors({});
      setSubmittedData(null);
    } catch (error: any) {
      console.error('Submission error:', error);
      const errorMessage = error.message || 'Failed to submit. Please make sure the backend server is running on http://localhost:5000';
      alert(`Error: ${errorMessage}\n\nPlease check:\n1. Backend server is running (cd backend && npm run dev)\n2. Server is accessible at ${API_BASE_URL}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="emp">
        <Header />
        <section className="emp-section" style={{ background: "var(--off)", minHeight: "60vh", display: "flex", alignItems: "center" }}>
          <div className="emp-wrap">
            <div className="emp-thank-you">
              <div className="emp-thank-you__icon">✅</div>
              <h2 className="emp-thank-you__title">Thank You!</h2>
              <p className="emp-thank-you__message">
                {activeTab === "post" 
                  ? "Your job posting has been submitted successfully and saved to our database. Our team will review it and get back to you within 24 hours."
                  : "Your consultation request has been received and saved to our database. We'll contact you within 24 hours to discuss your hiring needs."}
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button className="emp-btn emp-btn--primary" onClick={() => {
                  setSubmitted(false);
                  setActiveTab(activeTab);
                }}>Submit Another</button>
                <Link to="/employers/services" className="emp-btn emp-btn--outline">Back to Services</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Login Modal
  if (showLoginModal && !isAuthenticated) {
    return (
      <div className="emp">
        <Header />
        <section className="emp-section" style={{ background: "var(--off)", minHeight: "60vh", display: "flex", alignItems: "center" }}>
          <div className="emp-wrap">
            <div className="emp-portal__login" style={{ maxWidth: "500px", margin: "0 auto" }}>
              <h2 className="emp-portal__login-title">Login Required</h2>
              <p className="emp-portal__login-subtitle">
                Please login to post a job or request consultation. If you don't have an account, you can register from the Client Portal.
              </p>
              
              {loginError && (
                <div style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  background: "rgba(232, 67, 26, 0.1)",
                  border: "1px solid var(--accent)",
                  borderRadius: "var(--r)",
                  color: "var(--accent)",
                  fontSize: "0.9rem"
                }}>
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLoginSubmit} style={{ marginTop: "2rem" }}>
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
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? "Logging in..." : "Login"}
                </button>
                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Don't have an account?</p>
                  <button
                    type="button"
                    onClick={() => navigate("/employers/portal?register=true")}
                    style={{ 
                      color: "var(--accent)", 
                      fontWeight: 600, 
                      background: "none", 
                      border: "none", 
                      cursor: "pointer", 
                      fontSize: "1rem",
                      textDecoration: "underline"
                    }}
                  >
                    Register Now
                  </button>
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

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>
              {activeTab === "post" ? "Confirm Job Posting" : "Confirm Consultation Request"}
            </h2>
            {user && (
              <div style={{
                background: "var(--off)",
                padding: "0.75rem 1rem",
                borderRadius: "var(--r)",
                marginBottom: '1rem',
                fontSize: "0.9rem"
              }}>
                <strong>Posted by:</strong> {user.contactPerson} ({user.companyName})
              </div>
            )}
            <p style={{ marginBottom: '1.5rem', color: 'var(--txt-2)' }}>
              Please review your details before submitting:
            </p>
            
            <div style={{ 
              background: 'var(--off)', 
              padding: '1.5rem', 
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              {activeTab === "post" ? (
                <>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--navy)' }}>Company Details</h3>
                  <p><strong>Company:</strong> {submittedData?.companyName}</p>
                  <p><strong>Contact Person:</strong> {submittedData?.contactPerson}</p>
                  <p><strong>Email:</strong> {submittedData?.email}</p>
                  <p><strong>Phone:</strong> {submittedData?.phone}</p>
                  
                  <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--navy)' }}>Job Details</h3>
                  <p><strong>Job Title:</strong> {submittedData?.jobTitle}</p>
                  <p><strong>Type:</strong> {submittedData?.jobType}</p>
                  <p><strong>Location:</strong> {submittedData?.location}</p>
                  {submittedData?.salary && <p><strong>Salary:</strong> {submittedData.salary}</p>}
                  {submittedData?.experience && <p><strong>Experience:</strong> {submittedData.experience}</p>}
                  <p><strong>Description:</strong> {submittedData?.description}</p>
                  {submittedData?.requirements && <p><strong>Requirements:</strong> {submittedData.requirements}</p>}
                  {submittedData?.timeline && <p><strong>Timeline:</strong> {submittedData.timeline}</p>}
                </>
              ) : (
                <>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--navy)' }}>Company Information</h3>
                  <p><strong>Company:</strong> {submittedData?.companyName}</p>
                  <p><strong>Contact Person:</strong> {submittedData?.contactPerson}</p>
                  <p><strong>Email:</strong> {submittedData?.email}</p>
                  <p><strong>Phone:</strong> {submittedData?.phone}</p>
                  
                  <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--navy)' }}>Hiring Needs</h3>
                  <p><strong>Industry:</strong> {submittedData?.industry}</p>
                  <p><strong>Hiring Needs:</strong> {submittedData?.hiringNeeds}</p>
                  {submittedData?.urgency && <p><strong>Urgency:</strong> {submittedData.urgency}</p>}
                  {submittedData?.contactMethod && <p><strong>Contact Method:</strong> {submittedData.contactMethod}</p>}
                </>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                className="emp-btn emp-btn--outline"
                onClick={() => setShowConfirmation(false)}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                className="emp-btn emp-btn--primary"
                onClick={confirmAndSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Confirm & Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="emp-hero">
        <div className="emp-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <h1 className="emp-h1 emp-hero__h1">Post a Job or Request Talent</h1>
              <p className="emp-hero__p">Submit your job posting directly or request a personalized consultation to discuss your hiring needs.</p>
            </div>
            {user && (
              <div style={{
                background: "rgba(255,255,255,0.2)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--r)",
                border: "1px solid rgba(255,255,255,0.3)"
              }}>
                <div style={{ fontSize: "0.85rem", opacity: 0.9, marginBottom: "0.25rem" }}>Logged in as:</div>
                <div style={{ fontWeight: 600, fontSize: "1rem" }}>{user.contactPerson}</div>
                <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>{user.companyName}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="emp-section" style={{ background: "var(--white)" }}>
        <div className="emp-wrap">
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "3rem", flexWrap: "wrap" }}>
            <button
              className={`emp-btn ${activeTab === "post" ? "emp-btn--primary" : "emp-btn--outline"}`}
              onClick={() => {
                setActiveTab("post");
                setErrors({});
              }}
            >
              Post a Job
            </button>
            <button
              className={`emp-btn ${activeTab === "consultation" ? "emp-btn--primary" : "emp-btn--outline"}`}
              onClick={() => {
                setActiveTab("consultation");
                setErrors({});
              }}
            >
              Request Consultation
            </button>
          </div>

          {activeTab === "post" ? (
            <form className="emp-form" onSubmit={handleJobSubmit}>
              <div className="emp-form__section">
                <h2 className="emp-form__section-title">Company Details</h2>
                {user && (
                  <div style={{
                    background: "var(--off)",
                    padding: "1rem",
                    borderRadius: "var(--r)",
                    marginBottom: "1.5rem",
                    fontSize: "0.9rem",
                    color: "var(--txt-2)"
                  }}>
                    ℹ️ Company information is pre-filled from your account. You can update it if needed.
                  </div>
                )}
                <div className="emp-form-group">
                  <label>Company Name <span className="emp-form-group__required">*</span></label>
                  <input 
                    type="text" 
                    required 
                    value={formData.companyName} 
                    onChange={(e) => {
                      setFormData({...formData, companyName: e.target.value});
                      if (errors.companyName) setErrors({...errors, companyName: ""});
                    }}
                    className={errors.companyName ? "emp-form-group__error" : ""}
                    readOnly={!!user}
                    style={user ? { background: "var(--off)", cursor: "not-allowed" } : {}}
                  />
                  {errors.companyName && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.companyName}</span>}
                </div>
                <div className="emp-form-group__row">
                  <div className="emp-form-group">
                    <label>Contact Person <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="text" 
                      required 
                      value={formData.contactPerson} 
                      onChange={(e) => {
                        setFormData({...formData, contactPerson: e.target.value});
                        if (errors.contactPerson) setErrors({...errors, contactPerson: ""});
                      }}
                      className={errors.contactPerson ? "emp-form-group__error" : ""}
                      readOnly={!!user}
                      style={user ? { background: "var(--off)", cursor: "not-allowed" } : {}}
                    />
                    {errors.contactPerson && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.contactPerson}</span>}
                  </div>
                  <div className="emp-form-group">
                    <label>Email <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={(e) => {
                        setFormData({...formData, email: e.target.value});
                        if (errors.email) setErrors({...errors, email: ""});
                      }}
                      className={errors.email ? "emp-form-group__error" : ""}
                      readOnly={!!user}
                      style={user ? { background: "var(--off)", cursor: "not-allowed" } : {}}
                    />
                    {errors.email && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.email}</span>}
                  </div>
                </div>
                <div className="emp-form-group">
                  <label>Phone <span className="emp-form-group__required">*</span></label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value});
                      if (errors.phone) setErrors({...errors, phone: ""});
                    }}
                    className={errors.phone ? "emp-form-group__error" : ""}
                    readOnly={!!user}
                    style={user ? { background: "var(--off)", cursor: "not-allowed" } : {}}
                  />
                  {errors.phone && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.phone}</span>}
                </div>
              </div>

              <div className="emp-form__section">
                <h2 className="emp-form__section-title">Job Details</h2>
                <div className="emp-form-group">
                  <label>Job Title <span className="emp-form-group__required">*</span></label>
                  <input 
                    type="text" 
                    required 
                    value={formData.jobTitle} 
                    onChange={(e) => {
                      setFormData({...formData, jobTitle: e.target.value});
                      if (errors.jobTitle) setErrors({...errors, jobTitle: ""});
                    }}
                    className={errors.jobTitle ? "emp-form-group__error" : ""}
                  />
                  {errors.jobTitle && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.jobTitle}</span>}
                </div>
                <div className="emp-form-group__row">
                  <div className="emp-form-group">
                    <label>Employment Type <span className="emp-form-group__required">*</span></label>
                    <select 
                      required 
                      value={formData.jobType} 
                      onChange={(e) => {
                        setFormData({...formData, jobType: e.target.value});
                        if (errors.jobType) setErrors({...errors, jobType: ""});
                      }}
                      className={errors.jobType ? "emp-form-group__error" : ""}
                    >
                      <option value="">Select Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                    {errors.jobType && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.jobType}</span>}
                  </div>
                  <div className="emp-form-group">
                    <label>Location <span className="emp-form-group__required">*</span></label>
                    <select 
                      required 
                      value={formData.location} 
                      onChange={(e) => {
                        setFormData({...formData, location: e.target.value});
                        if (errors.location) setErrors({...errors, location: ""});
                      }}
                      className={errors.location ? "emp-form-group__error" : ""}
                    >
                      <option value="">Select Location</option>
                      <option value="Tokyo">Tokyo</option>
                      <option value="Osaka">Osaka</option>
                      <option value="Nagoya">Nagoya</option>
                      <option value="Fukuoka">Fukuoka</option>
                      <option value="Sapporo">Sapporo</option>
                      <option value="Sendai">Sendai</option>
                    </select>
                    {errors.location && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.location}</span>}
                  </div>
                </div>
                <div className="emp-form-group__row">
                  <div className="emp-form-group">
                    <label>Salary Range</label>
                    <input type="text" placeholder="e.g., ¥280,000 - ¥320,000/month" value={formData.salary} onChange={(e) => setFormData({...formData, salary: e.target.value})} />
                  </div>
                  <div className="emp-form-group">
                    <label>Experience Level</label>
                    <select value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>
                      <option value="">Select Level</option>
                      <option value="Entry Level">Entry Level</option>
                      <option value="Mid Level">Mid Level</option>
                      <option value="Senior Level">Senior Level</option>
                    </select>
                  </div>
                </div>
                <div className="emp-form-group">
                  <label>Job Description <span className="emp-form-group__required">*</span></label>
                  <textarea 
                    required 
                    placeholder="Describe the role, responsibilities, and what you're looking for..." 
                    value={formData.description} 
                    onChange={(e) => {
                      setFormData({...formData, description: e.target.value});
                      if (errors.description) setErrors({...errors, description: ""});
                    }}
                    className={errors.description ? "emp-form-group__error" : ""}
                  />
                  {errors.description && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.description}</span>}
                </div>
                <div className="emp-form-group">
                  <label>Requirements & Qualifications</label>
                  <textarea placeholder="List required skills, education, certifications, etc." value={formData.requirements} onChange={(e) => setFormData({...formData, requirements: e.target.value})} />
                </div>
                <div className="emp-form-group">
                  <label>Timeline / Start Date</label>
                  <input type="text" placeholder="e.g., Immediate, Within 2 weeks, Flexible" value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})} />
                </div>
              </div>

              <button type="submit" className="emp-btn emp-btn--primary" style={{ width: "100%" }} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Review & Submit Job Posting"}
              </button>
            </form>
          ) : (
            <form className="emp-form" onSubmit={handleConsultationSubmit}>
              <div className="emp-form__section">
                <h2 className="emp-form__section-title">Company Information</h2>
                <div className="emp-form-group">
                  <label>Company Name <span className="emp-form-group__required">*</span></label>
                  <input 
                    type="text" 
                    required 
                    value={formData.consultationCompany} 
                    onChange={(e) => {
                      setFormData({...formData, consultationCompany: e.target.value});
                      if (errors.consultationCompany) setErrors({...errors, consultationCompany: ""});
                    }}
                    className={errors.consultationCompany ? "emp-form-group__error" : ""}
                  />
                  {errors.consultationCompany && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.consultationCompany}</span>}
                </div>
                <div className="emp-form-group">
                  <label>Contact Person <span className="emp-form-group__required">*</span></label>
                  <input 
                    type="text" 
                    required 
                    value={formData.consultationContact} 
                    onChange={(e) => {
                      setFormData({...formData, consultationContact: e.target.value});
                      if (errors.consultationContact) setErrors({...errors, consultationContact: ""});
                    }}
                    className={errors.consultationContact ? "emp-form-group__error" : ""}
                  />
                  {errors.consultationContact && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.consultationContact}</span>}
                </div>
                <div className="emp-form-group__row">
                  <div className="emp-form-group">
                    <label>Email <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="email" 
                      required 
                      value={formData.consultationEmail} 
                      onChange={(e) => {
                        setFormData({...formData, consultationEmail: e.target.value});
                        if (errors.consultationEmail) setErrors({...errors, consultationEmail: ""});
                      }}
                      className={errors.consultationEmail ? "emp-form-group__error" : ""}
                    />
                    {errors.consultationEmail && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.consultationEmail}</span>}
                  </div>
                  <div className="emp-form-group">
                    <label>Phone <span className="emp-form-group__required">*</span></label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.consultationPhone} 
                      onChange={(e) => {
                        setFormData({...formData, consultationPhone: e.target.value});
                        if (errors.consultationPhone) setErrors({...errors, consultationPhone: ""});
                      }}
                      className={errors.consultationPhone ? "emp-form-group__error" : ""}
                    />
                    {errors.consultationPhone && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.consultationPhone}</span>}
                  </div>
                </div>
              </div>

              <div className="emp-form__section">
                <h2 className="emp-form__section-title">Hiring Needs</h2>
                <div className="emp-form-group">
                  <label>Industry <span className="emp-form-group__required">*</span></label>
                  <select 
                    required 
                    value={formData.industry} 
                    onChange={(e) => {
                      setFormData({...formData, industry: e.target.value});
                      if (errors.industry) setErrors({...errors, industry: ""});
                    }}
                    className={errors.industry ? "emp-form-group__error" : ""}
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
                  {errors.industry && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.industry}</span>}
                </div>
                <div className="emp-form-group">
                  <label>Hiring Needs <span className="emp-form-group__required">*</span></label>
                  <textarea 
                    required 
                    placeholder="Describe your hiring needs, number of positions, roles, etc." 
                    value={formData.hiringNeeds} 
                    onChange={(e) => {
                      setFormData({...formData, hiringNeeds: e.target.value});
                      if (errors.hiringNeeds) setErrors({...errors, hiringNeeds: ""});
                    }}
                    className={errors.hiringNeeds ? "emp-form-group__error" : ""}
                  />
                  {errors.hiringNeeds && <span style={{color: "var(--accent)", fontSize: "0.85rem", marginTop: "0.25rem", display: "block"}}>{errors.hiringNeeds}</span>}
                </div>
                <div className="emp-form-group__row">
                  <div className="emp-form-group">
                    <label>Urgency</label>
                    <select value={formData.urgency} onChange={(e) => setFormData({...formData, urgency: e.target.value})}>
                      <option value="">Select Urgency</option>
                      <option value="Immediate">Immediate (Within 1 week)</option>
                      <option value="Urgent">Urgent (Within 2-4 weeks)</option>
                      <option value="Moderate">Moderate (1-3 months)</option>
                      <option value="Planning">Planning (3+ months)</option>
                    </select>
                  </div>
                  <div className="emp-form-group">
                    <label>Preferred Contact Method</label>
                    <select value={formData.contactMethod} onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}>
                      <option value="">Select Method</option>
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                      <option value="Video Call">Video Call</option>
                      <option value="In-Person">In-Person</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" className="emp-btn emp-btn--primary" style={{ width: "100%" }} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Review & Request Consultation"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
