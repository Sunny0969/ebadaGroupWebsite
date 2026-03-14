import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

const FAQ_CATEGORIES = [
  { id: "general", label: "General" },
  { id: "job-seekers", label: "Job Seekers" },
  { id: "employers", label: "Employers" },
  { id: "services", label: "Services" },
  { id: "legal", label: "Legal & Compliance" },
  { id: "technical", label: "Technical Support" }
];

const FAQ_ITEMS = [
  {
    category: "general",
    question: "What is Ebada Group and what services do you provide?",
    answer: "Ebada Group is a licensed recruitment and staffing agency in Japan, operating under Employment Placement Business License No. 13-ユ-123456 and Worker Dispatch Business License No. 派13-123456. We provide comprehensive staffing solutions including permanent employment placement, manufacturing dispatch, engineer dispatch, business outsourcing, foreign employment services, and re-employment support across various industries throughout Japan."
  },
  {
    category: "general",
    question: "Where is your head office located and do you have branch offices?",
    answer: "Our head office is located at 2-5-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005, Japan. We also have branch offices in Osaka, Nagoya, Fukuoka, Sapporo, and Sendai to serve clients and candidates across Japan. Visit our Branch Locations page for detailed addresses, contact information, and business hours for each location."
  },
  {
    category: "general",
    question: "What are your business hours?",
    answer: "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM (Japan Standard Time). Some branch offices may have slightly different hours. We are closed on weekends and Japanese national holidays. For urgent matters outside business hours, you can leave a message through our contact form or email, and we will respond on the next business day."
  },
  {
    category: "general",
    question: "Is Ebada Group licensed to operate in Japan?",
    answer: "Yes, Ebada Group is fully licensed and compliant with Japanese employment and labor laws. We hold Employment Placement Business License No. 13-ユ-123456 issued by the Tokyo Labor Bureau, and Worker Dispatch Business License No. 派13-123456 issued by the Ministry of Health, Labour and Welfare. We operate in strict compliance with the Employment Security Act (職業安定法) and Worker Dispatch Act (労働者派遣事業法)."
  },
  {
    category: "job-seekers",
    question: "How do I apply for a job through Ebada Group?",
    answer: "You can apply for jobs in several ways: (1) Browse our job listings on our website, create a free account, and apply directly through our platform, (2) Register as a candidate and our team will match you with suitable opportunities based on your profile, (3) Visit one of our branch offices for in-person assistance. Visit our 'How to Apply' page for detailed step-by-step instructions and tips for successful applications."
  },
  {
    category: "job-seekers",
    question: "Do I need to pay any fees to find a job?",
    answer: "No, absolutely not. Our services are completely free for job seekers, in accordance with Article 32 of Japan's Employment Security Act, which prohibits charging fees to job seekers. We are paid by employers, so there are no fees, charges, or hidden costs for candidates using our platform. If anyone asks you to pay for our services, please contact us immediately as this may indicate fraudulent activity."
  },
  {
    category: "job-seekers",
    question: "What documents do I need to apply for a job?",
    answer: "Typically, you'll need: (1) Resume/CV (履歴書) in Japanese format, (2) Identification documents (driver's license, passport, or My Number card), (3) Educational certificates and diplomas, (4) Professional licenses or certifications relevant to the position, (5) Work history documentation. Specific requirements vary by job and industry. We'll inform you of exact requirements during the application process. For foreign workers, additional documents such as visa status and work permits may be required."
  },
  {
    category: "job-seekers",
    question: "Can foreign workers use your services?",
    answer: "Yes, we provide services to foreign workers in Japan. We assist with job placement for individuals with appropriate work visas and permits. Our foreign employment services include visa status verification, work permit assistance, language support, and cultural integration guidance. We comply with all immigration and employment laws regarding foreign workers. Please ensure you have valid work authorization before applying."
  },
  {
    category: "job-seekers",
    question: "How long does the job application process take?",
    answer: "The timeline varies depending on the position and employer. Typically: (1) Initial application review: 3-5 business days, (2) Interview scheduling: 1-2 weeks after application, (3) Interview process: 1-3 weeks depending on number of interview rounds, (4) Offer and onboarding: 1-2 weeks after final interview. For urgent positions, the process may be faster. We keep candidates informed at each stage of the process."
  },
  {
    category: "employers",
    question: "How can I post a job opening with Ebada Group?",
    answer: "Employers can post job openings through our 'Post a Job' portal on our website. Simply create an employer account, fill out the job details including job description, requirements, salary range, and working conditions, and our team will review and publish your listing. For enterprise clients with multiple positions or ongoing staffing needs, contact our sales team at sales@ebadagroup.com for dedicated account management and customized solutions."
  },
  {
    category: "employers",
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including manufacturing, engineering, IT and software development, healthcare, logistics and transportation, retail, hospitality, construction, finance, and more. Our team has expertise in placing candidates across 12+ major industries. We work with companies of all sizes, from startups to large enterprises, across all 47 prefectures of Japan."
  },
  {
    category: "employers",
    question: "How long does it take to find suitable candidates?",
    answer: "The timeline varies depending on the position, requirements, and market conditions. Typically: (1) Standard positions: 3-5 business days for initial candidate matches, (2) Specialized or senior roles: 1-2 weeks, (3) High-volume positions: 1-2 weeks for bulk candidate sourcing. We provide regular updates throughout the recruitment process and work closely with employers to understand their specific needs and timeline requirements."
  },
  {
    category: "employers",
    question: "What are your fees for employers?",
    answer: "Our fee structure varies based on the type of service: (1) Permanent placement: Typically a percentage of annual salary or fixed fee as agreed in the service contract, (2) Worker dispatch: Hourly or monthly rates based on hours worked and agreed rates, (3) Premium services: Custom pricing for enterprise clients. All fees are clearly specified in writing in your service agreement. We comply with Article 33 of the Employment Security Act regarding fee structures. Contact our sales team for detailed pricing information."
  },
  {
    category: "services",
    question: "What is Manufacturing Dispatch (製造業派遣)?",
    answer: "Manufacturing Dispatch is our service that provides skilled workers to manufacturing companies on a temporary or contract basis. This helps companies manage production peaks, seasonal demands, special projects, and temporary staffing needs without long-term employment commitments. We handle all employment administration including payroll, social insurance, and benefits. Dispatch workers are employees of Ebada Group, ensuring compliance with the Worker Dispatch Act."
  },
  {
    category: "services",
    question: "What is Engineer Dispatch (エンジニア派遣)?",
    answer: "Engineer Dispatch connects companies with qualified engineers for project-based work, temporary assignments, or specialized technical needs. We provide engineers across various specializations including software engineering, mechanical engineering, electrical engineering, civil engineering, and more. This service is ideal for companies with project-based needs, skill gaps, or temporary technical requirements. All dispatch workers are properly licensed and qualified for their assignments."
  },
  {
    category: "services",
    question: "Do you offer permanent placement services?",
    answer: "Yes, we offer both temporary dispatch and permanent placement services. Our permanent placement (職業紹介) services specialize in finding long-term employees for companies looking to build their permanent workforce. We handle the entire recruitment process from sourcing candidates to facilitating interviews and onboarding. Permanent placements are subject to our standard placement fees as specified in service agreements."
  },
  {
    category: "services",
    question: "What is the maximum dispatch period?",
    answer: "In accordance with the Worker Dispatch Act, dispatch periods are limited by law: (1) General dispatch work: Maximum 3 years per worker at the same workplace, (2) Specialized dispatch work (26 specified occupations): No time limit, (3) Manufacturing dispatch: Subject to specific regulations. We ensure all dispatch assignments comply with legal requirements and provide appropriate notice and transition support when dispatch periods approach limits."
  },
  {
    category: "legal",
    question: "How do you ensure compliance with Japanese labor laws?",
    answer: "We maintain strict compliance with all applicable Japanese employment and labor laws including the Employment Security Act, Worker Dispatch Act, Labor Standards Act, Equal Employment Opportunity Act, and Personal Information Protection Act. We conduct regular compliance audits, provide staff training, maintain proper licenses, and work closely with legal advisors. All our services are designed to meet or exceed legal requirements."
  },
  {
    category: "legal",
    question: "What are my rights as a job seeker?",
    answer: "As a job seeker, you have the right to: (1) Free services - no fees can be charged to job seekers, (2) Accurate information about job opportunities and working conditions, (3) Non-discriminatory treatment regardless of race, gender, age, religion, or other protected characteristics, (4) Privacy protection of your personal information, (5) Withdraw from the application process at any time. We are committed to protecting your rights and ensuring fair treatment throughout the job search process."
  },
  {
    category: "legal",
    question: "How is my personal information protected?",
    answer: "We protect your personal information in accordance with Japan's Personal Information Protection Act. We implement technical and organizational security measures, limit access to authorized personnel only, obtain consent before sharing information with employers, and retain information only as long as necessary. You have rights to access, correct, delete, or suspend use of your personal information. See our Privacy Policy for detailed information."
  },
  {
    category: "technical",
    question: "I'm having trouble accessing my account. What should I do?",
    answer: "If you're experiencing login issues: (1) Try resetting your password using the 'Forgot Password' link on the login page, (2) Clear your browser cache and cookies, (3) Try using a different browser or device, (4) Ensure you're using the correct email address associated with your account. If problems persist, contact our technical support team at support@ebadagroup.com or call 03-1234-5678 during business hours. We typically respond to technical support requests within 24 hours."
  },
  {
    category: "technical",
    question: "How do I update my profile information?",
    answer: "To update your profile: (1) Log into your account, (2) Navigate to 'My Profile' or 'Account Settings' from the menu, (3) Click 'Edit' on the section you want to update, (4) Make your changes and click 'Save'. For job seekers, keeping your profile updated with current skills, work history, and availability helps us match you with better opportunities. You can update your profile at any time."
  },
  {
    category: "technical",
    question: "Can I use your website on mobile devices?",
    answer: "Yes, our website is fully responsive and optimized for mobile devices including smartphones and tablets. You can access all features including job browsing, applications, profile management, and account settings from your mobile device. We also offer mobile-optimized forms and easy document upload functionality. For the best experience, we recommend using the latest version of your mobile browser."
  }
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    document.title = "FAQ - Ebada Group | Frequently Asked Questions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about Ebada Group recruitment services, job applications, employer services, and compliance with Japanese employment laws.');
    }
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const filteredFAQs = selectedCategory === "all" 
    ? FAQ_ITEMS 
    : FAQ_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="contact">
      <Header />

      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-h1 contact-h1--light">Frequently Asked Questions</h1>
          <p className="contact-hero__p">
            Find answers to common questions about our services, application process, legal compliance, and more.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-wrap">
          <div className="contact-sh">
            <span className="contact-eyebrow">Get Answers</span>
            <h2 className="contact-h2">Browse by Category</h2>
            <p className="contact-sh__p">Select a category to filter questions, or browse all questions below.</p>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`contact-btn ${selectedCategory === "all" ? "" : "contact-btn--outline"}`}
              style={{ padding: "0.75rem 1.5rem", fontSize: "0.95rem" }}
            >
              All Questions
            </button>
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`contact-btn ${selectedCategory === cat.id ? "" : "contact-btn--outline"}`}
                style={{ padding: "0.75rem 1.5rem", fontSize: "0.95rem" }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {filteredFAQs.length === 0 ? (
              <div style={{ textAlign: "center", padding: "3rem", color: "var(--txt-2)" }}>
                <p>No questions found in this category.</p>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "var(--r-lg)",
                    overflow: "hidden",
                    background: "var(--white)",
                    transition: "all 0.3s ease",
                    boxShadow: openItems.has(index) ? "var(--shadow)" : "none"
                  }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    style={{
                      width: "100%",
                      padding: "1.5rem",
                      textAlign: "left",
                      background: openItems.has(index) ? "var(--off)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.05rem",
                      fontWeight: "600",
                      color: "var(--txt)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <span style={{ flex: 1, paddingRight: "1rem" }}>{faq.question}</span>
                    <span style={{ 
                      fontSize: "1.5rem", 
                      color: "var(--accent)",
                      transition: "transform 0.3s ease",
                      transform: openItems.has(index) ? "rotate(45deg)" : "rotate(0deg)"
                    }}>
                      {openItems.has(index) ? "−" : "+"}
                    </span>
                  </button>
                  {openItems.has(index) && (
                    <div
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: "var(--txt-2)",
                        lineHeight: "1.8",
                        fontSize: "0.95rem",
                        animation: "fadeIn 0.3s ease"
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div style={{ marginTop: "3rem", padding: "2.5rem", background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%)", borderRadius: "var(--r-lg)", textAlign: "center", color: "var(--white)" }}>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.5rem", marginBottom: "1rem", color: "var(--white)" }}>
              Still have questions?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
              Can't find what you're looking for? Our support team is here to help you.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="contact-btn" style={{ background: "var(--accent)", color: "var(--white)" }}>
                Contact Support
              </Link>
              <Link to="/support" className="contact-btn contact-btn--ghost" style={{ borderColor: "rgba(255,255,255,0.5)", color: "var(--white)" }}>
                Visit Support Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
