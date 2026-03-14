import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./JobSeekers.css";

export default function CandidateRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    prefecture: "",
    postalCode: "",
    
    // Work Experience
    experience: [] as Array<{
      company: string;
      position: string;
      startDate: string;
      endDate: string;
      description: string;
    }>,
    
    // Education
    education: [] as Array<{
      institution: string;
      degree: string;
      field: string;
      graduationDate: string;
    }>,
    
    // Skills
    skills: "",
    languages: "",
    certifications: "",
    
    // Preferences
    preferredLocation: "",
    preferredJobType: "",
    preferredIndustry: "",
    salaryExpectation: "",
    availability: "",
    
    // Resume
    resume: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  if (submitted) {
    return (
      <div className="js">
        <Header />
        <section className="js-section" style={{ background: "var(--off)", minHeight: "60vh", display: "flex", alignItems: "center" }}>
          <div className="js-wrap">
            <div className="js-thank-you">
              <div className="js-thank-you__icon">✅</div>
              <h2 className="js-thank-you__title">Registration Complete!</h2>
              <p className="js-thank-you__message">
                Thank you for registering with CDP Japan. Your profile has been created successfully. 
                We'll review your information and match you with suitable job opportunities. 
                You'll receive email notifications when we find positions that match your profile.
              </p>
              <Link to="/job-seekers/listings" className="js-btn js-btn--primary">Browse Job Listings</Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="js">
      <Header />

      <section className="js-hero">
        <div className="js-wrap">
          <h1 className="js-h1 js-hero__h1">Create Your Profile</h1>
          <p className="js-hero__p">Register with CDP Japan to access exclusive job opportunities and get matched with positions that fit your skills and preferences.</p>
        </div>
      </section>

      <section className="js-register">
        <div className="js-wrap">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
              {[1, 2, 3, 4, 5].map(step => (
                <div key={step} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: step <= currentStep ? "var(--accent)" : "var(--border)",
                    color: step <= currentStep ? "var(--white)" : "var(--txt-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600
                  }}>
                    {step}
                  </div>
                  {step < 5 && <div style={{ width: "40px", height: "2px", background: step < currentStep ? "var(--accent)" : "var(--border)" }} />}
                </div>
              ))}
            </div>
            <div style={{ fontSize: "0.9rem", color: "var(--txt-2)" }}>
              Step {currentStep} of 5: {
                currentStep === 1 ? "Personal Information" :
                currentStep === 2 ? "Work Experience" :
                currentStep === 3 ? "Education" :
                currentStep === 4 ? "Skills & Preferences" :
                "Resume Upload"
              }
            </div>
          </div>

          <form className="js-register__form" onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="js-register__section">
                <h2 className="js-register__section-title">Personal Information</h2>
                <div className="js-form-group__row">
                  <div className="js-form-group">
                    <label>First Name <span className="js-form-group__required">*</span></label>
                    <input type="text" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                  </div>
                  <div className="js-form-group">
                    <label>Last Name <span className="js-form-group__required">*</span></label>
                    <input type="text" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                  </div>
                </div>
                <div className="js-form-group__row">
                  <div className="js-form-group">
                    <label>Email <span className="js-form-group__required">*</span></label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="js-form-group">
                    <label>Phone <span className="js-form-group__required">*</span></label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="js-form-group">
                  <label>Date of Birth</label>
                  <input type="date" value={formData.dateOfBirth} onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})} />
                </div>
                <div className="js-form-group">
                  <label>Address</label>
                  <input type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                </div>
                <div className="js-form-group__row">
                  <div className="js-form-group">
                    <label>City</label>
                    <input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                  </div>
                  <div className="js-form-group">
                    <label>Prefecture</label>
                    <input type="text" value={formData.prefecture} onChange={(e) => setFormData({...formData, prefecture: e.target.value})} />
                  </div>
                  <div className="js-form-group">
                    <label>Postal Code</label>
                    <input type="text" value={formData.postalCode} onChange={(e) => setFormData({...formData, postalCode: e.target.value})} />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="js-register__section">
                <h2 className="js-register__section-title">Work Experience</h2>
                <p style={{ color: "var(--txt-2)", marginBottom: "1.5rem" }}>Add your work experience. You can add multiple entries.</p>
                <div className="js-form-group">
                  <label>Company Name</label>
                  <input type="text" />
                </div>
                <div className="js-form-group">
                  <label>Position/Job Title</label>
                  <input type="text" />
                </div>
                <div className="js-form-group__row">
                  <div className="js-form-group">
                    <label>Start Date</label>
                    <input type="date" />
                  </div>
                  <div className="js-form-group">
                    <label>End Date</label>
                    <input type="date" />
                  </div>
                </div>
                <div className="js-form-group">
                  <label>Job Description</label>
                  <textarea rows={4} />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="js-register__section">
                <h2 className="js-register__section-title">Education</h2>
                <p style={{ color: "var(--txt-2)", marginBottom: "1.5rem" }}>Add your educational background.</p>
                <div className="js-form-group">
                  <label>Institution Name</label>
                  <input type="text" />
                </div>
                <div className="js-form-group">
                  <label>Degree/Certificate</label>
                  <input type="text" />
                </div>
                <div className="js-form-group">
                  <label>Field of Study</label>
                  <input type="text" />
                </div>
                <div className="js-form-group">
                  <label>Graduation Date</label>
                  <input type="date" />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="js-register__section">
                <h2 className="js-register__section-title">Skills & Preferences</h2>
                <div className="js-form-group">
                  <label>Skills <span className="js-form-group__required">*</span></label>
                  <textarea 
                    placeholder="List your skills separated by commas (e.g., Microsoft Office, Japanese Language, Customer Service)"
                    value={formData.skills}
                    onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    required
                  />
                </div>
                <div className="js-form-group">
                  <label>Languages</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Japanese (Native), English (Fluent)"
                    value={formData.languages}
                    onChange={(e) => setFormData({...formData, languages: e.target.value})}
                  />
                </div>
                <div className="js-form-group">
                  <label>Certifications</label>
                  <input 
                    type="text" 
                    placeholder="List any professional certifications"
                    value={formData.certifications}
                    onChange={(e) => setFormData({...formData, certifications: e.target.value})}
                  />
                </div>
                <div className="js-form-group">
                  <label>Preferred Location</label>
                  <select value={formData.preferredLocation} onChange={(e) => setFormData({...formData, preferredLocation: e.target.value})}>
                    <option value="">Select Location</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Osaka">Osaka</option>
                    <option value="Nagoya">Nagoya</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
                <div className="js-form-group">
                  <label>Preferred Job Type</label>
                  <select value={formData.preferredJobType} onChange={(e) => setFormData({...formData, preferredJobType: e.target.value})}>
                    <option value="">Select Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
                <div className="js-form-group">
                  <label>Salary Expectation (Monthly)</label>
                  <input 
                    type="text" 
                    placeholder="e.g., ¥250,000 - ¥300,000"
                    value={formData.salaryExpectation}
                    onChange={(e) => setFormData({...formData, salaryExpectation: e.target.value})}
                  />
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="js-register__section">
                <h2 className="js-register__section-title">Resume Upload</h2>
                <div className="js-form-group">
                  <label>Upload Resume/CV <span className="js-form-group__required">*</span></label>
                  <div className="js-form-group__file">
                    <input type="file" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
                    <div className="js-form-group__file-label">
                      <span>📄</span>
                      <span>{formData.resume ? formData.resume.name : "Choose file or drag here (PDF, DOC, DOCX)"}</span>
                    </div>
                  </div>
                </div>
                <p style={{ color: "var(--txt-2)", fontSize: "0.9rem", marginTop: "1rem" }}>
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                  Your information will be kept confidential and used only for job matching purposes.
                </p>
              </div>
            )}

            <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", marginTop: "2rem" }}>
              {currentStep > 1 && (
                <button type="button" className="js-btn js-btn--outline" onClick={() => setCurrentStep(currentStep - 1)}>
                  Previous
                </button>
              )}
              <button type="submit" className="js-btn js-btn--primary" style={{ marginLeft: "auto" }}>
                {currentStep === 5 ? "Submit Registration" : "Next Step"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
