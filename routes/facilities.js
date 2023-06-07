const express = require('express');
const router = express.Router();
const facilitiesController = require('../controllers/facilitiesController');

// Route for fetching all facilities
router.get('/', facilitiesController.getAllFacilities);

// Route for fetching a single facility by ID
router.get('/:id', facilitiesController.getFacilityById);

// Route for creating a new facility
router.post('/', facilitiesController.createFacility);

// Route for updating a facility
router.put('/:id', facilitiesController.updateFacility);

// Route for deleting a facility
router.delete('/:id', facilitiesController.deleteFacility);

module.exports = router;
