require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./src/routes');

// Middleware
app.use(express.json());

// Connect to MongoDB using env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
