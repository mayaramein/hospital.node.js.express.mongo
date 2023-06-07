const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route for submitting a contact form
router.post('/', contactController.submitContactForm);

// Route for fetching all contact submissions
router.get('/', contactController.getAllContactSubmissions);

module.exports = router;
