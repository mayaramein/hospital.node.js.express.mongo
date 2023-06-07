const News = require('../models/news');

// Controller method for fetching all news articles
exports.getAllNews = (req, res) => {
  News.find({})
    .then(news => {
      res.json(news);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for fetching a single news article by ID
exports.getNewsById = (req, res) => {
  const { id } = req.params;

  News.findById(id)
    .then(news => {
      if (!news) {
        return res.status(404).json({ message: 'News article not found' });
      }
      res.json(news);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for creating a new news article
exports.createNews = (req, res) => {
  const { title, description, publicationDate, author, relatedImages } = req.body;

  const newNews = new News({
    title,
    description,
    publicationDate,
    author,
    relatedImages
  });

  newNews.save()
    .then(news => {
      res.status(201).json(news);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for updating a news article
exports.updateNews = (req, res) => {
  const { id } = req.params;
  const { title, description, publicationDate, author, relatedImages } = req.body;

  News.findByIdAndUpdate(id, {
    title,
    description,
    publicationDate,
    author,
    relatedImages
  }, { new: true })
    .then(news => {
      if (!news) {
        return res.status(404).json({ message: 'News article not found' });
      }
      res.json(news);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for deleting a news article
exports.deleteNews = (req, res) => {
  const { id } = req.params;

  News.findByIdAndRemove(id)
    .then(news => {
      if (!news) {
        return res.status(404).json({ message: 'News article not found' });
      }
      res.json({ message: 'News article deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
