import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./News.css";

const EVENTS = [
  {
    id: 1,
    title: "Spring Career Fair 2024",
    date: "2024-04-20",
    time: "10:00 - 17:00",
    location: "Tokyo International Forum",
    description: "Connect with top employers and explore career opportunities. 200+ companies participating. Free admission. Resume review services available.",
    category: "Career Fair",
    registration: "https://example.com/register"
  },
  {
    id: 2,
    title: "HR Excellence Seminar 2024",
    date: "2024-04-15",
    time: "14:00 - 17:00",
    location: "Osaka Business Center",
    description: "Industry leaders discuss the future of workforce management, AI in recruitment, and best practices for employee retention.",
    category: "Seminar",
    registration: "https://example.com/register"
  },
  {
    id: 3,
    title: "Workshop: Building Inclusive Workplaces",
    date: "2024-04-10",
    time: "13:00 - 16:00",
    location: "Nagoya Conference Hall",
    description: "Free workshop for HR professionals on creating inclusive workplaces. Learn best practices for diversity, equity, and inclusion.",
    category: "Workshop",
    registration: "https://example.com/register"
  },
  {
    id: 4,
    title: "Manufacturing Industry Networking Event",
    date: "2024-05-05",
    time: "18:00 - 21:00",
    location: "Fukuoka Business Hotel",
    description: "Networking event for manufacturing professionals. Meet industry peers, share insights, and explore collaboration opportunities.",
    category: "Networking",
    registration: "https://example.com/register"
  },
  {
    id: 5,
    title: "Summer Job Fair - Multiple Locations",
    date: "2024-06-15",
    time: "09:00 - 16:00",
    location: "Tokyo, Osaka, Nagoya",
    description: "Large-scale job fair across three major cities. Hundreds of positions available in manufacturing, engineering, and office work.",
    category: "Career Fair",
    registration: "https://example.com/register"
  }
];

