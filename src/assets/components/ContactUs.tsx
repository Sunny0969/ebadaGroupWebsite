import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

const BRANCHES = [
  { name: "Tokyo Head Office", region: "Kanto", address: "2-5-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005", phone: "03-1234-5678", email: "tokyo@cdpjp.com", manager: "Hiroshi Tanaka", hours: "Mon–Fri 9:00–18:00", lat: 35.6812, lng: 139.7671 },
  { name: "Osaka Branch", region: "Kansai", address: "1-3-2 Umeda, Kita-ku, Osaka 530-0001", phone: "06-2345-6789", email: "osaka@cdpjp.com", manager: "Yuki Yamamoto", hours: "Mon–Fri 9:00–18:00", lat: 34.7024, lng: 135.4959 },
  { name: "Nagoya Branch", region: "Chubu", address: "3-28-12 Meieki, Nakamura-ku, Nagoya 450-0002", phone: "052-345-6789", email: "nagoya@cdpjp.com", manager: "Kenji Suzuki", hours: "Mon–Fri 9:00–18:00", lat: 35.1709, lng: 136.8815 },
  { name: "Fukuoka Branch", region: "Kyushu", address: "1-2-10 Hakata-Ekimae, Hakata-ku, Fukuoka 812-0011", phone: "092-456-7890", email: "fukuoka@cdpjp.com", manager: "Saki Nakamura", hours: "Mon–Fri 9:00–18:00", lat: 33.5902, lng: 130.4202 },
  { name: "Sapporo Branch", region: "Hokkaido", address: "2-1-5 Kita 3-jo, Chuo-ku, Sapporo 060-0003", phone: "011-567-8901", email: "sapporo@cdpjp.com", manager: "Tomoki Ito", hours: "Mon–Fri 9:00–18:00", lat: 43.0618, lng: 141.3545 },
  { name: "Sendai Branch", region: "Tohoku", address: "4-6-1 Ichibancho, Aoba-ku, Sendai 980-0811", phone: "022-678-9012", email: "sendai@cdpjp.com", manager: "Rie Kobayashi", hours: "Mon–Fri 9:00–18:00", lat: 38.2688, lng: 140.8721 },
];

const INQUIRY_TYPES = [
  { value: "job-seeker", label: "Job Seeker Inquiry", route: "sheikrahmanjp@gmail.com" },
  { value: "employer", label: "Employer/Client Inquiry", route: "sheikrahmanjp@gmail.com" },
  { value: "partnership", label: "Partnership Inquiry", route: "sheikrahmanjp@gmail.com" },
  { value: "media", label: "Media Inquiry", route: "sheikrahmanjp@gmail.com" },
  { value: "general", label: "General Inquiry", route: "sheikrahmanjp@gmail.com" },
];

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/cdp-japan", icon: "💼" },
  { name: "Facebook", url: "https://www.facebook.com/cdpjapan", icon: "📘" },
  { name: "Twitter", url: "https://twitter.com/cdpjapan", icon: "🐦" },
  { name: "Instagram", url: "https://www.instagram.com/cdpjapan", icon: "📷" },
  { name: "YouTube", url: "https://www.youtube.com/cdpjapan", icon: "📺" },
];

const HEAD_OFFICE = {
  name: "Ebada Group Head Office",
  address: "2F Tonoike Shukugo Bldg., 2-10-16 Shukugo, Utsunomiya-shi, Tochigi, Japan",
  phone: "0283 41 6300",
  mobile: "070-2181-8345",
  email: "sheikrahmanjp@gmail.com",
  representativeDirector: "RAHMAN SHEIK HABIBUR",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
  lat: 36.5658,
  lng: 139.8836
};

