# 🔧 Fix "Failed to fetch" Error During Registration

## ⚠️ Main Issue: Backend Server Not Running

"Failed to fetch" error means the frontend cannot connect to the backend server.

## ✅ Solution Steps:

### Step 1: Check if Backend Server is Running

Open a **NEW terminal window** and run:

```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully!
✅ Registering /api/auth
   ✓ Auth routes loaded
✅ All routes registered successfully
🚀 Server is running on http://localhost:5000
```

### Step 2: Verify Server is Accessible

Open browser: **http://localhost:5000**

Should show:
```json
{
  "message": "Welcome to Ebada Group Backend API"
}
```

### Step 3: Test Registration Endpoint

Open browser: **http://localhost:5000/api/auth/register**

Should show a method not allowed error (this is normal - it means the route exists)

### Step 4: Check Browser Console

When you try to register, open browser console (F12) and check:
- Network tab - See if request is being sent
- Console tab - Check for error messages
- Look for: `📤 Registering user:` message

### Step 5: Check Backend Console

When you submit registration form, backend console should show:
```
📥 POST /api/auth/register
📥 Received registration request
📦 Request body: {...}
✅ User registered successfully: user@example.com
```

## 🔍 Common Issues:

### Issue 1: Backend Server Not Running
**Solution:** Start backend server first!

### Issue 2: Port Mismatch
**Check:** Frontend is calling `http://localhost:5000`
**Solution:** Make sure backend is running on port 5000

### Issue 3: CORS Error
**Check:** Browser console shows CORS error
**Solution:** Backend CORS is configured, but make sure backend is running

### Issue 4: Network Error
**Check:** Browser console shows "Failed to fetch"
**Solution:** 
1. Backend server must be running
2. Check firewall/antivirus
3. Try accessing http://localhost:5000 directly

## 🎯 Quick Test:

1. **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Test in Browser:**
   - Go to: http://localhost:5000/api/health
   - Should show database status

3. **Try Registration:**
   - Go to: http://localhost:5173/employers/portal
   - Click "Register Now"
   - Fill form and submit
   - Check browser console for logs
   - Check backend console for logs

## 📝 Debug Checklist:

- [ ] Backend server is running
- [ ] Backend shows "Server is running on http://localhost:5000"
- [ ] http://localhost:5000 loads in browser
- [ ] Browser console shows API call being made
- [ ] Backend console shows incoming request
- [ ] No CORS errors in browser console
- [ ] Network tab shows request status

## 🚨 If Still Not Working:

1. **Check Backend Logs:**
   - Look for any red error messages
   - Check if MongoDB is connected
   - Verify routes are registered

2. **Check Frontend Logs:**
   - Browser console (F12)
   - Network tab - see the actual request
   - Check request URL and status

3. **Verify Dependencies:**
   ```bash
   cd backend
   npm install
   ```

4. **Restart Everything:**
   - Stop backend (Ctrl+C)
   - Restart backend
   - Refresh frontend page
   - Try registration again
