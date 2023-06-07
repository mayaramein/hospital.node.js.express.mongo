const express = require('express');
const app = express();
const db = require('./config/db'); 

// Set up middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Import routes
const indexRoute = require('./routes/index');
const doctorsRouter = require('./routes/doctors');
const servicesRouter = require('./routes/services');
const appointmentsRouter = require('./routes/appointments');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const facilitiesRouter = require('./routes/facilities');
const newsRouter = require('./routes/news');
const patientsRouter = require('./routes/patients');
// Import other route files as needed

// Set up routes
app.use('/', indexRoute);
app.use('/doctors', doctorsRouter);
app.use('/services', servicesRouter);
app.use('/appointments', appointmentsRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/facilities', facilitiesRouter);
app.use('/news', newsRouter);
app.use('/patients', patientsRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});



  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
