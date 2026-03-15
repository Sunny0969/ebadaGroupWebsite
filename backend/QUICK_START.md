# 🚀 Quick Start Guide - Backend Server

## Step-by-Step Instructions

### 1️⃣ Navigate to Backend Folder
```bash
cd backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

This will install:
- Express (web framework)
- Mongoose (MongoDB driver)
- CORS (for frontend communication)
- dotenv (for environment variables)
- nodemon (for auto-reload in development)

### 3️⃣ Check .env File
Make sure `backend/.env` file exists with:
```
PORT=5000
MONGODB_URI=mongodb+srv://sunnypirkash_db_user:5pDBUbftLhhElB36@cluster0.tjgrsmc.mongodb.net/?appName=Cluster0
```

### 4️⃣ Start the Server

**Option A: Development Mode (with auto-reload)**
```bash
npm run dev
```

**Option B: Production Mode**
```bash
npm start
```

### 5️⃣ Test the Server

Open your browser or use Postman/curl:

1. **Home Page**: http://localhost:5000/
2. **Health Check**: http://localhost:5000/api/health
3. **Database Test**: http://localhost:5000/api/test/db

### ✅ Expected Output

When server starts successfully, you should see:
```
✅ MongoDB Connected Successfully!
📊 Database: [your database name]
🌐 Host: cluster0.tjgrsmc.mongodb.net
🚀 Server is running on http://localhost:5000
📡 Environment: development
```

## 🔧 Troubleshooting

### If MongoDB connection fails:
1. Check your internet connection
2. Verify MongoDB Atlas IP whitelist (should allow all IPs: 0.0.0.0/0)
3. Check username/password in connection string

### If port 5000 is busy:
Change PORT in `.env` file to another port (e.g., 5001, 3001)

### If npm install fails:
```bash
# Clear cache and try again
npm cache clean --force
npm install
```

## 📝 Next Steps

1. Server is running ✅
2. Database is connected ✅
3. Now you can:
   - Create models in `src/models/`
   - Add more routes in `src/routes/`
   - Create controllers in `src/controllers/`

## 🎯 Common Commands

```bash
# Start development server
npm run dev

# Start production server
npm start

# Check if server is running
curl http://localhost:5000/

# Test database connection
curl http://localhost:5000/api/test/db
```
