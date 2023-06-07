const Doctor = require('../models/doctor');

// Controller method for fetching all doctors
exports.getAllDoctors = (req, res) => {
  Doctor.find({})
    .then(doctors => {
      res.json(doctors);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching a single doctor by ID
exports.getDoctorById = (req, res) => {
  const { id } = req.params;

  Doctor.findById(id)
    .then(doctor => {
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json(doctor);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for creating a new doctor
exports.createDoctor = (req, res) => {
  const { name, specialties, qualifications, experience, contactInformation } = req.body;

  const newDoctor = new Doctor({
    name,
    specialties,
    qualifications,
    experience,
    contactInformation
  });

  newDoctor.save()
    .then(doctor => {
      res.status(201).json(doctor);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for updating a doctor
exports.updateDoctor = (req, res) => {
  const { id } = req.params;
  const { name, specialties, qualifications, experience, contactInformation } = req.body;

  Doctor.findByIdAndUpdate(id, {
    name,
    specialties,
    qualifications,
    experience,
    contactInformation
  }, { new: true })
    .then(doctor => {
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json(doctor);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for deleting a doctor
exports.deleteDoctor = (req, res) => {
  const { id } = req.params;

  Doctor.findByIdAndRemove(id)
    .then(doctor => {
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json({ message: 'Doctor deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
