import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import JobAlert from "./JobAlert";
import "./JobSeekers.css";

const JOB_CATEGORIES = ["All", "Manufacturing", "Engineering", "Office Work", "Sales", "Healthcare", "Logistics"];
const LOCATIONS = ["All", "Tokyo", "Osaka", "Nagoya", "Fukuoka", "Sapporo", "Sendai"];
const EMPLOYMENT_TYPES = ["All", "Full-time", "Part-time", "Contract", "Temporary"];
const EXPERIENCE_LEVELS = ["All", "Entry Level", "Mid Level", "Senior Level"];

const SAMPLE_JOBS = [
  {
    id: 1,
    title: "Production Line Operator",
    company: "Automotive Manufacturing Co.",
    location: "Tokyo",
    salary: "¥280,000 - ¥320,000/month",
    type: "Full-time",
    experience: "Entry Level",
    category: "Manufacturing",
    icon: "🏭",
    description: "Join our production team in a modern automotive manufacturing facility. No experience required - comprehensive training provided. Stable schedule with opportunities for advancement.",
    tags: ["Training Provided", "Benefits", "Stable Schedule"],
    featured: true,
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Quality Control Inspector",
    company: "Electronics Manufacturer",
    location: "Osaka",
    salary: "¥300,000 - ¥350,000/month",
    type: "Full-time",
    experience: "Mid Level",
    category: "Manufacturing",
    icon: "🔍",
    description: "Ensure product quality standards in our electronics manufacturing facility. Experience in quality control preferred. Day shift with excellent benefits package.",
    tags: ["Quality Control", "Benefits", "Day Shift"],
    featured: false,
    posted: "5 days ago"
  },
  {
    id: 3,
    title: "Mechanical Engineer",
    company: "Industrial Equipment Co.",
    location: "Nagoya",
    salary: "¥450,000 - ¥550,000/month",
    type: "Full-time",
    experience: "Senior Level",
    category: "Engineering",
    icon: "⚙️",
    description: "Design and develop mechanical systems for industrial equipment. Requires 5+ years experience in mechanical engineering. Bilingual (Japanese/English) preferred.",
    tags: ["Engineering", "Bilingual", "Senior"],
    featured: true,
    posted: "1 week ago"
  },
  {
    id: 4,
    title: "Office Administrator",
    company: "Trading Company",
    location: "Tokyo",
    salary: "¥250,000 - ¥300,000/month",
    type: "Full-time",
    experience: "Entry Level",
    category: "Office Work",
    icon: "💼",
    description: "Support office operations including document management, scheduling, and customer service. Japanese language required. Friendly work environment.",
    tags: ["Office Work", "Customer Service", "Japanese"],
    featured: false,
    posted: "3 days ago"
  },
  {
    id: 5,
    title: "Sales Representative",
    company: "Retail Chain",
    location: "Fukuoka",
    salary: "¥220,000 - ¥280,000/month + Commission",
    type: "Full-time",
    experience: "Entry Level",
    category: "Sales",
    icon: "📊",
    description: "Engage with customers and drive sales in our retail locations. Training provided. Commission-based incentives. Flexible scheduling available.",
    tags: ["Sales", "Commission", "Training"],
    featured: false,
    posted: "1 week ago"
  },
  {
    id: 6,
    title: "Care Worker",
    company: "Healthcare Facility",
    location: "Sapporo",
    salary: "¥240,000 - ¥290,000/month",
    type: "Full-time",
    experience: "Entry Level",
    category: "Healthcare",
    icon: "🏥",
    description: "Provide compassionate care to elderly residents. Certification training provided. Rewarding work with excellent benefits. Shift work available.",
    tags: ["Healthcare", "Training", "Benefits"],
    featured: false,
    posted: "4 days ago"
  },
];

