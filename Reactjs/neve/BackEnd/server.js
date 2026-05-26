// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import route files
const formRoutes = require('./routes/formRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests from frontend
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/forms', formRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Configure port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});