const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialties: [{
    type: String
  }],
  qualifications: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  contactInformation: {
    type: String,
    required: true
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
