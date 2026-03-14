import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

const SUPPORT_OPTIONS = [
  {
    icon: "💬",
    title: "Live Chat",
    description: "Chat with our support team in real-time for immediate assistance",
    action: "Start Chat",
    available: "Available 24/7",
    color: "var(--accent)"
  },
  {
    icon: "📧",
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours",
    action: "Send Email",
    email: "support@ebadagroup.com",
    hours: "Response within 24 hours",
    color: "var(--navy)"
  },
  {
    icon: "📞",
    title: "Phone Support",
    description: "Speak directly with our support team",
    action: "Call Now",
    phone: "03-1234-5678",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM JST",
    color: "var(--accent)"
  },
  {
    icon: "📚",
    title: "Help Center",
    description: "Browse our FAQ and knowledge base for instant answers",
    action: "Visit FAQ",
    link: "/faq",
    color: "var(--navy)"
  }
];

const SUPPORT_TICKETS = [
  {
    category: "Account Issues",
    icon: "🔐",
    issues: ["Login problems", "Password reset", "Profile updates", "Account verification", "Email change"],
    description: "Issues related to your account access and management"
  },
  {
    category: "Job Applications",
    icon: "📝",
    issues: ["Application status", "Document upload", "Interview scheduling", "Application withdrawal", "Resume updates"],
    description: "Questions about the job application process"
  },
  {
    category: "Technical Support",
    icon: "💻",
    issues: ["Website errors", "Mobile app issues", "Browser compatibility", "Upload problems", "Payment processing"],
    description: "Technical issues with our website or platform"
  },
  {
    category: "Billing & Payments",
    icon: "💳",
    issues: ["Payment methods", "Invoice requests", "Refund inquiries", "Billing questions", "Service fees"],
    description: "Questions about fees, payments, and billing (for employers)"
  },
  {
    category: "Legal & Compliance",
    icon: "⚖️",
    issues: ["Privacy rights", "Data protection", "Employment laws", "Contract questions", "License verification"],
    description: "Legal and compliance-related inquiries"
  },
  {
    category: "Service Information",
    icon: "ℹ️",
    issues: ["Service details", "Process explanations", "Timeline questions", "Requirements", "Eligibility"],
    description: "General information about our services"
  }
];

const SUPPORT_STATS = [
  { label: "Average Response Time", value: "< 24 hours" },
  { label: "Support Languages", value: "日本語 & English" },
  { label: "Business Days", value: "Mon-Fri" },
  { label: "Customer Satisfaction", value: "98%" }
];

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowThankYou(true);
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: ""
      });
      setShowThankYou(false);
    }, 5000);
  };

  return (
    <div className="contact">
      <Header />

      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-h1 contact-h1--light">Support Center</h1>
          <p className="contact-hero__p">
            We're here to help! Get assistance with your account, applications, services, or any questions you may have.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-wrap">
          <div className="contact-sh">
            <span className="contact-eyebrow">Get Help</span>
            <h2 className="contact-h2">Choose Your Support Option</h2>
            <p className="contact-sh__p">Select the best way to reach us based on your needs and urgency.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
            {SUPPORT_OPTIONS.map((option, index) => (
              <div
                key={index}
                style={{
                  padding: "2rem",
                  border: "2px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  background: "var(--white)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{option.icon}</div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginBottom: "0.75rem", color: "var(--txt)" }}>
                  {option.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                  {option.description}
                </p>
                {option.link ? (
                  <Link to={option.link} className="contact-btn" style={{ background: option.color, color: "var(--white)", display: "inline-block", width: "100%" }}>
                    {option.action}
                  </Link>
                ) : option.email ? (
                  <a href={`mailto:${option.email}`} className="contact-btn" style={{ background: option.color, color: "var(--white)", display: "inline-block", width: "100%" }}>
                    {option.action}
                  </a>
                ) : option.phone ? (
                  <div>
                    <a href={`tel:${option.phone}`} className="contact-btn" style={{ background: option.color, color: "var(--white)", display: "inline-block", width: "100%", marginBottom: "0.5rem" }}>
                      {option.action}
                    </a>
                    <p style={{ fontSize: "0.85rem", color: "var(--txt-2)" }}>{option.hours}</p>
                  </div>
                ) : (
                  <button className="contact-btn" style={{ background: option.color, color: "var(--white)", width: "100%" }}>
                    {option.action}
                  </button>
                )}
                {option.available && (
                  <p style={{ fontSize: "0.85rem", color: "var(--txt-2)", marginTop: "0.75rem" }}>{option.available}</p>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "4rem", padding: "2rem", background: "var(--off)", borderRadius: "var(--r-lg)" }}>
            {SUPPORT_STATS.map((stat, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--accent)", marginBottom: "0.5rem" }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--txt-2)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="contact-sh">
            <h2 className="contact-h2">Common Support Topics</h2>
            <p className="contact-sh__p">Quick access to frequently requested support topics and information.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
            {SUPPORT_TICKETS.map((ticket, index) => (
              <div
                key={index}
                style={{
                  padding: "1.75rem",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  background: "var(--white)",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "var(--shadow)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{ticket.icon}</div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--txt)" }}>
                  {ticket.category}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--txt-2)", marginBottom: "1rem", lineHeight: "1.5" }}>
                  {ticket.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {ticket.issues.map((issue, i) => (
                    <li key={i} style={{ padding: "0.5rem 0", color: "var(--txt-2)", fontSize: "0.9rem", display: "flex", alignItems: "center" }}>
                      <span style={{ color: "var(--accent)", marginRight: "0.5rem" }}>•</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="contact-sh">
            <h2 className="contact-h2">Submit a Support Ticket</h2>
            <p className="contact-sh__p">Can't find what you need? Submit a ticket and we'll get back to you within 24 hours.</p>
          </div>

          {!showThankYou ? (
            <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: "700px", margin: "0 auto" }}>
              <div className="contact-form__group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="category">Support Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  {SUPPORT_TICKETS.map((ticket, i) => (
                    <option key={i} value={ticket.category}>{ticket.category}</option>
                  ))}
                </select>
              </div>

              <div className="contact-form__group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Brief description of your issue"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Please provide detailed information about your issue, including any error messages, steps to reproduce, or relevant account information..."
                />
              </div>

              <div className="contact-form__actions">
                <button type="submit" className="contact-btn" disabled={isSubmitting} style={{ background: "var(--accent)", color: "var(--white)" }}>
                  {isSubmitting ? "Submitting..." : "Submit Ticket"}
                </button>
              </div>
            </form>
          ) : (
            <div className="contact-thankyou" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
              <div className="contact-thankyou__icon" style={{ fontSize: "4rem", width: "80px", height: "80px", borderRadius: "50%", background: "var(--accent)", color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>✓</div>
              <h2 className="contact-h2">Ticket Submitted Successfully!</h2>
              <p style={{ color: "var(--txt-2)", fontSize: "1.1rem", marginBottom: "1rem" }}>
                Your support ticket has been submitted successfully. We've sent a confirmation email to {formData.email}.
              </p>
              <p style={{ color: "var(--txt-2)", fontSize: "0.95rem" }}>
                Our support team will review your ticket and get back to you within 24 hours during business days (Monday-Friday, 9:00 AM - 6:00 PM JST).
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
