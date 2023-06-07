const Service = require('../models/service');

// Controller method for fetching all services
exports.getAllServices = (req, res) => {
  Service.find({})
    .then(services => {
      res.json(services);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching a single service by ID
exports.getServiceById = (req, res) => {
  const { id } = req.params;

  Service.findById(id)
    .then(service => {
      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }
      res.json(service);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for creating a new service
exports.createService = (req, res) => {
  const { name, description } = req.body;

  const newService = new Service({
    name,
    description
  });

  newService.save()
    .then(service => {
      res.status(201).json(service);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for updating a service
exports.updateService = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  Service.findByIdAndUpdate(id, {
    name,
    description
  }, { new: true })
    .then(service => {
      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }
      res.json(service);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for deleting a service
exports.deleteService = (req, res) => {
  const { id } = req.params;

  Service.findByIdAndRemove(id)
    .then(service => {
      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }
      res.json({ message: 'Service deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
