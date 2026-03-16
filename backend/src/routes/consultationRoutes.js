import express from 'express';
import {
  createConsultationRequest,
  getAllConsultationRequests,
  getConsultationRequestById
} from '../controllers/consultationController.js';

const router = express.Router();

// Create a new consultation request
router.post('/', createConsultationRequest);

// Get all consultation requests
router.get('/', getAllConsultationRequests);

// Get a single consultation request by ID
router.get('/:id', getConsultationRequestById);

export default router;