export default function EventsCalendar() {
  const [viewMode, setViewMode] = useState<"calendar" | "list">("list");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showPast, setShowPast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const now = new Date();
  const upcomingEvents = EVENTS.filter(e => {
    const eventDate = new Date(e.date);
    return showPast || eventDate >= now;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = EVENTS.filter(e => {
    const eventDate = new Date(e.date);
    return eventDate < now;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getMonthDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const navigateMonth = (direction: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  const hasEventOnDate = (day: number | null) => {
    if (!day) return false;
    const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return EVENTS.some(e => {
      const eventDate = new Date(e.date);
      return eventDate.toDateString() === checkDate.toDateString();
    });
  };

  const handleRegisterClick = (event: typeof EVENTS[0]) => {
    setSelectedEvent(event);
    setShowModal(true);
    setShowThankYou(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      message: ""
    });
    setFormErrors({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowThankYou(true);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setShowModal(false);
      setShowThankYou(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        message: ""
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
      company: "",
      position: "",
      message: ""
    });
    setFormErrors({});
  };

  return (
    <div className="news">
      <Header />

      <section className="news-hero">
        <div className="news-wrap">
          <h1 className="news-h1 news-hero__h1">Events Calendar</h1>
          <p className="news-hero__p">Join us for career fairs, seminars, workshops, and networking events across Japan.</p>
        </div>
      </section>

      <section className="news-events">
        <div className="news-wrap">
          <div className="news-events__view-toggle">
            <button
              className={`news-events__view-btn ${viewMode === "list" ? "news-events__view-btn--active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              List View
            </button>
            <button
              className={`news-events__view-btn ${viewMode === "calendar" ? "news-events__view-btn--active" : ""}`}
              onClick={() => setViewMode("calendar")}
            >
              Calendar View
            </button>
            <button
              className={`news-events__view-btn ${showPast ? "news-events__view-btn--active" : ""}`}
              onClick={() => setShowPast(!showPast)}
            >
              {showPast ? "Hide Past Events" : "Show Past Events"}
            </button>
          </div>

          {viewMode === "calendar" ? (
            <div className="news-events__calendar">
              <div className="news-events__calendar-header">
                <div className="news-events__calendar-month">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </div>
                <div className="news-events__calendar-nav">
                  <button className="news-events__calendar-nav-btn" onClick={() => navigateMonth(-1)}>‹</button>
                  <button className="news-events__calendar-nav-btn" onClick={() => setCurrentMonth(new Date())}>Today</button>
                  <button className="news-events__calendar-nav-btn" onClick={() => navigateMonth(1)}>›</button>
                </div>
              </div>
              <div className="news-events__calendar-grid">
                {dayNames.map(day => (
                  <div key={day} className="news-events__calendar-day news-events__calendar-day--header">
                    {day}
                  </div>
                ))}
                {getMonthDays().map((day, i) => (
                  <div
                    key={i}
                    className={`news-events__calendar-day ${day === null ? "news-events__calendar-day--other" : ""} ${hasEventOnDate(day) ? "news-events__calendar-day--has-event" : ""}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="news-events__list">
            <h2 className="news-h2" style={{ marginBottom: "2rem" }}>Upcoming Events</h2>
            {upcomingEvents.map(event => (
              <div key={event.id} className="news-event-card">
                <div className="news-event-card__date">
                  <div className="news-event-card__date-box">
                    <div className="news-event-card__date-day">{new Date(event.date).getDate()}</div>
                    <div className="news-event-card__date-month">{monthNames[new Date(event.date).getMonth()].substring(0, 3)}</div>
                  </div>
                  <div className="news-event-card__date-info">
                    <div className="news-event-card__date-time">⏰ {event.time}</div>
                    <div className="news-event-card__date-location">📍 {event.location}</div>
                  </div>
                </div>
                <h3 className="news-event-card__title">{event.title}</h3>
                <p className="news-event-card__desc">{event.description}</p>
                <div className="news-event-card__actions">
                  <button 
                    onClick={() => handleRegisterClick(event)}
                    className="news-btn news-btn--primary"
                  >
                    Register Now
                  </button>
                  <span style={{ 
                    padding: "0.3rem 0.9rem", 
                    borderRadius: "100px", 
                    background: "var(--off)", 
                    color: "var(--txt-2)",
                    fontSize: "0.85rem",
                    fontWeight: 600
                  }}>
                    {event.category}
                  </span>
                </div>
              </div>
            ))}

            {showPast && pastEvents.length > 0 && (
              <>
                <h2 className="news-h2" style={{ marginTop: "4rem", marginBottom: "2rem" }}>Past Events</h2>
                {pastEvents.map(event => (
                  <div key={event.id} className="news-event-card" style={{ opacity: 0.7 }}>
                    <div className="news-event-card__date">
                      <div className="news-event-card__date-box">
                        <div className="news-event-card__date-day">{new Date(event.date).getDate()}</div>
                        <div className="news-event-card__date-month">{monthNames[new Date(event.date).getMonth()].substring(0, 3)}</div>
                      </div>
                      <div className="news-event-card__date-info">
                        <div className="news-event-card__date-time">⏰ {event.time}</div>
                        <div className="news-event-card__date-location">📍 {event.location}</div>
                      </div>
                    </div>
                    <h3 className="news-event-card__title">{event.title}</h3>
                    <p className="news-event-card__desc">{event.description}</p>
                    <div style={{ 
                      padding: "0.3rem 0.9rem", 
                      borderRadius: "100px", 
                      background: "var(--off)", 
                      color: "var(--txt-2)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      display: "inline-block"
                    }}>
                      {event.category} • Past Event
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showModal && selectedEvent && (
        <div className="news-modal-overlay" onClick={closeModal}>
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>
            {!showThankYou ? (
              <>
                <div className="news-modal__header">
                  <h2 className="news-h2">Event Registration</h2>
                  <button className="news-modal__close" onClick={closeModal}>×</button>
                </div>
                <div className="news-modal__event-info">
                  <h3 className="news-h3">{selectedEvent.title}</h3>
                  <p style={{ color: "var(--txt-2)", marginBottom: "0.5rem" }}>
                    📅 {formatDate(selectedEvent.date)} • ⏰ {selectedEvent.time}
                  </p>
                  <p style={{ color: "var(--txt-2)" }}>
                    📍 {selectedEvent.location}
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="news-modal__form">
                  <div className="news-modal__form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={formErrors.name ? "news-modal__input--error" : ""}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && <span className="news-modal__error">{formErrors.name}</span>}
                  </div>
                  <div className="news-modal__form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? "news-modal__input--error" : ""}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && <span className="news-modal__error">{formErrors.email}</span>}
                  </div>
                  <div className="news-modal__form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={formErrors.phone ? "news-modal__input--error" : ""}
                      placeholder="090-1234-5678"
                    />
                    {formErrors.phone && <span className="news-modal__error">{formErrors.phone}</span>}
                  </div>
                  <div className="news-modal__form-group">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="news-modal__form-group">
                    <label htmlFor="position">Position / Title</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Your position"
                    />
                  </div>
                  <div className="news-modal__form-group">
                    <label htmlFor="message">Additional Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Any special requirements or questions..."
                    />
                  </div>
                  <div className="news-modal__form-actions">
                    <button type="button" className="news-btn news-btn--outline" onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className="news-btn news-btn--primary" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Registration"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="news-modal__thankyou">
                <div className="news-modal__thankyou-icon">✓</div>
                <h2 className="news-h2">Thank You!</h2>
                <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
                  Your registration for <strong>{selectedEvent.title}</strong> has been submitted successfully.
                </p>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem" }}>
                  We will send you a confirmation email shortly with event details and instructions.
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
