const Contact = require('../models/contact');

// Controller method for handling contact form submissions
exports.submitContactForm = (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    phoneNumber,
    message
  });

  newContact.save()
    .then(contact => {
      res.status(201).json(contact);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching all contact submissions
exports.getAllContactSubmissions = (req, res) => {
  Contact.find({})
    .then(submissions => {
      res.json(submissions);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
