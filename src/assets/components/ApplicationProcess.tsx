import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Careers.css";

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Submit Application",
    description: "Fill out our online application form and upload your resume. Make sure to include a compelling cover letter."
  },
  {
    number: 2,
    title: "Initial Review",
    description: "Our HR team will review your application within 5-7 business days. We'll assess your qualifications and experience."
  },
  {
    number: 3,
    title: "Phone Screening",
    description: "If selected, you'll receive a call from our recruitment team for an initial phone interview to discuss your background."
  },
  {
    number: 4,
    title: "Interview Process",
    description: "Successful candidates will be invited for in-person or video interviews with the hiring manager and team members."
  },
  {
    number: 5,
    title: "Assessment",
    description: "Depending on the role, you may be asked to complete a skills assessment or provide work samples."
  },
  {
    number: 6,
    title: "Offer & Onboarding",
    description: "If you're selected, we'll extend an offer and begin the onboarding process to welcome you to the team."
  }
];

const REQUIRED_DOCUMENTS = [
  "Updated Resume/CV (PDF format preferred)",
  "Cover Letter tailored to the position",
  "Professional references (2-3 contacts)",
  "Portfolio or work samples (if applicable)",
  "Educational certificates (if required)"
];

const TIPS = [
  {
    title: "Tailor Your Application",
    description: "Customize your resume and cover letter to highlight relevant experience and skills for the specific position."
  },
  {
    title: "Research Our Company",
    description: "Learn about Ebadah Group  Japan's values, services, and culture. Show genuine interest in what we do."
  },
  {
    title: "Be Professional",
    description: "Ensure your application is error-free, well-formatted, and presents you in the best possible light."
  },
  {
    title: "Follow Up",
    description: "If you haven't heard back within the expected timeframe, feel free to follow up politely via email."
  }
];

