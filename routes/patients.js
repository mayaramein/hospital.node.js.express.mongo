const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patientsController');

// Route for fetching all patients
router.get('/', patientsController.getAllPatients);

// Route for fetching a single patient by ID
router.get('/:id', patientsController.getPatientById);

// Route for creating a new patient
router.post('/', patientsController.createPatient);

// Route for updating a patient
router.put('/:id', patientsController.updatePatient);

// Route for deleting a patient
router.delete('/:id', patientsController.deletePatient);

module.exports = router;
