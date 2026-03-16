import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import JobAlert from "./JobAlert";
import "./JobSeekers.css";

const JOB_CATEGORIES = ["All", "Manufacturing", "Engineering", "Outsourcing", "Logistics", "Foreign National Support", "Re-employment"];
const LOCATIONS = ["All", "Utsunomiya", "Tokyo", "Osaka", "Nagoya", "Saitama", "Sendai", "Fukuoka", "Kanazawa"];
const EMPLOYMENT_TYPES = ["All", "Dispatch (派遣)", "Direct Hire", "Outsourcing Contract", "Part-time"];
const EXPERIENCE_LEVELS = ["All", "No Experience OK", "Some Experience", "Experienced"];

const SAMPLE_JOBS = [
  {
    id: 1,
    title: "Production Line Operator — Automotive Parts",
    company: "Major Automotive Supplier (Tochigi Plant)",
    location: "Utsunomiya",
    salary: "¥1,350 - ¥1,500 / hour",
    type: "Dispatch (派遣)",
    experience: "No Experience OK",
    category: "Manufacturing",
    icon: "🏭",
    description:
      "Work on the assembly and inspection line at a major automotive parts factory in Utsunomiya. Full training provided from day one. Stable long-term dispatch with opportunities to renew. Housing support available for those relocating.",
    tags: ["No Experience OK", "Training Provided", "Housing Support", "Stable Long-term"],
    featured: true,
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Electronic Component Assembly Worker",
    company: "Major Electronics Manufacturer (Tochigi)",
    location: "Utsunomiya",
    salary: "¥1,300 - ¥1,450 / hour",
    type: "Dispatch (派遣)",
    experience: "No Experience OK",
    category: "Manufacturing",
    icon: "⚡",
    description:
      "Assemble and visually inspect electronic components on a clean-room production line. Shift work available (day/night). Provided uniform, locker facilities, and cafeteria. Short commute from Utsunomiya Station.",
    tags: ["Clean Room", "Shift Work", "Uniform Provided", "Canteen Available"],
    featured: false,
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Quality Control Inspector — Precision Parts",
    company: "Precision Manufacturing Co. (Oyama Plant)",
    location: "Utsunomiya",
    salary: "¥1,450 - ¥1,650 / hour",
    type: "Dispatch (派遣)",
    experience: "Some Experience",
    category: "Manufacturing",
    icon: "🔍",
    description:
      "Perform dimensional inspection and visual quality checks on precision metal parts. Experience with measuring instruments (calipers, micrometers) preferred. Day shift. Overtime available.",
    tags: ["QC Experience Preferred", "Day Shift", "Overtime Available", "Measuring Tools"],
    featured: false,
    posted: "5 days ago",
  },
  {
    id: 4,
    title: "Mechanical Design Engineer (CAD)",
    company: "Industrial Equipment Manufacturer",
    location: "Nagoya",
    salary: "¥280,000 - ¥400,000 / month",
    type: "Dispatch (派遣)",
    experience: "Experienced",
    category: "Engineering",
    icon: "⚙️",
    description:
      "Design and draft mechanical components using CAD software (SolidWorks or AutoCAD). Minimum 3 years experience in mechanical design required. Coordinate with production and QA teams. Possibility of direct hire after dispatch period.",
    tags: ["CAD Required", "3+ Years Exp", "Direct Hire Path", "Nagoya"],
    featured: true,
    posted: "1 week ago",
  },
  {
    id: 5,
    title: "Electrical / Equipment Maintenance Engineer",
    company: "Food Processing Plant (Tochigi)",
    location: "Utsunomiya",
    salary: "¥260,000 - ¥360,000 / month",
    type: "Dispatch (派遣)",
    experience: "Some Experience",
    category: "Engineering",
    icon: "🔧",
    description:
      "Maintain and repair electrical equipment and production machinery at a food processing facility. Basic electrical knowledge required; experience with PLCs is a plus. Housing allowance provided.",
    tags: ["Electrical Maintenance", "PLC a Plus", "Housing Allowance", "Tochigi"],
    featured: false,
    posted: "4 days ago",
  },
  {
    id: 6,
    title: "Factory Outsourcing Staff — Packing & Shipping",
    company: "Logistics & Distribution Center (Saitama)",
    location: "Saitama",
    salary: "¥1,200 - ¥1,350 / hour",
    type: "Outsourcing Contract",
    experience: "No Experience OK",
    category: "Outsourcing",
    icon: "📦",
    description:
      "Pick, pack, and ship products at a major distribution center near Saitama. Work in teams managed by Ebada Group Japan. Light physical work. Weekly pay option available. No Japanese language required for this position.",
    tags: ["No Japanese Needed", "Weekly Pay", "Light Work", "Team Environment"],
    featured: false,
    posted: "2 days ago",
  },
  {
    id: 7,
    title: "Warehouse Forklift Operator",
    company: "Distribution Warehouse (Sendai)",
    location: "Sendai",
    salary: "¥1,400 - ¥1,600 / hour",
    type: "Dispatch (派遣)",
    experience: "Some Experience",
    category: "Logistics",
    icon: "🚛",
    description:
      "Operate forklifts for loading, unloading, and organising goods in a large distribution warehouse. Valid forklift license required. Day shift. Allowances for license and transport provided.",
    tags: ["Forklift License Required", "Day Shift", "Transport Allowance", "Sendai"],
    featured: false,
    posted: "6 days ago",
  },
  {
    id: 8,
    title: "Manufacturing Staff — Foreign National Welcome (Vietnamese / Indonesian)",
    company: "Automotive Parts Plant (Utsunomiya)",
    location: "Utsunomiya",
    salary: "¥1,300 - ¥1,500 / hour",
    type: "Dispatch (派遣)",
    experience: "No Experience OK",
    category: "Foreign National Support",
    icon: "🌏",
    description:
      "Full support for foreign national workers joining our manufacturing dispatch program. Vietnamese and Indonesian-speaking staff coordinators on-site. Company housing available. Visa procedure support, health insurance, and pension enrollment handled by Ebada Group Japan.",
    tags: ["Foreign National OK", "Company Housing", "Visa Support", "Bilingual Coordinator"],
    featured: true,
    posted: "1 day ago",
  },
  {
    id: 9,
    title: "Assembly Line Worker — Food Manufacturing",
    company: "Food Processing Company (Kanazawa)",
    location: "Kanazawa",
    salary: "¥1,250 - ¥1,400 / hour",
    type: "Dispatch (派遣)",
    experience: "No Experience OK",
    category: "Manufacturing",
    icon: "🍱",
    description:
      "Join the production line at a well-established food processing company in Kanazawa. Tasks include sorting, packaging, and labelling food products. Hygienic work environment. Female-friendly workplace with flexible shift options.",
    tags: ["Female-Friendly", "Flexible Shifts", "No Experience OK", "Food Industry"],
    featured: false,
    posted: "3 days ago",
  },
  {
    id: 10,
    title: "Re-employment Support — Production Supervisor Candidate",
    company: "Ebada Group Japan — Re-employment Program",
    location: "Utsunomiya",
    salary: "¥220,000 - ¥300,000 / month",
    type: "Direct Hire",
    experience: "Experienced",
    category: "Re-employment",
    icon: "🔄",
    description:
      "This position is part of our Re-employment Support Program for workers aged 40–65 who wish to re-enter Japan's manufacturing workforce. We match your previous skills and experience to the right client, provide skills refresher training, and support your return to stable, long-term employment.",
    tags: ["Re-employment Program", "Skills Training", "Age 40–65 Welcome", "Stable Employment"],
    featured: false,
    posted: "1 week ago",
  },
  {
    id: 11,
    title: "CNC Machine Operator",
    company: "Precision Metal Processing Plant (Oyama)",
    location: "Utsunomiya",
    salary: "¥1,500 - ¥1,750 / hour",
    type: "Dispatch (派遣)",
    experience: "Experienced",
    category: "Manufacturing",
    icon: "🏗️",
    description:
      "Operate CNC lathes and machining centres to produce precision metal parts for automotive and industrial clients. Minimum 2 years CNC operation experience required. Second-class skilled worker certification preferred. Overtime and weekend work available.",
    tags: ["CNC Experience Required", "2+ Years", "Certification Preferred", "High Hourly Rate"],
    featured: false,
    posted: "5 days ago",
  },
  {
    id: 12,
    title: "Office Outsourcing Staff — Data Entry & Document Processing",
    company: "Corporate Client (Tokyo / Remote Hybrid)",
    location: "Tokyo",
    salary: "¥1,100 - ¥1,300 / hour",
    type: "Outsourcing Contract",
    experience: "No Experience OK",
    category: "Outsourcing",
    icon: "💼",
    description:
      "Handle data entry, document digitisation, and administrative support tasks for a corporate client under Ebada Group Japan's business outsourcing division. Basic PC skills required (Word / Excel). Work from Tokyo office with partial remote option after training period.",
    tags: ["Office Work", "Remote Option", "PC Skills Required", "Tokyo"],
    featured: false,
    posted: "4 days ago",
  },
];

