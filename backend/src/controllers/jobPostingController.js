import JobPosting from '../models/JobPosting.js';

// Create a new job posting
export const createJobPosting = async (req, res) => {
  try {
    console.log('📥 Received job posting request:', req.body);
    
    // Add userId and postedBy from authenticated user
    const jobPostingData = {
      ...req.body,
      userId: req.userId,
      postedBy: req.userName || req.body.contactPerson
    };
    
    const jobPosting = new JobPosting(jobPostingData);
    const savedJobPosting = await jobPosting.save();
    console.log('✅ Job posting saved successfully:', savedJobPosting._id);
    
    res.status(201).json({
      success: true,
      message: 'Job posting submitted successfully',
      data: savedJobPosting
    });
  } catch (error) {
    console.error('❌ Error creating job posting:', error);
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating job posting',
      error: error.message
    });
  }
};

// Get all job postings
export const getAllJobPostings = async (req, res) => {
  try {
    const jobPostings = await JobPosting.find().sort({ postedAt: -1 });
    res.json({
      success: true,
      count: jobPostings.length,
      data: jobPostings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching job postings',
      error: error.message
    });
  }
};

// Get a single job posting by ID
export const getJobPostingById = async (req, res) => {
  try {
    const jobPosting = await JobPosting.findById(req.params.id);
    if (!jobPosting) {
      return res.status(404).json({
        success: false,
        message: 'Job posting not found'
      });
    }
    res.json({
      success: true,
      data: jobPosting
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching job posting',
      error: error.message
    });
  }
};
