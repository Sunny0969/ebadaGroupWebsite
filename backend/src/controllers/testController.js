import mongoose from 'mongoose';

export const testConnection = async (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };

    res.json({
      success: true,
      message: 'Database connection test',
      database: {
        status: states[dbState] || 'unknown',
        readyState: dbState,
        name: mongoose.connection.name,
        host: mongoose.connection.host,
        port: mongoose.connection.port
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error testing database connection',
      error: error.message
    });
  }
};
