# Troubleshooting Guide

## Route Not Found Error

If you're getting "Route not found" error, follow these steps:

### 1. Check if Backend Server is Running

```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully!
🚀 Server is running on http://localhost:5000
📋 Registering routes...
✅ Registering /api/test
✅ Registering /api/job-postings
✅ Registering /api/consultations
✅ All routes registered successfully
```

### 2. Verify Server is Accessible

Open browser and go to: http://localhost:5000/

You should see:
```json
{
  "message": "Welcome to Ebada Group Backend API",
  "status": "Server is running successfully!",
  "timestamp": "..."
}
```

### 3. Test API Endpoints

**Test Health Check:**
```bash
curl http://localhost:5000/api/health
```

**Test Job Posting Route:**
```bash
curl -X POST http://localhost:5000/api/job-postings \
  -H "Content-Type: application/json" \
  -d '{"companyName":"Test","contactPerson":"Test","email":"test@test.com","phone":"123","jobTitle":"Test","jobType":"Full-time","location":"Tokyo","description":"Test"}'
```

### 4. Check Frontend API URL

Make sure your frontend `.env` file has:
```
VITE_API_URL=http://localhost:5000
```

Or the frontend will default to `http://localhost:5000`

### 5. Check CORS

If you see CORS errors, make sure:
- Backend has `app.use(cors())` enabled
- Frontend is calling the correct URL

### 6. Check Console Logs

When you submit the form, check:
- **Backend console** - Should show the incoming request
- **Browser console** - Should show any fetch errors
- **Network tab** - Check the actual request URL and response

### 7. Common Issues

**Issue: Port 5000 already in use**
- Solution: Change PORT in `backend/.env` to another port (e.g., 5001)
- Update frontend `.env` with new port

**Issue: MongoDB connection fails**
- Check MongoDB URI in `backend/.env`
- Verify internet connection
- Check MongoDB Atlas IP whitelist

**Issue: Routes not loading**
- Make sure all route files exist
- Check for syntax errors in route files
- Restart the server

### 8. Debug Steps

1. **Check server logs** when submitting form
2. **Check browser Network tab** for the actual request
3. **Verify the request URL** matches the backend route
4. **Check request method** (should be POST)
5. **Check request headers** (should include Content-Type: application/json)

### 9. Test Routes Manually

Use Postman or curl to test:

```bash
# Test job posting
curl -X POST http://localhost:5000/api/job-postings \
  -H "Content-Type: application/json" \
  -d '{
    "companyName": "Test Company",
    "contactPerson": "John Doe",
    "email": "test@example.com",
    "phone": "123-456-7890",
    "jobTitle": "Software Engineer",
    "jobType": "Full-time",
    "location": "Tokyo",
    "description": "Test job description"
  }'
```

If this works, the issue is in the frontend. If not, check backend logs.
