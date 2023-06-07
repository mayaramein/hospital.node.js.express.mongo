const express = require('express');
const app = express();
const connectDB = require('./config/db'); 

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

// Call connectDB function to establish the database connection
connectDB();

  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// [ {
//   doctor: ObjectId("6480301ab2f657830a106f9e"),
//   patient: ObjectId("648030a5b2f657830a106fa5"),
//   appointmentDateTime: ISODate("2023-06-01T10:00:00Z"),
//   status: "confirmed"
// },
// {
//   doctor: ObjectId("6480301ab2f657830a106f9f"),
//   patient: ObjectId("648030a5b2f657830a106fa4"),
//   appointmentDateTime: ISODate("2023-06-02T14:30:00Z"),
//   status: "pending"
// },
// {
//   doctor: ObjectId("6480301ab2f657830a106fa0"),
//   patient: ObjectId("648030a5b2f657830a106fa6"),
//   appointmentDateTime: ISODate("2023-06-03T11:45:00Z"),
//   status: "confirmed"
// },]

// [
//   {
//     "title": "New Hospital Wing Opening",
//     "description": "We are excited to announce the opening of our new hospital wing, equipped with state-of-the-art facilities.",
//     "publicationDate": ISODate("2023-05-30T00:00:00Z"),
//     "author": "Hospital Administration",
//     "relatedImages": ["image1.jpg", "image2.jpg"]
//   },
//   {
//     "title": "Health Tips for Summer",
//     "description": "Stay hydrated and protect yourself from the sun. Follow these health tips to have a safe and enjoyable summer.",
//     "publicationDate": ISODate("2023-06-01T00:00:00Z"),
//     "author": "Dr. Jane Smith",
//     "relatedImages": ["image3.jpg"]
//   },
//   {
//     "title": "Community Health Seminar",
//     "description": "Join us for a community health seminar on June 15th to learn about common health issues and prevention strategies.",
//     "publicationDate": ISODate("2023-06-03T00:00:00Z"),
//     "author": "Hospital Outreach Team",
//     "relatedImages": ["image4.jpg"]
//   }
// ]


// [
//   {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     message: "I have a question about your services.",
//     submittedAt: ISODate("2023-06-01T08:30:00Z")
//   },
//   {
//     name: "Jane Smith",
//     email: "janesmith@example.com",
//     message: "I would like to inquire about appointment availability.",
//     submittedAt: ISODate("2023-06-02T15:20:00Z")
//   },
//   {
//     name: "David Johnson",
//     email: "davidjohnson@example.com",
//     message: "I need assistance with my medical records.",
//     submittedAt: ISODate("2023-06-03T10:15:00Z")
//   },
// ]

// [
//   {
//     name: "Cardiology",
//     description: "Specialized care for heart-related conditions",
//     department: "Medical",
//     doctors: [ObjectId("6480301ab2f657830a106f9e"), ObjectId("6480301ab2f657830a106f9f")]
//   },
//   {
//     name: "Pediatrics",
//     description: "Medical care for infants, children, and adolescents",
//     department: "Medical",
//     doctors: [ObjectId("6480301ab2f657830a106f9e")]
//   },
//   {
//     name: "Orthopedics",
//     description: "Treatment for musculoskeletal conditions and injuries",
//     department: "Surgical",
//     doctors: [ObjectId("6480301ab2f657830a106fa0")]
//   }
// ]

