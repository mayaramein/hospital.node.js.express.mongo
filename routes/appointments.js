const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');

// Route for fetching all appointments
router.get('/', appointmentsController.getAllAppointments);

// Route for fetching a single appointment by ID
router.get('/:id', appointmentsController.getAppointmentById);

// Route for creating a new appointment
router.post('/', appointmentsController.createAppointment);

// Route for updating an appointment
router.put('/:id', appointmentsController.updateAppointment);

// Route for deleting an appointment
router.delete('/:id', appointmentsController.deleteAppointment);

module.exports = router;
