import { useState, useRef } from "react";
import "./ResumeParser.css";

interface ParsedData {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: string;
  education: string;
}

export default function ResumeParser() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf" && !file.type.startsWith("image/")) {
      setError("Please upload a PDF or image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    setError("");
    setIsProcessing(true);
    setParsedData(null);

    // Simulate API call for resume parsing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock parsed data
    setParsedData({
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+81-90-1234-5678",
      skills: ["JavaScript", "React", "TypeScript", "Node.js", "Python"],
      experience: "5 years of software development experience",
      education: "Bachelor's in Computer Science, University of Tokyo"
    });

    setIsProcessing(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && fileInputRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInputRef.current.files = dataTransfer.files;
      handleFileUpload({ target: { files: dataTransfer.files } } as any);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="resume-parser">
      <h3>Resume Parser</h3>
      <p className="resume-parser__description">
        Upload a resume (PDF or image) to automatically extract candidate information
      </p>

      <div
        className="resume-parser__dropzone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {isProcessing ? (
          <div className="resume-parser__processing">
            <div className="resume-parser__spinner"></div>
            <p>Processing resume...</p>
          </div>
        ) : (
          <>
            <div className="resume-parser__icon">📄</div>
            <p className="resume-parser__text">
              Drag and drop your resume here, or click to browse
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,image/*"
              onChange={handleFileUpload}
              className="resume-parser__input"
            />
            <p className="resume-parser__hint">
              Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
            </p>
          </>
        )}
      </div>

      {error && (
        <div className="resume-parser__error">{error}</div>
      )}

      {parsedData && (
        <div className="resume-parser__results">
          <h4>Extracted Information</h4>
          <div className="resume-parser__data">
            <div className="resume-parser__field">
              <label>Name:</label>
              <input type="text" value={parsedData.name} readOnly />
            </div>
            <div className="resume-parser__field">
              <label>Email:</label>
              <input type="email" value={parsedData.email} readOnly />
            </div>
            <div className="resume-parser__field">
              <label>Phone:</label>
              <input type="tel" value={parsedData.phone} readOnly />
            </div>
            <div className="resume-parser__field">
              <label>Skills:</label>
              <div className="resume-parser__skills">
                {parsedData.skills.map((skill, i) => (
                  <span key={i} className="resume-parser__skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="resume-parser__field">
              <label>Experience:</label>
              <textarea value={parsedData.experience} readOnly rows={3} />
            </div>
            <div className="resume-parser__field">
              <label>Education:</label>
              <textarea value={parsedData.education} readOnly rows={2} />
            </div>
          </div>
          <div className="resume-parser__actions">
            <button 
              className="resume-parser__btn resume-parser__btn--primary"
              onClick={() => {
                // Save parsed data to profile
                console.log("Saving to profile:", parsedData);
                alert("Profile information saved successfully!");
              }}
            >
              Save to Profile
            </button>
            <button 
              className="resume-parser__btn resume-parser__btn--secondary"
              onClick={() => {
                // Allow editing of parsed data
                const nameInput = document.querySelector('input[value="' + parsedData?.name + '"]') as HTMLInputElement;
                if (nameInput) {
                  nameInput.readOnly = false;
                  nameInput.focus();
                }
              }}
            >
              Edit Information
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
