const express = require('express');
const router = express.Router();

// Welcome route
router.get('/', (req, res) => {
  res.send('Welcome to Student Management System');
});

// Student API routes
router.use('/api', require('./student'));

module.exports = router;
