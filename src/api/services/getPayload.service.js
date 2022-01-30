const getRSSFeed = require('../utilities/rss-parser');
const { rssUrl } = require('../../config/default.config');
const { formatPayload } = require('../services/payload.format.service');
const loggerService = require('../common/logger/logger');

/**
 * Get the payload we need from rss data in given pubDate order
 *
 * @param {string} order
 * @returns {Object} payload we need
 */
const getPayload = async (order) => {
  loggerService.info('>> fetching RSS data to js object :::');
  const rssData = await getRSSFeed(rssUrl);

  loggerService.info('>> formatting RSS data :::');
  const payload = formatPayload(rssData, order);

  return payload;
};

module.exports = { getPayload };
