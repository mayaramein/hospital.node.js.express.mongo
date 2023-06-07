const Appointment = require('../models/appointment');

// Controller method for fetching all appointments
exports.getAllAppointments = (req, res) => {
  Appointment.find({})
    .populate('doctor')
    .populate('patient')
    .then(appointments => {
      res.json(appointments);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching a single appointment by ID
exports.getAppointmentById = (req, res) => {
  const { id } = req.params;

  Appointment.findById(id)
    .populate('doctor')
    .populate('patient')
    .then(appointment => {
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      res.json(appointment);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for creating a new appointment
exports.createAppointment = (req, res) => {
  const { doctor, patient, appointmentDateTime, status } = req.body;

  const newAppointment = new Appointment({
    doctor,
    patient,
    appointmentDateTime,
    status
  });

  newAppointment.save()
    .then(appointment => {
      res.status(201).json(appointment);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for updating an appointment
exports.updateAppointment = (req, res) => {
  const { id } = req.params;
  const { doctor, patient, appointmentDateTime, status } = req.body;

  Appointment.findByIdAndUpdate(id, {
    doctor,
    patient,
    appointmentDateTime,
    status
  }, { new: true })
    .then(appointment => {
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      res.json(appointment);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for deleting an appointment
exports.deleteAppointment = (req, res) => {
  const { id } = req.params;

  Appointment.findByIdAndRemove(id)
    .then(appointment => {
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      res.json({ message: 'Appointment deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
