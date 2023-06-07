const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  contactInformation: {
    type: String,
    required: true
  },
  medicalHistory: {
    type: String,
    required: true
  },
  insuranceDetails: {
    type: String,
    required: true
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
