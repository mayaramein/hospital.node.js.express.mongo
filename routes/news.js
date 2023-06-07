const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Route for fetching all news articles
router.get('/', newsController.getAllNews);

// Route for fetching a single news article by ID
router.get('/:id', newsController.getNewsById);

// Route for creating a new news article
router.post('/', newsController.createNews);

// Route for updating a news article
router.put('/:id', newsController.updateNews);

// Route for deleting a news article
router.delete('/:id', newsController.deleteNews);

module.exports = router;
