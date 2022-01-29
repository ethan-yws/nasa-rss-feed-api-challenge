const express = require('express');
const router = express.Router();
const rssFeedController = require('../controllers/rssFeed.controller');

/**
 * GET /
 * root route
 */
router.get('/', rssFeedController.getRSSFeedNoOrder);

/**
 * GET /sort
 */
router.get('/sort', rssFeedController.getRSSFeedSortByDate);

module.exports = { router };