export default function ApplicationProcess() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null as File | null,
    coverLetter: "",
    experience: "",
    availability: "",
    referral: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const refMap = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    // SEO: Update document title and meta
    document.title = "Application Process - How to Apply at Ebadah Group  Japan | Careers";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about the Ebadah Group  Japan recruitment process. Step-by-step guide on how to apply, required documents, application tips, and submit your job application online.');
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute("data-obs");
          if (id) setVisible((p) => new Set([...p, id]));
        }
      }),
      { threshold: 0.1 }
    );
    refMap.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const obs = (id: string) => (el: HTMLElement | null) => { if (el) refMap.current.set(id, el); };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
      if (formErrors.resume) {
        setFormErrors(prev => ({ ...prev, resume: "" }));
      }
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.position.trim()) errors.position = "Position is required";
    if (!formData.resume) errors.resume = "Resume is required";
    if (!formData.coverLetter.trim()) errors.coverLetter = "Cover letter is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowThankYou(true);
    
    setTimeout(() => {
      setShowForm(false);
      setShowThankYou(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        coverLetter: "",
        experience: "",
        availability: "",
        referral: ""
      });
    }, 3000);
  };

  const closeForm = () => {
    setShowForm(false);
    setShowThankYou(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
      coverLetter: "",
      experience: "",
      availability: "",
      referral: ""
    });
    setFormErrors({});
  };

  return (
    <div className="careers">
      <Header />

      <section className="careers-hero">
        <div className="careers-hero__content">
          <h1 className="careers-h1 careers-hero__h1">Application Process</h1>
          <p className="careers-hero__p">
            Learn about our recruitment process and submit your application to join the Ebadah Group  Japan team.
          </p>
        </div>
      </section>

      <section className={`careers-section ${visible.has("process") ? "careers--in" : ""}`} data-obs="process" ref={obs("process")} style={{ background: "var(--white)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">How to Apply</span>
            <h2 className="careers-h2">Our Recruitment Process</h2>
            <p className="careers-sh__p">A step-by-step guide to applying for positions at Ebadah Group  Japan.</p>
          </div>

          <div className="careers-process">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="careers-process-step">
                <div className="careers-process-step__number">{step.number}</div>
                <h3 className="careers-process-step__title">{step.title}</h3>
                <p className="careers-process-step__desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`careers-section ${visible.has("documents") ? "careers--in" : ""}`} data-obs="documents" ref={obs("documents")} style={{ background: "var(--off)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">Required Documents</span>
            <h2 className="careers-h2">What You'll Need</h2>
            <p className="careers-sh__p">Prepare these documents before starting your application.</p>
          </div>

          <div style={{ maxWidth: "700px", margin: "0 auto", background: "var(--white)", padding: "2.5rem", borderRadius: "var(--r-lg)", border: "1px solid var(--border)" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {REQUIRED_DOCUMENTS.map((doc, i) => (
                <li key={i} style={{ 
                  padding: "1rem 0", 
                  borderBottom: i < REQUIRED_DOCUMENTS.length - 1 ? "1px solid var(--border)" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem"
                }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem", fontWeight: 700 }}>✓</span>
                  <span style={{ color: "var(--txt)", fontSize: "1rem", lineHeight: 1.6 }}>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`careers-section ${visible.has("tips") ? "careers--in" : ""}`} data-obs="tips" ref={obs("tips")} style={{ background: "var(--white)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">Tips for Success</span>
            <h2 className="careers-h2">Application Tips</h2>
            <p className="careers-sh__p">Maximize your chances of success with these helpful tips.</p>
          </div>

          <div className="careers-benefits-grid">
            {TIPS.map((tip, i) => (
              <div key={i} className="careers-benefit-card">
                <div className="careers-benefit-card__icon">💡</div>
                <h3 className="careers-benefit-card__title">{tip.title}</h3>
                <p className="careers-benefit-card__desc">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`careers-section ${visible.has("apply") ? "careers--in" : ""}`} data-obs="apply" ref={obs("apply")} style={{ background: "var(--off)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">Ready to Apply?</span>
            <h2 className="careers-h2">Submit Your Application</h2>
            <p className="careers-sh__p">Fill out our online application form to get started.</p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => setShowForm(true)} className="careers-btn">
                Start Application
              </button>
              <Link to="/careers/join" className="careers-btn careers-btn--outline">
                View Open Positions
              </Link>
            </div>
            {/* <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <p style={{ color: "var(--txt-2)", marginBottom: "0.5rem" }}>Want to learn more about Ebadah Group  Japan?</p>
              <Link to="/careers/blog" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "underline" }}>
                Read our recruitment blog →
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="careers-modal-overlay" onClick={closeForm}>
          <div className="careers-modal" onClick={(e) => e.stopPropagation()}>
            {!showThankYou ? (
              <>
                <div className="careers-modal__header">
                  <h2 className="careers-h2">Ebadah Group  Japan Job Application</h2>
                  <button className="careers-modal__close" onClick={closeForm}>×</button>
                </div>
                <form onSubmit={handleSubmit} className="careers-modal__form">
                  <div className="careers-modal__form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={formErrors.name ? "careers-modal__input--error" : ""}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && <span className="careers-modal__error">{formErrors.name}</span>}
                  </div>
                  <div className="careers-modal__form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? "careers-modal__input--error" : ""}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && <span className="careers-modal__error">{formErrors.email}</span>}
                  </div>
                  <div className="careers-modal__form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={formErrors.phone ? "careers-modal__input--error" : ""}
                      placeholder="090-1234-5678"
                    />
                    {formErrors.phone && <span className="careers-modal__error">{formErrors.phone}</span>}
                  </div>
                  <div className="careers-modal__form-group">
                    <label htmlFor="position">Position Applied For *</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={formErrors.position ? "careers-modal__input--error" : ""}
                      placeholder="e.g., Senior Recruitment Consultant"
                    />
                    {formErrors.position && <span className="careers-modal__error">{formErrors.position}</span>}
                  </div>
                  <div className="careers-modal__form-group">
                    <label htmlFor="resume">Resume/CV * (PDF, DOC, DOCX)</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className={formErrors.resume ? "careers-modal__input--error" : ""}
                    />
                    {formErrors.resume && <span className="careers-modal__error">{formErrors.resume}</span>}
                    {formData.resume && <span style={{ fontSize: "0.85rem", color: "var(--txt-2)", marginTop: "0.5rem", display: "block" }}>Selected: {formData.resume.name}</span>}
                  </div>
                  <div className="careers-modal__form-group">
                    <label htmlFor="coverLetter">Cover Letter *</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className={formErrors.coverLetter ? "careers-modal__input--error" : ""}
                      placeholder="Tell us why you're interested in this position and what you can bring to Ebadah Group  Japan..."
                    />
                    {formErrors.coverLetter && <span className="careers-modal__error">{formErrors.coverLetter}</span>}
                  </div>
                  <div className="careers-modal__form-group">
                    <label htmlFor="experience">Years of Experience</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div className="careers-modal__form-group">
                    <label htmlFor="availability">Availability</label>
                    <input
                      type="text"
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      placeholder="When can you start? (e.g., Immediately, 2 weeks notice)"
                    />
                  </div>
                  <div className="careers-modal__form-group">
                    <label htmlFor="referral">How did you hear about us?</label>
                    <input
                      type="text"
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleInputChange}
                      placeholder="e.g., Company website, LinkedIn, Employee referral"
                    />
                  </div>
                  <div className="careers-modal__form-actions">
                    <button type="button" className="careers-btn careers-btn--outline" onClick={closeForm}>
                      Cancel
                    </button>
                    <button type="submit" className="careers-btn" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="careers-modal__thankyou">
                <div className="careers-modal__thankyou-icon">✓</div>
                <h2 className="careers-h2">Thank You!</h2>
                <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
                  Your application has been submitted successfully.
                </p>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem" }}>
                  Our HR team will review your application and contact you within 5-7 business days.
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
