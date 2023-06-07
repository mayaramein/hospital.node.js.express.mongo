const express = require('express');
const router = express.Router();

// Index route
router.get('/', (req, res) => {
  // Handle the index route logic here
  res.send('Welcome to the index page');
});

// Export the router
module.exports = router;
