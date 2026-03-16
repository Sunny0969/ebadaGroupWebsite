// Quick test script to verify routes are working
import express from 'express';
import jobPostingRoutes from './src/routes/jobPostingRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/job-postings', jobPostingRoutes);

app.listen(5001, () => {
  console.log('Test server running on port 5001');
  console.log('Test with: curl -X POST http://localhost:5001/api/job-postings -H "Content-Type: application/json" -d \'{"companyName":"Test"}\'');
});
