// models/facility.js

const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Facility = mongoose.model('Facility', facilitySchema);

module.exports = Facility;
