# 🚀 How to Start Backend Server - COMPLETE GUIDE

## ⚠️ IMPORTANT: Backend Server MUST be Running!

The "Route not found" error means the backend server is NOT running. Follow these steps:

## Step 1: Open a NEW Terminal Window

**Don't close your frontend terminal!** Open a **NEW** terminal window.

## Step 2: Navigate to Backend Folder

```bash
cd backend
```

## Step 3: Install Dependencies (First Time Only)

```bash
npm install
```

## Step 4: Start the Backend Server

```bash
npm run dev
```

## Step 5: Verify Server is Running

You should see:
```
✅ MongoDB Connected Successfully!
📋 Registering routes...
✅ Registering /api/job-postings
✅ All routes registered successfully
🚀 Server is running on http://localhost:5000
```

## Step 6: Test the Server

Open browser: **http://localhost:5000**

Should show:
```json
{
  "message": "Welcome to Ebadah Group Backend API",
  "status": "Server is running successfully!"
}
```

## Step 7: Now Submit Your Form

**Keep the backend server running** and go back to your frontend. Now submit the form - it should work!

---

## 🎯 Quick Start (Windows)

Double-click: `backend/start-server.bat`

---

## 🎯 Quick Start (Mac/Linux)

```bash
cd backend
chmod +x start-server.sh
./start-server.sh
```

---

## ✅ Verification Checklist

- [ ] Backend server terminal shows "Server is running on http://localhost:5000"
- [ ] Browser shows welcome message at http://localhost:5000
- [ ] MongoDB connection shows "Connected Successfully"
- [ ] Routes show "registered successfully"
- [ ] Frontend form can now submit successfully

---

## ❌ Common Mistakes

1. **Not starting backend server** - Most common issue!
2. **Closing backend terminal** - Server stops when terminal closes
3. **Wrong port** - Make sure it's port 5000
4. **MongoDB not connected** - Check internet connection

---

## 🔧 If Still Not Working

1. Check backend console for errors
2. Verify MongoDB URI in `backend/.env`
3. Make sure port 5000 is not used by another app
4. Restart the backend server

---

## 📝 Remember

**ALWAYS start backend server BEFORE submitting forms!**

The backend server must be running in a separate terminal window while you use the frontend.
