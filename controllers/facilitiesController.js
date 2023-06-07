const Facility = require('../models/facility');

// Controller method for fetching all facilities
exports.getAllFacilities = (req, res) => {
  Facility.find({})
    .then(facilities => {
      res.json(facilities);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching a single facility by ID
exports.getFacilityById = (req, res) => {
  const { id } = req.params;

  Facility.findById(id)
    .then(facility => {
      if (!facility) {
        return res.status(404).json({ message: 'Facility not found' });
      }
      res.json(facility);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for creating a new facility
exports.createFacility = (req, res) => {
  const { name, description, location } = req.body;

  const newFacility = new Facility({
    name,
    description,
    location
  });

  newFacility.save()
    .then(facility => {
      res.status(201).json(facility);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for updating a facility
exports.updateFacility = (req, res) => {
  const { id } = req.params;
  const { name, description, location } = req.body;

  Facility.findByIdAndUpdate(id, {
    name,
    description,
    location
  }, { new: true })
    .then(facility => {
      if (!facility) {
        return res.status(404).json({ message: 'Facility not found' });
      }
      res.json(facility);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for deleting a facility
exports.deleteFacility = (req, res) => {
  const { id } = req.params;

  Facility.findByIdAndRemove(id)
    .then(facility => {
      if (!facility) {
        return res.status(404).json({ message: 'Facility not found' });
      }
      res.json({ message: 'Facility deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
