const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');

// Route for fetching all doctors
router.get('/', doctorsController.getAllDoctors);

// Route for fetching a single doctor by ID
router.get('/:id', doctorsController.getDoctorById);

// Route for creating a new doctor
router.post('/', doctorsController.createDoctor);

// Route for updating a doctor
router.put('/:id', doctorsController.updateDoctor);

// Route for deleting a doctor
router.delete('/:id', doctorsController.deleteDoctor);

module.exports = router;
