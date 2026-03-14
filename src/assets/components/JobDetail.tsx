import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./JobSeekers.css";

const JOB_DATA = {
  1: {
    title: "Production Line Operator",
    company: "Automotive Manufacturing Co.",
    location: "Tokyo",
    salary: "¥280,000 - ¥320,000/month",
    type: "Full-time",
    posted: "2 days ago",
    icon: "🏭",
    description: "Join our production team in a modern automotive manufacturing facility. We're looking for dedicated individuals to operate production machinery and ensure quality standards.",
    responsibilities: [
      "Operate production line machinery safely and efficiently",
      "Monitor product quality and report any defects",
      "Follow safety protocols and maintain clean work area",
      "Collaborate with team members to meet production targets",
      "Participate in training and continuous improvement activities"
    ],
    requirements: [
      "High school diploma or equivalent",
      "Ability to work in a fast-paced environment",
      "Basic Japanese language skills",
      "Physical ability to stand for extended periods",
      "Willingness to work shift schedules including nights/weekends"
    ],
    benefits: [
      "Comprehensive health insurance",
      "Transportation allowance",
      "Overtime pay available",
      "Paid vacation days",
      "Training and career development opportunities",
      "Employee cafeteria",
      "Uniform provided"
    ],
    companyDesc: "Leading automotive manufacturer with 50+ years of excellence in Japan. We produce high-quality components for major automotive brands worldwide."
  }
};

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  // Fetch job by id, fallback to job 1 if id is invalid or not found
  const jobId = id ? parseInt(id) : 1;
  const job = JOB_DATA[jobId as keyof typeof JOB_DATA] || JOB_DATA[1];
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <div className="js">
      <Header />

      <section className="js-detail">
        <div className="js-wrap">
          <div className="js-detail__header">
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div style={{ fontSize: "3rem" }}>{job.icon}</div>
              <div style={{ flex: 1 }}>
                <h1 className="js-detail__title">{job.title}</h1>
                <div className="js-detail__meta">
                  <div className="js-detail__meta-item">🏢 {job.company}</div>
                  <div className="js-detail__meta-item">📍 {job.location}</div>
                  <div className="js-detail__meta-item">💰 {job.salary}</div>
                  <div className="js-detail__meta-item">⏰ {job.type}</div>
                  <div className="js-detail__meta-item">📅 Posted {job.posted}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="js-detail__content">
            <div className="js-detail__main">
              <h3>Job Description</h3>
              <p>{job.description}</p>

              <h3>Key Responsibilities</h3>
              <ul>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>

              <h3>Requirements & Qualifications</h3>
              <ul>
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="js-detail__sidebar">
              <div className="js-detail__apply-box">
                <h3>Apply for this Position</h3>
                <button className="js-btn js-btn--primary" style={{ width: "100%", marginBottom: "1rem" }} onClick={() => setShowModal(true)}>
                  Apply Now
                </button>
                <button className="js-btn js-btn--outline" style={{ width: "100%" }}>Save Job</button>
              </div>

              <div className="js-detail__apply-box">
                <h3>Benefits & Perks</h3>
                <ul className="js-detail__benefits">
                  {job.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="js-detail__company-box">
                <div className="js-detail__company-logo">{job.icon}</div>
                <div className="js-detail__company-name">{job.company}</div>
                <p className="js-detail__company-desc">{job.companyDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="js-modal" onClick={() => setShowModal(false)}>
          <div className="js-modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="js-modal__close" onClick={() => setShowModal(false)}>✕</button>
            
            {!submitted ? (
              <>
                <h2 className="js-modal__title">Apply for Position</h2>
                <p className="js-modal__subtitle">{job.title}</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="js-form-group">
                    <label>Full Name <span className="js-form-group__required">*</span></label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="js-form-group__row">
                    <div className="js-form-group">
                      <label>Email <span className="js-form-group__required">*</span></label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="js-form-group">
                      <label>Phone <span className="js-form-group__required">*</span></label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="js-form-group">
                    <label>Resume/CV <span className="js-form-group__required">*</span></label>
                    <div className="js-form-group__file">
                      <input type="file" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
                      <div className="js-form-group__file-label">
                        <span>📄</span>
                        <span>{formData.resume ? formData.resume.name : "Choose file or drag here"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="js-form-group">
                    <label>Cover Letter</label>
                    <textarea 
                      placeholder="Tell us why you're interested in this position..."
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="js-btn js-btn--primary" style={{ width: "100%" }}>Submit Application</button>
                </form>
              </>
            ) : (
              <div className="js-thank-you">
                <div className="js-thank-you__icon">✅</div>
                <h2 className="js-thank-you__title">Thank You!</h2>
                <p className="js-thank-you__message">
                  Your application has been submitted successfully. We'll review your application and get back to you within 5-7 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
