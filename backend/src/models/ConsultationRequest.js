import mongoose from 'mongoose';

const consultationRequestSchema = new mongoose.Schema({
  // Company Information
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
  
  // Hiring Needs
  industry: {
    type: String,
    required: [true, 'Industry is required'],
    enum: ['Automotive', 'Electronics', 'Manufacturing', 'Construction', 'Healthcare', 'Technology', 'Other']
  },
  hiringNeeds: {
    type: String,
    required: [true, 'Hiring needs description is required'],
    trim: true
  },
  urgency: {
    type: String,
    enum: ['Immediate', 'Urgent', 'Moderate', 'Planning', '']
  },
  contactMethod: {
    type: String,
    enum: ['Email', 'Phone', 'Video Call', 'In-Person', '']
  },
  
  // Status and Metadata
  status: {
    type: String,
    enum: ['pending', 'contacted', 'in-progress', 'completed'],
    default: 'pending'
  },
  requestedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Adds createdAt and updatedAt automatically
});

const ConsultationRequest = mongoose.model('ConsultationRequest', consultationRequestSchema);

export default ConsultationRequest;
