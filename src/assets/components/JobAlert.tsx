import { useState } from "react";
import "./JobSeekers.css";

interface JobAlertProps {
  onClose?: () => void;
}

export default function JobAlert({ onClose }: JobAlertProps) {
  const [formData, setFormData] = useState({
    email: "",
    frequency: "daily",
    categories: [] as string[],
    locations: [] as string[],
    employmentTypes: [] as string[],
    salaryRange: "",
    experienceLevel: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const JOB_CATEGORIES = ["Manufacturing", "Engineering", "Office Work", "Sales", "Healthcare", "Logistics", "IT/Tech"];
  const LOCATIONS = ["Tokyo", "Osaka", "Nagoya", "Fukuoka", "Sapporo", "Sendai", "All Locations"];
  const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Contract", "Temporary"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field as keyof typeof prev] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      if (onClose) onClose();
      setFormData({
        email: "",
        frequency: "daily",
        categories: [],
        locations: [],
        employmentTypes: [],
        salaryRange: "",
        experienceLevel: ""
      });
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="js-alert-success">
        <div className="js-alert-success__icon">✓</div>
        <h3>Successfully Subscribed!</h3>
        <p>You'll receive job alerts based on your preferences.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="js-alert-form">
      <h3 className="js-alert-form__title">Subscribe to Job Alerts</h3>
      <p className="js-alert-form__desc">Get notified when new jobs match your preferences</p>

      <div className="js-alert-form__group">
        <label htmlFor="alert-email">Email Address *</label>
        <input
          type="email"
          id="alert-email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={formErrors.email ? "js-alert-form__input--error" : ""}
          placeholder="your.email@example.com"
        />
        {formErrors.email && <span className="js-alert-form__error">{formErrors.email}</span>}
      </div>

      <div className="js-alert-form__group">
        <label htmlFor="alert-frequency">Alert Frequency *</label>
        <select
          id="alert-frequency"
          name="frequency"
          value={formData.frequency}
          onChange={handleInputChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="js-alert-form__group">
        <label>Job Categories (Select all that apply)</label>
        <div className="js-alert-form__checkboxes">
          {JOB_CATEGORIES.map(category => (
            <label key={category} className="js-alert-form__checkbox">
              <input
                type="checkbox"
                checked={formData.categories.includes(category)}
                onChange={() => handleCheckboxChange("categories", category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="js-alert-form__group">
        <label>Locations (Select all that apply)</label>
        <div className="js-alert-form__checkboxes">
          {LOCATIONS.map(location => (
            <label key={location} className="js-alert-form__checkbox">
              <input
                type="checkbox"
                checked={formData.locations.includes(location)}
                onChange={() => handleCheckboxChange("locations", location)}
              />
              <span>{location}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="js-alert-form__group">
        <label>Employment Types (Select all that apply)</label>
        <div className="js-alert-form__checkboxes">
          {EMPLOYMENT_TYPES.map(type => (
            <label key={type} className="js-alert-form__checkbox">
              <input
                type="checkbox"
                checked={formData.employmentTypes.includes(type)}
                onChange={() => handleCheckboxChange("employmentTypes", type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="js-alert-form__group">
        <label htmlFor="alert-salary">Salary Range (Optional)</label>
        <select
          id="alert-salary"
          name="salaryRange"
          value={formData.salaryRange}
          onChange={handleInputChange}
        >
          <option value="">Any Salary</option>
          <option value="200000-300000">¥200,000 - ¥300,000</option>
          <option value="300000-400000">¥300,000 - ¥400,000</option>
          <option value="400000-500000">¥400,000 - ¥500,000</option>
          <option value="500000+">¥500,000+</option>
        </select>
      </div>

      <div className="js-alert-form__group">
        <label htmlFor="alert-experience">Experience Level (Optional)</label>
        <select
          id="alert-experience"
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleInputChange}
        >
          <option value="">Any Level</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
        </select>
      </div>

      <div className="js-alert-form__actions">
        {onClose && (
          <button type="button" className="js-btn js-btn--outline" onClick={onClose}>
            Cancel
          </button>
        )}
        <button type="submit" className="js-btn js-btn--primary" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe to Alerts"}
        </button>
      </div>
    </form>
  );
}
