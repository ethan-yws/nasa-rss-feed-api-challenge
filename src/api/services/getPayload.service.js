const getRSSFeed = require('../utilities/rss-parser');
const { rssUrl } = require('../../config/default.config');
const { formatPayload } = require('../services/payload.format.service');
const loggerService = require('../common/logger/logger');

const getPayloadNoOrder = async () => {
  loggerService.info('>> fetching RSS data to js object :::');
  const rssData = await getRSSFeed(rssUrl);

  const payload = formatPayload(rssData);
  loggerService.debug(payload);

  return payload;
};

module.exports = { getPayloadNoOrder };
