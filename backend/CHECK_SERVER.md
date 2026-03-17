# Check if Server is Running

## Step 1: Verify Backend Server is Running

Open a NEW terminal and run:

```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully!
📋 Registering routes...
✅ Registering /api/job-postings
✅ All routes registered successfully
🚀 Server is running on http://localhost:5000
```

## Step 2: Test the Server

Open browser: http://localhost:5000

Should show:
```json
{
  "message": "Welcome to Ebadah Group Backend API"
}
```

## Step 3: Test the Route Directly

Open browser: http://localhost:5000/api/health

Or use curl:
```bash
curl http://localhost:5000/api/health
```

## Step 4: Test Job Posting Route

Use Postman or curl:

```bash
curl -X POST http://localhost:5000/api/job-postings \
  -H "Content-Type: application/json" \
  -d "{\"companyName\":\"Test\",\"contactPerson\":\"Test\",\"email\":\"test@test.com\",\"phone\":\"123\",\"jobTitle\":\"Test\",\"jobType\":\"Full-time\",\"location\":\"Tokyo\",\"description\":\"Test\"}"
```

## If Route Still Not Found:

1. **Check backend console** - Do you see route registration messages?
2. **Check for import errors** - Any red errors in the console?
3. **Restart the server** - Stop (Ctrl+C) and start again
4. **Check port** - Is something else using port 5000?

## Common Issue: Server Not Running

The error "Route not found" usually means:
- Backend server is NOT running
- OR server is running on a different port
- OR there's an import error preventing routes from loading

**Solution:** Make sure backend server is running BEFORE submitting the form!
