import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Employers.css";

export default function PostAJob() {
  const [activeTab, setActiveTab] = useState<"post" | "consultation">("post");
  const [submitted, setSubmitted] = useState(false);
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

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: "", contactPerson: "", email: "", phone: "",
        jobTitle: "", jobType: "", location: "", salary: "",
        experience: "", description: "", requirements: "", timeline: "",
        consultationCompany: "", consultationContact: "", consultationEmail: "",
        consultationPhone: "", industry: "", hiringNeeds: "", urgency: "", contactMethod: ""
      });
    }, 3000);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: "", contactPerson: "", email: "", phone: "",
        jobTitle: "", jobType: "", location: "", salary: "",
        experience: "", description: "", requirements: "", timeline: "",
        consultationCompany: "", consultationContact: "", consultationEmail: "",
        consultationPhone: "", industry: "", hiringNeeds: "", urgency: "", contactMethod: ""
      });
    }, 3000);
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
                  ? "Your job posting has been submitted successfully. Our team will review it and get back to you within 24 hours."
                  : "Your consultation request has been received. We'll contact you within 24 hours to discuss your hiring needs."}
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button className="emp-btn emp-btn--primary" onClick={() => setSubmitted(false)}>Submit Another</button>
                <Link to="/employers/services" className="emp-btn emp-btn--outline">Back to Services</Link>
              </div>
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

      <section className="emp-hero">
        <div className="emp-wrap">
          <h1 className="emp-h1 emp-hero__h1">Post a Job or Request Talent</h1>
          <p className="emp-hero__p">Submit your job posting directly or request a personalized consultation to discuss your hiring needs.</p>
        </div>
      </section>

      <section className="emp-section" style={{ background: "var(--white)" }}>
        <div className="emp-wrap">
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "3rem", flexWrap: "wrap" }}>
            <button
              className={`emp-btn ${activeTab === "post" ? "emp-btn--primary" : "emp-btn--outline"}`}
              onClick={() => setActiveTab("post")}
            >
              Post a Job
            </button>
            <button
              className={`emp-btn ${activeTab === "consultation" ? "emp-btn--primary" : "emp-btn--outline"}`}
              onClick={() => setActiveTab("consultation")}
            >
              Request Consultation
            </button>
          </div>

          {activeTab === "post" ? (
            <form className="emp-form" onSubmit={handleJobSubmit}>
              <div className="emp-form__section">
                <h2 className="emp-form__section-title">Company Details</h2>
                <div className="emp-form-group">
                  <label>Company Name <span className="emp-form-group__required">*</span></label>
                  <input type="text" required value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} />
                </div>
                <div className="emp-form-group__row">
                  <div className="emp-form-group">
                    <label>Contact Person <span className="emp-form-group__required">*</span></label>
                    <input type="text" required value={formData.contactPerson} onChange={(e) => setFormData({...formData, contactPerson: e.target.value})} />
                  </div>
                  <div className="emp-form-group">
                    <label>Email <span className="emp-form-group__required">*</span></label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div className="emp-form-group">
                  <label>Phone <span className="emp-form-group__required">*</span></label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>

              <div className="emp-form__section">
                <h2 className="emp-form__section-title">Job Details</h2>
                <div className="emp-form-group">
                  <label>Job Title <span className="emp-form-group__required">*</span></label>
                  <input type="text" required value={formData.jobTitle} onChange={(e) => setFormData({...formData, jobTitle: e.target.value})} />
                </div>
                <div className="emp-form-group__row">
                  <div className="emp-form-group">
                    <label>Employment Type <span className="emp-form-group__required">*</span></label>
                    <select required value={formData.jobType} onChange={(e) => setFormData({...formData, jobType: e.target.value})}>
                      <option value="">Select Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>
                  <div className="emp-form-group">
                    <label>Location <span className="emp-form-group__required">*</span></label>
                    <select required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}>
                      <option value="">Select Location</option>
                      <option value="Tokyo">Tokyo</option>
                      <option value="Osaka">Osaka</option>
                      <option value="Nagoya">Nagoya</option>
                      <option value="Fukuoka">Fukuoka</option>
                      <option value="Sapporo">Sapporo</option>
                      <option value="Sendai">Sendai</option>
                    </select>
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
                  <textarea required placeholder="Describe the role, responsibilities, and what you're looking for..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
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

              <button type="submit" className="emp-btn emp-btn--primary" style={{ width: "100%" }}>Submit Job Posting</button>
            </form>
          ) : (
            <form className="emp-form" onSubmit={handleConsultationSubmit}>
              <div className="emp-form__section">
                <h2 className="emp-form__section-title">Company Information</h2>
                <div className="emp-form-group">
                  <label>Company Name <span className="emp-form-group__required">*</span></label>
                  <input type="text" required value={formData.consultationCompany} onChange={(e) => setFormData({...formData, consultationCompany: e.target.value})} />
                </div>
                <div className="emp-form-group">
                  <label>Contact Person <span className="emp-form-group__required">*</span></label>
                  <input type="text" required value={formData.consultationContact} onChange={(e) => setFormData({...formData, consultationContact: e.target.value})} />
                </div>
                <div className="emp-form-group__row">
                  <div className="emp-form-group">
                    <label>Email <span className="emp-form-group__required">*</span></label>
                    <input type="email" required value={formData.consultationEmail} onChange={(e) => setFormData({...formData, consultationEmail: e.target.value})} />
                  </div>
                  <div className="emp-form-group">
                    <label>Phone <span className="emp-form-group__required">*</span></label>
                    <input type="tel" required value={formData.consultationPhone} onChange={(e) => setFormData({...formData, consultationPhone: e.target.value})} />
                  </div>
                </div>
              </div>

              <div className="emp-form__section">
                <h2 className="emp-form__section-title">Hiring Needs</h2>
                <div className="emp-form-group">
                  <label>Industry <span className="emp-form-group__required">*</span></label>
                  <select required value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})}>
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
                  <label>Hiring Needs <span className="emp-form-group__required">*</span></label>
                  <textarea required placeholder="Describe your hiring needs, number of positions, roles, etc." value={formData.hiringNeeds} onChange={(e) => setFormData({...formData, hiringNeeds: e.target.value})} />
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

              <button type="submit" className="emp-btn emp-btn--primary" style={{ width: "100%" }}>Request Consultation</button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
