import { useState, useEffect, useRef } from "react";
import "./Contact.css";

const BUSINESS_HOURS = {
  start: 9,
  end: 18,
  days: [1, 2, 3, 4, 5] // Monday to Friday
};

const QUICK_RESPONSES = [
  { question: "What are your business hours?", answer: "Our business hours are Monday to Friday, 9:00 AM - 6:00 PM JST." },
  { question: "How do I apply for a job?", answer: "You can browse job listings and click 'Apply Now' on any job posting. You'll need to fill out an application form with your details and resume." },
  { question: "Do you provide training?", answer: "Yes! Many of our positions include comprehensive training programs, especially for entry-level positions." },
  { question: "What documents do I need?", answer: "Typically, you'll need a resume/CV, cover letter, and sometimes educational certificates or work permits." },
  { question: "How long does the application process take?", answer: "Our team usually reviews applications within 5-7 business days. You'll receive an email notification once your application is reviewed." },
];

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "bot"; timestamp: Date }>>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const isBusinessHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return BUSINESS_HOURS.days.includes(day) && hour >= BUSINESS_HOURS.start && hour < BUSINESS_HOURS.end;
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      const welcomeMsg = isBusinessHours()
        ? "Hello! Welcome to CDP Japan. How can I help you today? Our team is available during business hours (Mon-Fri, 9 AM - 6 PM JST)."
        : "Hello! Welcome to CDP Japan. Our chat support is currently offline. Business hours are Monday to Friday, 9:00 AM - 6:00 PM JST. Please leave a message and we'll get back to you!";
      setMessages([{ text: welcomeMsg, sender: "bot", timestamp: new Date() }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: "user" as const, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const quickResponse = QUICK_RESPONSES.find(qr => 
        inputValue.toLowerCase().includes(qr.question.toLowerCase().split(" ")[0])
      );
      
      let botResponse = "";
      if (quickResponse) {
        botResponse = quickResponse.answer;
      } else if (isBusinessHours()) {
        botResponse = "Thank you for your message. One of our team members will respond shortly. In the meantime, you can check our FAQ section or browse our job listings.";
      } else {
        botResponse = "Thank you for your message. We're currently offline, but we'll respond to your inquiry as soon as we're back in the office. You can also email us at info@cdpjp.com.";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: "bot", timestamp: new Date() }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {!isOpen && (
        <button
          className="live-chat__button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <span className="live-chat__button-icon">💬</span>
          <span className="live-chat__button-text">Chat with us</span>
        </button>
      )}

      {isOpen && (
        <div className="live-chat" ref={chatContainerRef}>
          <div className="live-chat__header">
            <div className="live-chat__header-info">
              <div className="live-chat__status">
                <span className={`live-chat__status-dot ${isBusinessHours() ? "live-chat__status-dot--online" : ""}`}></span>
                <span>{isBusinessHours() ? "Online" : "Offline"}</span>
              </div>
              <div className="live-chat__title">CDP Japan Support</div>
            </div>
            <button
              className="live-chat__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="live-chat__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`live-chat__message live-chat__message--${msg.sender}`}>
                <div className="live-chat__message-content">{msg.text}</div>
                <div className="live-chat__message-time">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="live-chat__message live-chat__message--bot">
                <div className="live-chat__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="live-chat__quick-responses">
            <div className="live-chat__quick-title">Quick Questions:</div>
            <div className="live-chat__quick-buttons">
              {QUICK_RESPONSES.slice(0, 3).map((qr, i) => (
                <button
                  key={i}
                  className="live-chat__quick-btn"
                  onClick={() => {
                    setInputValue(qr.question);
                    handleSendMessage({ preventDefault: () => {} } as React.FormEvent);
                  }}
                >
                  {qr.question}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="live-chat__input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="live-chat__input"
            />
            <button type="submit" className="live-chat__send" disabled={!inputValue.trim()}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
