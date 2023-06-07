const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Route for the about page
router.get('/', aboutController.getAboutPage);

// Route for fetching hospital history
router.get('/history', aboutController.getHospitalHistory);

// Route for fetching hospital leadership
router.get('/leadership', aboutController.getHospitalLeadership);

// Route for fetching hospital awards
router.get('/awards', aboutController.getHospitalAwards);

module.exports = router;
