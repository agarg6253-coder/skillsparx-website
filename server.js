'use strict';

const express = require('express');
const mongoose = require('mongoose');

// Initialize express app
const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/skillspart'; // Adjust the URI as needed
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes configuration
app.get('/', (req, res) => {
  res.send('SkillSparx API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});