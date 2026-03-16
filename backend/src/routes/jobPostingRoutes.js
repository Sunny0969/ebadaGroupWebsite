import express from 'express';
import {
  createJobPosting,
  getAllJobPostings,
  getJobPostingById
} from '../controllers/jobPostingController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Create a new job posting (protected - requires authentication)
router.post('/', authenticate, createJobPosting);

// Get all job postings
router.get('/', getAllJobPostings);

// Get a single job posting by ID
router.get('/:id', getJobPostingById);

export default router;
