const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  appointmentDateTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled'],
    default: 'pending'
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