export default function JobListings() {
  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
    type: "All",
    experience: "All",
    keyword: "",
  });
  const [showModal, setShowModal]       = useState(false);
  const [selectedJob, setSelectedJob]   = useState<number | null>(null);
  const [formData, setFormData]         = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const [submitted, setSubmitted]       = useState(false);
  const [showJobAlert, setShowJobAlert] = useState(false);
  const [currentPage, setCurrentPage]   = useState(1);
  const totalPages = 3;

  const filteredJobs = SAMPLE_JOBS.filter((job) => {
    if (filters.category   !== "All" && job.category   !== filters.category)   return false;
    if (filters.location   !== "All" && job.location   !== filters.location)   return false;
    if (filters.type       !== "All" && job.type       !== filters.type)       return false;
    if (filters.experience !== "All" && job.experience !== filters.experience) return false;
    if (
      filters.keyword &&
      !job.title.toLowerCase().includes(filters.keyword.toLowerCase()) &&
      !job.description.toLowerCase().includes(filters.keyword.toLowerCase())
    )
      return false;
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

      {/* ── HERO ── */}
      <section className="js-hero">
        <div className="js-wrap">
          <h1 className="js-h1 js-hero__h1">Find Your Next Opportunity in Japan</h1>
          <p className="js-hero__p">
            Browse manufacturing dispatch, engineer dispatch, outsourcing, and direct hire positions
            across Japan — all supported by Ebada Group Japan's dedicated HR coordinators.
          </p>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="js-filters">
        <div className="js-wrap">
          <div className="js-filters__grid">
            <div className="js-filter-group">
              <label>Job Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                {JOB_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="js-filter-group">
              <label>Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div className="js-filter-group">
              <label>Employment Type</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                {EMPLOYMENT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="js-filter-group">
              <label>Experience Level</label>
              <select
                value={filters.experience}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              >
                {EXPERIENCE_LEVELS.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div className="js-filter-group">
              <label>Keywords</label>
              <input
                type="text"
                placeholder="e.g. CNC, assembly, forklift..."
                value={filters.keyword}
                onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── JOB LISTINGS ── */}
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
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`js-job-card ${job.featured ? "js-job-card--featured" : ""}`}
              >
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
                  <button
                    className="js-btn js-btn--primary"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply Now
                  </button>
                  <Link
                    to={`/job-seekers/job/${job.id}`}
                    className="js-btn js-btn--outline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="js-pagination">
            <button
              className="js-pagination__btn"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ‹ Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`js-pagination__btn ${currentPage === page ? "js-pagination__btn--active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="js-pagination__btn"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next ›
            </button>
          </div>
        </div>
      </section>

      {/* ── APPLY MODAL ── */}
      {showModal && (
        <div className="js-modal" onClick={() => setShowModal(false)}>
          <div className="js-modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="js-modal__close" onClick={() => setShowModal(false)}>✕</button>

            {!submitted ? (
              <>
                <h2 className="js-modal__title">Apply for Position</h2>
                <p className="js-modal__subtitle">
                  {filteredJobs.find((j) => j.id === selectedJob)?.title}
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="js-form-group">
                    <label>Full Name <span className="js-form-group__required">*</span></label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="js-form-group__row">
                    <div className="js-form-group">
                      <label>Email <span className="js-form-group__required">*</span></label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="js-form-group">
                      <label>Phone <span className="js-form-group__required">*</span></label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="js-form-group">
                    <label>Resume / CV <span className="js-form-group__required">*</span></label>
                    <div className="js-form-group__file">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                      />
                      <div className="js-form-group__file-label">
                        <span>📄</span>
                        <span>
                          {formData.resume ? formData.resume.name : "Choose file or drag here"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="js-form-group">
                    <label>Cover Letter / Message</label>
                    <textarea
                      placeholder="Tell us about your experience and why you're interested in this position..."
                      value={formData.coverLetter}
                      onChange={(e) =>
                        setFormData({ ...formData, coverLetter: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="js-btn js-btn--primary"
                    style={{ width: "100%" }}
                  >
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <div className="js-thank-you">
                <div className="js-thank-you__icon">✅</div>
                <h2 className="js-thank-you__title">Application Submitted!</h2>
                <p className="js-thank-you__message">
                  Thank you for applying. An Ebada Group Japan HR coordinator will review your
                  application and contact you within 3–5 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── JOB ALERT MODAL ── */}
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