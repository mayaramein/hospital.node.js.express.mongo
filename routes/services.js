const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

// Route for fetching all services
router.get('/', servicesController.getAllServices);

// Route for fetching a single service by ID
router.get('/:id', servicesController.getServiceById);

// Route for creating a new service
router.post('/', servicesController.createService);

// Route for updating a service
router.put('/:id', servicesController.updateService);

// Route for deleting a service
router.delete('/:id', servicesController.deleteService);

module.exports = router;
