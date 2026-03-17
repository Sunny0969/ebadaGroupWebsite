import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Careers.css";

const OPEN_POSITIONS = [
  {
    id: 1,
    title: "Senior Recruitment Consultant",
    department: "Recruitment",
    location: "Tokyo, Japan",
    type: "Full-time",
    description: "Lead recruitment efforts for manufacturing and engineering positions. Build relationships with clients and candidates."
  },
  // {
  //   id: 2,
  //   title: "HR Business Partner",
  //   department: "Human Resources",
  //   location: "Osaka, Japan",
  //   type: "Full-time",
  //   description: "Support employee relations, talent development, and organizational growth. Work closely with management teams."
  // },
  {
    id: 3,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Tokyo, Japan",
    type: "Full-time",
    description: "Develop marketing strategies, manage digital campaigns, and enhance brand presence across Japan."
  },
  {
    id: 4,
    title: "Operations Coordinator",
    department: "Operations",
    location: "Nagoya, Japan",
    type: "Full-time",
    description: "Coordinate dispatch operations, manage schedules, and ensure smooth service delivery to clients."
  },
  // {
  //   id: 5,
  //   title: "IT Support Specialist",
  //   department: "IT",
  //   location: "Tokyo, Japan",
  //   type: "Full-time",
  //   description: "Maintain IT infrastructure, support internal systems, and implement technology solutions."
  // },
  // {
  //   id: 6,
  //   title: "Client Relations Manager",
  //   department: "Sales",
  //   location: "Fukuoka, Japan",
  //   type: "Full-time",
  //   description: "Manage client relationships, identify business opportunities, and drive revenue growth."
  // }
];

const BENEFITS = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Attractive salary packages with performance-based bonuses and annual reviews."
  },
  {
    icon: "🏥",
    title: "Health Insurance",
    description: "Comprehensive health insurance coverage for you and your family, including dental and vision."
  },
  {
    icon: "📚",
    title: "Training Programs",
    description: "Continuous learning opportunities, professional development courses, and skill enhancement programs."
  },
  {
    icon: "📈",
    title: "Career Growth",
    description: "Clear career progression paths, internal promotion opportunities, and mentorship programs."
  },
  {
    icon: "🏖️",
    title: "Paid Time Off",
    description: "Generous vacation days, national holidays, and flexible leave policies."
  },
  {
    icon: "🤝",
    title: "Team Culture",
    description: "Collaborative work environment, team-building activities, and supportive colleagues."
  }
];

const CULTURE_ITEMS = [
  {
    title: "Diversity & Inclusion",
    description: "We celebrate diversity and create an inclusive environment where everyone can thrive."
  },
  {
    title: "Work-Life Balance",
    description: "We believe in maintaining a healthy balance between professional and personal life."
  },
  {
    title: "Innovation",
    description: "We encourage creative thinking and innovative solutions to drive business growth."
  },
  {
    title: "Team Collaboration",
    description: "We foster a collaborative culture where teamwork and mutual support are valued."
  }
];

const TESTIMONIALS = [
  {
    quote: "Working at Ebadah Group  Japan has been an incredible journey. The company truly values its employees and provides excellent opportunities for growth. The supportive team environment makes every day enjoyable.",
    name: "Yuki Tanaka",
    role: "Senior Recruitment Consultant"
  },
  {
    quote: "I've learned so much in my time here. The training programs are excellent, and management is always open to new ideas. It's a place where you can truly make a difference.",
    name: "Hiroshi Sato",
    role: "Operations Manager"
  },
  {
    quote: "The work-life balance here is amazing. I feel valued as an employee, and the benefits package is comprehensive. Ebadah Group  Japan is more than just a workplace—it's a community.",
    name: "Mei Yamamoto",
    role: "HR Business Partner"
  }
];

