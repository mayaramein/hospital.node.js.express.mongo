const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  relatedImages: [{
    type: String
  }]
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
