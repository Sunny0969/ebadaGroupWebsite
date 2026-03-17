# Ebadah Group Backend Server

Backend server for Ebadah Group website with MongoDB database connection.

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

## 🚀 Installation & Setup

### Step 1: Install Dependencies

Navigate to the backend folder and install all required packages:

```bash
cd backend
npm install
```

### Step 2: Environment Variables

The `.env` file is already created with the MongoDB connection string. Make sure it exists in the `backend` folder:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://sunnypirkash_db_user:5pDBUbftLhhElB36@cluster0.tjgrsmc.mongodb.net/?appName=Cluster0
```

### Step 3: Run the Server

#### Development Mode (with auto-reload):
```bash
npm run dev
```

#### Production Mode:
```bash
npm start
```

## 🌐 API Endpoints

### Base URL
- Local: `http://localhost:5000`
- Production: (update with your production URL)

### Available Routes

1. **GET /** - Welcome message
   ```
   http://localhost:5000/
   ```

2. **GET /api/health** - Health check with database status
   ```
   http://localhost:5000/api/health
   ```

3. **GET /api/test/db** - Test database connection
   ```
   http://localhost:5000/api/test/db
   ```

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js      # MongoDB connection configuration
│   ├── controllers/
│   │   └── testController.js # Controller functions
│   ├── routes/
│   │   └── testRoutes.js     # API routes
│   └── server.js             # Main server file
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Configuration

### MongoDB Connection

The database connection is configured in `src/config/database.js`. It automatically:
- Connects to MongoDB Atlas
- Handles connection errors
- Logs connection status

### CORS

CORS is enabled to allow requests from your frontend. Update the CORS configuration in `server.js` if needed.

## 🐛 Troubleshooting

### Database Connection Issues

1. **Check MongoDB URI**: Verify the connection string in `.env` file
2. **Network Access**: Ensure your IP is whitelisted in MongoDB Atlas
3. **Credentials**: Verify username and password are correct

### Port Already in Use

If port 5000 is already in use, change the PORT in `.env` file:
```
PORT=5001
```

## 📝 Next Steps

1. Create models for your data (in `src/models/`)
2. Add more routes and controllers
3. Implement authentication if needed
4. Add validation middleware
5. Set up error handling

## 🔒 Security Notes

- Never commit `.env` file to git
- Use environment variables for sensitive data
- Implement authentication for production
- Add rate limiting for API endpoints

## 📞 Support

For issues or questions, check the main project README or contact the development team.