export default function ContactUs() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const refMap = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    // SEO: Update document title and meta
    document.title = "Contact Us - Ebada Group | Get in Touch";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Ebada Group for recruitment services, job opportunities, or business inquiries. Visit our head office in Utsunomiya, Tochigi or contact us via phone or email.');
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

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.inquiryType) errors.inquiryType = "Please select an inquiry type";
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call - route to appropriate department based on inquiry type
    const selectedInquiry = INQUIRY_TYPES.find(type => type.value === formData.inquiryType);
    console.log(`Routing to: ${selectedInquiry?.route || 'info@cdpjp.com'}`);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowThankYou(true);
    
    // Reset form after showing thank you message
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "",
        message: ""
      });
      setShowThankYou(false);
    }, 5000);
  };

  const getSelectedInquiryRoute = () => {
    const selected = INQUIRY_TYPES.find(type => type.value === formData.inquiryType);
    return selected?.route || "info@cdpjp.com";
  };

  return (
    <div className="contact">
      <Header />

      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-h1 contact-hero__h1">Contact Us</h1>
          <p className="contact-hero__p">
            Get in touch with Ebada Group. Whether you're a job seeker, employer, or have a general inquiry, we're here to help.
          </p>
        </div>
      </section>

      <section className={`contact-section ${visible.has("form") ? "contact--in" : ""}`} data-obs="form" ref={obs("form")} style={{ background: "var(--white)" }}>
        <div className="contact-wrap">
          <div className="contact-sh">
            <span className="contact-eyebrow">Get in Touch</span>
            <h2 className="contact-h2">Send Us a Message</h2>
            <p className="contact-sh__p">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          {!showThankYou ? (
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? "contact-form__input--error" : ""}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && <span className="contact-form__error">{formErrors.name}</span>}
                </div>

                <div className="contact-form__group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? "contact-form__input--error" : ""}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && <span className="contact-form__error">{formErrors.email}</span>}
                </div>

                <div className="contact-form__group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={formErrors.phone ? "contact-form__input--error" : ""}
                    placeholder="090-1234-5678"
                  />
                  {formErrors.phone && <span className="contact-form__error">{formErrors.phone}</span>}
                </div>

                <div className="contact-form__group">
                  <label htmlFor="inquiryType">Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className={formErrors.inquiryType ? "contact-form__input--error" : ""}
                  >
                    <option value="">Select inquiry type</option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {formErrors.inquiryType && <span className="contact-form__error">{formErrors.inquiryType}</span>}
                  {formData.inquiryType && (
                    <p style={{ fontSize: "0.85rem", color: "var(--txt-2)", marginTop: "0.5rem" }}>
                      This inquiry will be routed to: <strong>{getSelectedInquiryRoute()}</strong>
                    </p>
                  )}
                </div>

                <div className="contact-form__group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={formErrors.subject ? "contact-form__input--error" : ""}
                    placeholder="Brief subject line"
                  />
                  {formErrors.subject && <span className="contact-form__error">{formErrors.subject}</span>}
                </div>

                <div className="contact-form__group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={formErrors.message ? "contact-form__input--error" : ""}
                    placeholder="Tell us how we can help you..."
                  />
                  {formErrors.message && <span className="contact-form__error">{formErrors.message}</span>}
                </div>

                <div className="contact-form__actions">
                  <button type="submit" className="contact-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>

              <div className="contact-info">
                <div className="contact-info__item">
                  <span className="contact-info__label">Head Office Address</span>
                  <div className="contact-info__value">
                    <p style={{ marginBottom: "0.5rem" }}>{HEAD_OFFICE.name}</p>
                    <p>{HEAD_OFFICE.address}</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <span className="contact-info__label">Phone Numbers</span>
                  <div className="contact-info__value">
                    <p>
                      <strong>Office:</strong> <a href={`tel:${HEAD_OFFICE.phone.replace(/\s/g, '')}`}>{HEAD_OFFICE.phone}</a>
                    </p>
                    <p>
                      <strong>Mobile:</strong> <a href={`tel:${HEAD_OFFICE.mobile.replace(/-/g, '')}`}>{HEAD_OFFICE.mobile}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <span className="contact-info__label">Email</span>
                  <div className="contact-info__value">
                    <p>
                      <a href={`mailto:${HEAD_OFFICE.email}`}>{HEAD_OFFICE.email}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <span className="contact-info__label">Business Hours</span>
                  <div className="contact-info__value">
                    <pre style={{ fontFamily: "var(--font-sans)", whiteSpace: "pre-line", margin: 0 }}>
                      {HEAD_OFFICE.hours}
                    </pre>
                  </div>
                </div>

                <div className="contact-info__item">
                  <span className="contact-info__label">Representative Director</span>
                  <div className="contact-info__value">
                    <p style={{ fontWeight: 600, color: "var(--navy)" }}>{HEAD_OFFICE.representativeDirector}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="contact-thankyou">
              <div className="contact-thankyou__icon">✓</div>
              <h2 className="contact-h2">Thank You!</h2>
              <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
                Your message has been sent successfully.
              </p>
              <p style={{ color: "var(--txt-2)", fontSize: "0.95rem" }}>
                We'll get back to you within 24-48 hours. Your inquiry has been routed to the appropriate department.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className={`contact-section ${visible.has("map") ? "contact--in" : ""}`} data-obs="map" ref={obs("map")} style={{ background: "var(--off)" }}>
        <div className="contact-wrap">
          <div className="contact-sh">
            <span className="contact-eyebrow">Find Us</span>
            <h2 className="contact-h2">Our Location</h2>
            <p className="contact-sh__p">Visit our head office in Utsunomiya, Tochigi or find directions using the map below.</p>
          </div>

          <div className="contact-map">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6d-s6U4ZUOqN8Yk&q=${encodeURIComponent(HEAD_OFFICE.address)}&zoom=15`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ebada Group Head Office Location"
            />
          </div>
        </div>
      </section>

      <section className={`contact-section ${visible.has("branches") ? "contact--in" : ""}`} data-obs="branches" ref={obs("branches")} style={{ background: "var(--white)" }}>
        <div className="contact-wrap">
          <div className="contact-sh">
            <span className="contact-eyebrow">Branch Offices</span>
            <h2 className="contact-h2">All Locations</h2>
            <p className="contact-sh__p">Contact any of our branch offices across Japan for local support.</p>
          </div>

          <div className="contact-branches">
            {BRANCHES.map((branch, i) => (
              <div key={i} className="contact-branch-card">
                <span className="contact-branch-card__region">{branch.region}</span>
                <h3 className="contact-branch-card__name">{branch.name}</h3>
                <div className="contact-branch-card__info">
                  <p>📍 {branch.address}</p>
                  <p>📞 <a href={`tel:${branch.phone}`}>{branch.phone}</a></p>
                  <p>✉️ <a href={`mailto:${branch.email}`}>{branch.email}</a></p>
                  <p>👤 Manager: <strong>{branch.manager}</strong></p>
                  <p>🕐 {branch.hours}</p>
                </div>
                <Link 
                  to="/about/locations" 
                  className="contact-branch-card__link"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`contact-section ${visible.has("social") ? "contact--in" : ""}`} data-obs="social" ref={obs("social")} style={{ background: "var(--off)" }}>
        <div className="contact-wrap">
          <div className="contact-sh">
            <span className="contact-eyebrow">Connect With Us</span>
            <h2 className="contact-h2">Follow Us on Social Media</h2>
            <p className="contact-sh__p">Stay updated with our latest news, job openings, and company updates.</p>
          </div>

          <div className="contact-social">
            {SOCIAL_LINKS.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social__link"
              >
                <span className="contact-social__icon">{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
