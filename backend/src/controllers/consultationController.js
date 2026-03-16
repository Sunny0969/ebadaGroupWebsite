import ConsultationRequest from '../models/ConsultationRequest.js';

// Create a new consultation request
export const createConsultationRequest = async (req, res) => {
  try {
    const consultationRequest = new ConsultationRequest(req.body);
    const savedRequest = await consultationRequest.save();
    
    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      data: savedRequest
    });
  } catch (error) {
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
      message: 'Error creating consultation request',
      error: error.message
    });
  }
};

// Get all consultation requests
export const getAllConsultationRequests = async (req, res) => {
  try {
    const requests = await ConsultationRequest.find().sort({ requestedAt: -1 });
    res.json({
      success: true,
      count: requests.length,
      data: requests
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching consultation requests',
      error: error.message
    });
  }
};

// Get a single consultation request by ID
export const getConsultationRequestById = async (req, res) => {
  try {
    const request = await ConsultationRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Consultation request not found'
      });
    }
    res.json({
      success: true,
      data: request
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching consultation request',
      error: error.message
    });
  }
};
