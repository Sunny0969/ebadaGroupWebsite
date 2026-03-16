import mongoose from 'mongoose';

const jobPostingSchema = new mongoose.Schema({
  // User Reference
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  postedBy: {
    type: String,
    required: true,
    trim: true
  },
  // Company Details
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  contactPerson: {
    type: String,
    required: [true, 'Contact person is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  
  // Job Details
  jobTitle: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  jobType: {
    type: String,
    required: [true, 'Job type is required'],
    enum: ['Full-time', 'Part-time', 'Contract', 'Temporary']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    enum: ['Tokyo', 'Osaka', 'Nagoya', 'Fukuoka', 'Sapporo', 'Sendai']
  },
  salary: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    enum: ['Entry Level', 'Mid Level', 'Senior Level', '']
  },
  description: {
    type: String,
    required: [true, 'Job description is required'],
    trim: true
  },
  requirements: {
    type: String,
    trim: true
  },
  timeline: {
    type: String,
    trim: true
  },
  
  // Status and Metadata
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'filled'],
    default: 'pending'
  },
  postedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Adds createdAt and updatedAt automatically
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

export default JobPosting;
