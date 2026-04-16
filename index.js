const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ai-resume-builder')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Example route for AI Generation
app.post('/api/ai/suggest', (req, res) => {
  const { text, type } = req.body;
  // Mock AI response
  const suggestion = `Here is an AI-enhanced version of your ${type}: ` + 
    "Innovatively " + text + " achieving noticeable results by implementing cutting-edge solutions.";
  
  // Fake delay to simulate AI API call
  setTimeout(() => {
    res.json({ suggestion });
  }, 1000);
});

// Mock user routes
app.post('/api/auth/login', (req, res) => {
  res.json({ token: 'mock_token_123', userId: 'mock_user_123' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