export default function JobListings() {
  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
    type: "All",
    experience: "All",
    keyword: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [showJobAlert, setShowJobAlert] = useState(false);

  const filteredJobs = SAMPLE_JOBS.filter(job => {
    if (filters.category !== "All" && job.category !== filters.category) return false;
    if (filters.location !== "All" && job.location !== filters.location) return false;
    if (filters.type !== "All" && job.type !== filters.type) return false;
    if (filters.experience !== "All" && job.experience !== filters.experience) return false;
    if (filters.keyword && !job.title.toLowerCase().includes(filters.keyword.toLowerCase()) && 
        !job.description.toLowerCase().includes(filters.keyword.toLowerCase())) return false;
    return true;
  });

  const handleApply = (jobId: number) => {
    setSelectedJob(jobId);
    setShowModal(true);
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", resume: null, coverLetter: "" });
  };

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

      <section className="js-hero">
        <div className="js-wrap">
          <h1 className="js-h1 js-hero__h1">Find Your Next Opportunity</h1>
          <p className="js-hero__p">Discover thousands of job opportunities across Japan. From manufacturing to office work, find the perfect role for your career.</p>
        </div>
      </section>

      <section className="js-filters">
        <div className="js-wrap">
          <div className="js-filters__grid">
            <div className="js-filter-group">
              <label>Job Category</label>
              <select value={filters.category} onChange={(e) => setFilters({...filters, category: e.target.value})}>
                {JOB_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div className="js-filter-group">
              <label>Location</label>
              <select value={filters.location} onChange={(e) => setFilters({...filters, location: e.target.value})}>
                {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
            <div className="js-filter-group">
              <label>Employment Type</label>
              <select value={filters.type} onChange={(e) => setFilters({...filters, type: e.target.value})}>
                {EMPLOYMENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
            <div className="js-filter-group">
              <label>Experience Level</label>
              <select value={filters.experience} onChange={(e) => setFilters({...filters, experience: e.target.value})}>
                {EXPERIENCE_LEVELS.map(level => <option key={level} value={level}>{level}</option>)}
              </select>
            </div>
            <div className="js-filter-group">
              <label>Keywords</label>
              <input 
                type="text" 
                placeholder="Search jobs..." 
                value={filters.keyword}
                onChange={(e) => setFilters({...filters, keyword: e.target.value})}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="js-jobs">
        <div className="js-wrap">
          <div className="js-jobs__header">
            <div className="js-jobs__count">{filteredJobs.length} Jobs Found</div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
              <button 
                className="js-btn js-btn--outline"
                onClick={() => setShowJobAlert(true)}
                style={{ fontSize: "0.9rem" }}
              >
                📧 Set Job Alerts
              </button>
              <div className="js-jobs__sort">
                <label>Sort by:</label>
                <select>
                  <option>Newest First</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                  <option>Relevance</option>
                </select>
              </div>
            </div>
          </div>

          <div className="js-jobs__grid">
            {filteredJobs.map(job => (
              <div key={job.id} className={`js-job-card ${job.featured ? "js-job-card--featured" : ""}`}>
                {job.featured && <div className="js-job-card__badge">Featured</div>}
                <div className="js-job-card__header">
                  <div className="js-job-card__icon">{job.icon}</div>
                  <div className="js-job-card__info">
                    <h3>{job.title}</h3>
                    <div className="js-job-card__company">{job.company}</div>
                    <div className="js-job-card__meta">
                      <div className="js-job-card__meta-item">📍 {job.location}</div>
                      <div className="js-job-card__meta-item">💰 {job.salary}</div>
                      <div className="js-job-card__meta-item">⏰ {job.type}</div>
                      <div className="js-job-card__meta-item">📅 {job.posted}</div>
                    </div>
                  </div>
                </div>
                <p className="js-job-card__desc">{job.description}</p>
                <div className="js-job-card__tags">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="js-job-card__tag">{tag}</span>
                  ))}
                </div>
                <div className="js-job-card__actions">
                  <button className="js-btn js-btn--primary" onClick={() => handleApply(job.id)}>Apply Now</button>
                  <Link to={`/job-seekers/job/${job.id}`} className="js-btn js-btn--outline">View Details</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="js-pagination">
            <button className="js-pagination__btn">‹ Previous</button>
            <button className="js-pagination__btn js-pagination__btn--active">1</button>
            <button className="js-pagination__btn">2</button>
            <button className="js-pagination__btn">3</button>
            <button className="js-pagination__btn">Next ›</button>
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
                <p className="js-modal__subtitle">{filteredJobs.find(j => j.id === selectedJob)?.title}</p>
                
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

      {showJobAlert && (
        <div className="js-modal" onClick={() => setShowJobAlert(false)}>
          <div className="js-modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="js-modal__close" onClick={() => setShowJobAlert(false)}>×</button>
            <JobAlert onClose={() => setShowJobAlert(false)} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
