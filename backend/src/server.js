import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/database.js';

// Load environment variables
// Try to load from backend folder first, then root
dotenv.config({ path: './.env' });
if (!process.env.MONGODB_URI) {
  dotenv.config({ path: '../.env' });
}

// Import routes
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import jobPostingRoutes from './routes/jobPostingRoutes.js';
import consultationRoutes from './routes/consultationRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Log route registration
console.log('📋 Registering routes...');

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5175', 'http://localhost:3000'],
  credentials: true
})); // Enable CORS for frontend
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Request logging middleware (before routes)
app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`📥 ${req.method} ${req.originalUrl}`);
  }
  next();
});

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Ebadah Group Backend API',
    status: 'Server is running successfully!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// API Routes - Register with error handling
try {
  console.log('✅ Registering /api/auth');
  app.use('/api/auth', authRoutes);
  console.log('   ✓ Auth routes loaded');

  console.log('✅ Registering /api/test');
  app.use('/api/test', testRoutes);
  console.log('   ✓ Test routes loaded');

  console.log('✅ Registering /api/job-postings');
  app.use('/api/job-postings', jobPostingRoutes);
  console.log('   ✓ Job posting routes loaded');

  console.log('✅ Registering /api/consultations');
  app.use('/api/consultations', consultationRoutes);
  console.log('   ✓ Consultation routes loaded');

  console.log('✅ All routes registered successfully');
  console.log('📝 Available endpoints:');
  console.log('   - POST /api/auth/register');
  console.log('   - POST /api/auth/login');
  console.log('   - GET  /api/auth/me');
  console.log('   - POST /api/job-postings (protected)');
  console.log('   - GET  /api/job-postings');
  console.log('   - POST /api/consultations');
  console.log('   - GET  /api/consultations');
} catch (error) {
  console.error('❌ Error registering routes:', error);
  console.error('Stack:', error.stack);
}

// Error handling middleware (must be after routes, 4 parameters = error handler)
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
  });
});

// 404 handler - must be absolutely last, after all routes
// Use a function that matches all routes not handled above
app.use((req, res, next) => {
  console.log(`❌ 404 - Route not found: ${req.method} ${req.originalUrl}`);
  console.log(`Available routes: /api/job-postings, /api/consultations, /api/test`);
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl,
    method: req.method,
    hint: 'Make sure the backend server is running and routes are registered'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});