export default function JoinOurTeam() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof OPEN_POSITIONS[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null as File | null,
    coverLetter: "",
    experience: "",
    availability: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const refMap = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    // SEO: Update document title and meta
    document.title = "Join Our Team - Careers at Ebadah Group  Japan | Internal Job Opportunities";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore career opportunities at Ebadah Group  Japan. We offer competitive salaries, comprehensive benefits, and a supportive work environment. Apply for internal positions in recruitment, HR, marketing, and more.');
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

  const handleApplyClick = (job: typeof OPEN_POSITIONS[0]) => {
    setSelectedJob(job);
    setShowModal(true);
    setShowThankYou(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: job.title,
      resume: null,
      coverLetter: "",
      experience: "",
      availability: ""
    });
    setFormErrors({});
  };

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
      setShowModal(false);
      setShowThankYou(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        coverLetter: "",
        experience: "",
        availability: ""
      });
    }, 3000);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowThankYou(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
      coverLetter: "",
      experience: "",
      availability: ""
    });
    setFormErrors({});
  };

  return (
    <div className="careers">
      <Header />

      <section className="careers-hero">
        <div className="careers-hero__content">
          <h1 className="careers-h1 careers-hero__h1">Join Our Team</h1>
          <p className="careers-hero__p">
            Build your career with Ebadah Group  Japan. We're looking for passionate individuals who want to make a difference in the recruitment and workforce solutions industry.
          </p>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginTop: "1rem" }}>
            <strong>Note:</strong> These are internal Ebadah Group  positions, not client job placements.
          </p>
        </div>
      </section>

      <section className={`careers-section ${visible.has("positions") ? "careers--in" : ""}`} data-obs="positions" ref={obs("positions")} style={{ background: "var(--white)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">Career Opportunities</span>
            <h2 className="careers-h2">Open Positions</h2>
            <p className="careers-sh__p">Explore current job openings at Ebadah Group  Japan and find your next career opportunity.</p>
          </div>

          <div className="careers-jobs-grid">
            {OPEN_POSITIONS.map((job) => (
              <div key={job.id} className="careers-job-card">
                <h3 className="careers-job-card__title">{job.title}</h3>
                <div className="careers-job-card__meta">
                  <span>📍 {job.location}</span>
                  <span>🏢 {job.department}</span>
                  <span>⏰ {job.type}</span>
                </div>
                <p className="careers-job-card__desc">{job.description}</p>
                <div className="careers-job-card__actions">
                  <button 
                    onClick={() => handleApplyClick(job)}
                    className="careers-btn"
                  >
                    Apply Now
                  </button>
                  <Link to="/careers/process" className="careers-btn careers-btn--outline">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`careers-section ${visible.has("benefits") ? "careers--in" : ""}`} data-obs="benefits" ref={obs("benefits")} style={{ background: "var(--off)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">Employee Benefits</span>
            <h2 className="careers-h2">Why Work With Us</h2>
            <p className="careers-sh__p">We offer comprehensive benefits and a supportive work environment.</p>
          </div>

          <div className="careers-benefits-grid">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="careers-benefit-card">
                <div className="careers-benefit-card__icon">{benefit.icon}</div>
                <h3 className="careers-benefit-card__title">{benefit.title}</h3>
                <p className="careers-benefit-card__desc">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`careers-section ${visible.has("culture") ? "careers--in" : ""}`} data-obs="culture" ref={obs("culture")} style={{ background: "var(--white)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">Company Culture</span>
            <h2 className="careers-h2">Our Work Environment</h2>
            <p className="careers-sh__p">Discover what makes Ebadah Group  Japan a great place to work.</p>
          </div>

          <div className="careers-culture-grid">
            {CULTURE_ITEMS.map((item, i) => (
              <div key={i} className="careers-culture-item">
                <div className="careers-culture-item__image">🏢</div>
                <div className="careers-culture-item__content">
                  <h3 className="careers-culture-item__title">{item.title}</h3>
                  <p className="careers-culture-item__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`careers-section ${visible.has("testimonials") ? "careers--in" : ""}`} data-obs="testimonials" ref={obs("testimonials")} style={{ background: "var(--off)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">Employee Testimonials</span>
            <h2 className="careers-h2">Hear From Our Team</h2>
            <p className="careers-sh__p">See what our employees say about working at Ebadah Group  Japan.</p>
          </div>

          <div className="careers-testimonials">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="careers-testimonial">
                <p className="careers-testimonial__quote">"{testimonial.quote}"</p>
                <div className="careers-testimonial__author">
                  <div className="careers-testimonial__avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="careers-testimonial__info">
                    <div className="careers-testimonial__name">{testimonial.name}</div>
                    <div className="careers-testimonial__role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "var(--txt-2)", marginBottom: "1rem" }}>Want to learn more about our culture?</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/careers/blog" className="careers-btn careers-btn--outline">
                Read Our Blog
              </Link>
              <Link to="/careers/process" className="careers-btn careers-btn--outline">
                Application Process
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      {/* Application Modal */}
      {showModal && selectedJob && (
        <div className="careers-modal-overlay" onClick={closeModal}>
          <div className="careers-modal" onClick={(e) => e.stopPropagation()}>
            {!showThankYou ? (
              <>
                <div className="careers-modal__header">
                  <h2 className="careers-h2">Job Application</h2>
                  <button className="careers-modal__close" onClick={closeModal}>×</button>
                </div>
                <div style={{ padding: "1.5rem 2rem", background: "var(--off)", borderBottom: "1px solid var(--border)" }}>
                  <h3 className="careers-h3" style={{ marginBottom: "0.5rem" }}>{selectedJob.title}</h3>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.9rem" }}>
                    {selectedJob.department} • {selectedJob.location} • {selectedJob.type}
                  </p>
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
                      readOnly
                      style={{ background: "var(--off)" }}
                    />
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
                  <div className="careers-modal__form-actions">
                    <button type="button" className="careers-btn careers-btn--outline" onClick={closeModal}>
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
                  Your application for <strong>{selectedJob.title}</strong> has been submitted successfully.
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
