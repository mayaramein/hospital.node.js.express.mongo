const Patient = require('../models/patient');

// Controller method for fetching all patients
exports.getAllPatients = (req, res) => {
  Patient.find({})
    .then(patients => {
      res.json(patients);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching a single patient by ID
exports.getPatientById = (req, res) => {
  const { id } = req.params;

  Patient.findById(id)
    .then(patient => {
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
      res.json(patient);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for creating a new patient
exports.createPatient = (req, res) => {
  const { name, age, gender, contactInformation, medicalHistory, insuranceDetails } = req.body;

  const newPatient = new Patient({
    name,
    age,
    gender,
    contactInformation,
    medicalHistory,
    insuranceDetails
  });

  newPatient.save()
    .then(patient => {
      res.status(201).json(patient);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for updating a patient
exports.updatePatient = (req, res) => {
  const { id } = req.params;
  const { name, age, gender, contactInformation, medicalHistory, insuranceDetails } = req.body;

  Patient.findByIdAndUpdate(id, {
    name,
    age,
    gender,
    contactInformation,
    medicalHistory,
    insuranceDetails
  }, { new: true })
    .then(patient => {
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
      res.json(patient);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for deleting a patient
exports.deletePatient = (req, res) => {
  const { id } = req.params;

  Patient.findByIdAndRemove(id)
    .then(patient => {
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
      res.json({ message: 'Patient deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
