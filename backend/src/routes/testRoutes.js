import express from 'express';
import { testConnection } from '../controllers/testController.js';

const router = express.Router();

// Test route to check database connection
router.get('/db', testConnection);

export default router;
