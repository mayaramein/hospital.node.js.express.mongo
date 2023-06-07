// Assuming you have imported the necessary models

// Controller method for the about page
exports.getAboutPage = (req, res) => {
  // Logic to fetch any necessary data or render the appropriate view
  res.render('about/aboutPage');
};

// Controller method for fetching hospital history
exports.getHospitalHistory = (req, res) => {
  // Logic to fetch hospital history from the database
  // Example using the History model
  History.find({})
    .then(history => {
      // Process the data or render the appropriate view
      res.render('about/history', { history });
    })
    .catch(err => {
      // Handle any errors
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching hospital leadership
exports.getHospitalLeadership = (req, res) => {
  // Logic to fetch hospital leadership from the database
  // Example using the Doctor model
  Doctor.find({ leadership: true })
    .then(leaders => {
      // Process the data or render the appropriate view
      res.render('about/leadership', { leaders });
    })
    .catch(err => {
      // Handle any errors
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching hospital awards
exports.getHospitalAwards = (req, res) => {
  // Logic to fetch hospital awards from the database
  // Example using the Award model
  Award.find({})
    .then(awards => {
      // Process the data or render the appropriate view
      res.render('about/awards', { awards });
    })
    .catch(err => {
      // Handle any errors
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
