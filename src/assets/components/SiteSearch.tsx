import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SiteSearch.css";

interface SearchResult {
  title: string;
  url: string;
  category: string;
  description?: string;
}

const SEARCH_DATA: SearchResult[] = [
  // About
  { title: "Company Overview", url: "/about/overview", category: "About Us" },
  { title: "CEO Message", url: "/about/ceo", category: "About Us" },
  { title: "Philosophy", url: "/about/philosophy", category: "About Us" },
  { title: "History", url: "/about/history", category: "About Us" },
  { title: "Branch Locations", url: "/about/locations", category: "About Us" },
  // Services
  { title: "Manufacturing Dispatch", url: "/services/manufacturing", category: "Services" },
  { title: "Recruitment", url: "/services/recruitment", category: "Services" },
  { title: "Business Outsourcing", url: "/services/outsourcing", category: "Services" },
  { title: "Engineer Dispatch", url: "/services/engineer", category: "Services" },
  { title: "Foreign Employment", url: "/services/foreign", category: "Services" },
  { title: "Re-employment Support", url: "/services/reemployment", category: "Services" },
  // Job Seekers
  { title: "Job Listings", url: "/job-seekers/listings", category: "For Job Seekers" },
  { title: "How to Apply", url: "/job-seekers/how-to-apply", category: "For Job Seekers" },
  { title: "Career Resources", url: "/job-seekers/resources", category: "For Job Seekers" },
  { title: "Register", url: "/job-seekers/register", category: "For Job Seekers" },
  // Employers
  { title: "Services Overview", url: "/employers/services", category: "For Employers" },
  { title: "Post a Job", url: "/employers/post-job", category: "For Employers" },
  { title: "Resources", url: "/employers/resources", category: "For Employers" },
  { title: "Client Portal", url: "/employers/portal", category: "For Employers" },
  // Other
  { title: "Contact Us", url: "/contact", category: "Contact" },
  { title: "FAQ", url: "/faq", category: "Support" },
  { title: "Support", url: "/support", category: "Support" },
  { title: "News & Events", url: "/news", category: "News" },
  { title: "Careers", url: "/careers/join", category: "Careers" },
];

interface SiteSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteSearch({ isOpen, onClose }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const searchQuery = query.toLowerCase().trim();
    
    const filtered = SEARCH_DATA.filter(item => 
      item.title.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery)
    );

    setTimeout(() => {
      setResults(filtered.slice(0, 8));
      setIsSearching(false);
    }, 200);
  }, [query]);

  const handleResultClick = (url: string) => {
    navigate(url);
    onClose();
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="site-search-overlay" onClick={onClose}>
      <div className="site-search" onClick={(e) => e.stopPropagation()}>
        <div className="site-search__header">
          <div className="site-search__input-wrapper">
            <svg className="site-search__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="site-search__input"
              placeholder="Search for pages, services, jobs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <button
                className="site-search__clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
          <button className="site-search__close" onClick={onClose} aria-label="Close search">
            ESC
          </button>
        </div>

        <div className="site-search__results">
          {isSearching ? (
            <div className="site-search__loading">Searching...</div>
          ) : query.trim().length === 0 ? (
            <div className="site-search__empty">
              <p>Start typing to search...</p>
              <div className="site-search__suggestions">
                <span className="site-search__suggestion-label">Popular searches:</span>
                <button onClick={() => setQuery("jobs")}>Jobs</button>
                <button onClick={() => setQuery("services")}>Services</button>
                <button onClick={() => setQuery("contact")}>Contact</button>
                <button onClick={() => setQuery("faq")}>FAQ</button>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="site-search__empty">
              <p>No results found for "{query}"</p>
              <p style={{ fontSize: "0.9rem", color: "var(--txt-2)" }}>Try different keywords</p>
            </div>
          ) : (
            <div className="site-search__results-list">
              {results.map((result, index) => (
                <button
                  key={index}
                  className="site-search__result-item"
                  onClick={() => handleResultClick(result.url)}
                >
                  <div className="site-search__result-content">
                    <div className="site-search__result-title">{result.title}</div>
                    <div className="site-search__result-category">{result.category}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
