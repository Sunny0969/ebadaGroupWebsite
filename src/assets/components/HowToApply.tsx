import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./JobSeekers.css";

const STEPS = [
  {
    num: 1,
    title: "Browse Job Listings",
    description: "Explore our job board to find positions that match your skills and interests. Use filters to narrow down by location, industry, or job type."
  },
  {
    num: 2,
    title: "Review Job Details",
    description: "Click on any job posting to read the full description, requirements, benefits, and company information. Make sure you meet the qualifications."
  },
  {
    num: 3,
    title: "Prepare Your Application",
    description: "Update your resume, write a tailored cover letter, and gather any required documents. Make sure your contact information is current."
  },
  {
    num: 4,
    title: "Submit Application",
    description: "Click 'Apply Now' on the job posting, fill out the application form, upload your resume, and submit. You'll receive a confirmation email."
  },
  {
    num: 5,
    title: "Application Review",
    description: "Our team reviews your application. If you're a good match, we'll contact you within 5-7 business days to schedule an interview."
  },
  {
    num: 6,
    title: "Interview Process",
    description: "Participate in interviews (phone, video, or in-person). Be prepared to discuss your experience, skills, and why you're interested in the role."
  }
];

const REQUIRED_DOCUMENTS = [
  "Updated Resume/CV (PDF or Word format)",
  "Cover Letter (optional but recommended)",
  "Photo ID (for verification)",
  "Educational certificates (if required for position)",
  "Work permits/visa documents (for non-Japanese applicants)",
  "Professional references (contact information)"
];

const TIPS = [
  {
    title: "Tailor Your Resume",
    description: "Customize your resume to highlight relevant experience and skills that match the job requirements. Use keywords from the job description."
  },
  {
    title: "Write a Strong Cover Letter",
    description: "Explain why you're interested in the position and how your background makes you a good fit. Keep it concise and professional."
  },
  {
    title: "Research the Company",
    description: "Learn about the company's values, culture, and recent news. This shows genuine interest and helps you prepare for interviews."
  },
  {
    title: "Prepare for Interviews",
    description: "Practice common interview questions, prepare questions to ask the interviewer, and dress professionally. Arrive on time or join video calls early."
  },
  {
    title: "Follow Up",
    description: "Send a thank-you email after interviews. If you haven't heard back within the stated timeframe, it's appropriate to follow up politely."
  },
  {
    title: "Stay Organized",
    description: "Keep track of applications, interview dates, and follow-ups. Use a spreadsheet or notebook to manage your job search effectively."
  }
];

export default function HowToApply() {
  return (
    <div className="js">
      <Header />

      <section className="js-hero">
        <div className="js-wrap">
          <h1 className="js-h1 js-hero__h1">How to Apply</h1>
          <p className="js-hero__p">A step-by-step guide to applying for jobs through Ebadah Group  Japan. Everything you need to know to submit a successful application.</p>
        </div>
      </section>

      <section className="js-section" style={{ background: "var(--white)" }}>
        <div className="js-wrap">
          <div className="js-sh">
            <span className="js-eyebrow">Application Process</span>
            <h2 className="js-h2">Step-by-Step Guide</h2>
            <p className="js-sh__p">Follow these steps to apply for your dream job.</p>
          </div>

          <div className="js-steps">
            {STEPS.map((step, i) => (
              <div key={i} className="js-step">
                <div className="js-step__num">{step.num}</div>
                <div className="js-step__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="js-section" style={{ background: "var(--off)" }}>
        <div className="js-wrap">
          <div className="js-sh">
            <span className="js-eyebrow">Required Documents</span>
            <h2 className="js-h2">What You'll Need</h2>
            <p className="js-sh__p">Prepare these documents before starting your application.</p>
          </div>

          <div className="js-checklist">
            {REQUIRED_DOCUMENTS.map((doc, i) => (
              <div key={i} className="js-checklist__item">
                <div className="js-checklist__check"></div>
                <div>{doc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="js-section" style={{ background: "var(--white)" }}>
        <div className="js-wrap">
          <div className="js-sh">
            <span className="js-eyebrow">Tips for Success</span>
            <h2 className="js-h2">Interview Preparation Tips</h2>
            <p className="js-sh__p">Maximize your chances of success with these helpful tips.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {TIPS.map((tip, i) => (
              <div key={i} style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", border: "1px solid var(--border)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.75rem" }}>
                  {tip.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="js-section" style={{ background: "var(--navy)", color: "var(--white)", textAlign: "center" }}>
        <div className="js-wrap">
          <h2 className="js-h2" style={{ color: "var(--white)", marginBottom: "1.5rem" }}>Ready to Start Applying?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "700px", margin: "0 auto 2rem" }}>
            Browse our job listings and find the perfect opportunity for your career.
          </p>
          <Link to="/job-seekers/listings" className="js-btn js-btn--primary">Browse Job Listings</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
