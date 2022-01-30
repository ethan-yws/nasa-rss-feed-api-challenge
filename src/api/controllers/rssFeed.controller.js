const loggerService = require('../common/logger/logger');
const { getPayload } = require('../services/getPayload.service');

/**
 * Root route controller
 *
 * @param req
 * @param res
 */
const getRSSFeedNoOrder = async (req, res) => {
  loggerService.info('>> calling controller::getRSSFeedNoOrder');

  const payload = await getPayload();

  loggerService.debug('>> getRSSFeedNoOrder::payload: ');
  loggerService.debug(payload);

  res.send(payload);
};

/**
 * GET /sort controller
 *
 * @param req
 * @param res
 */
const getRSSFeedSortByDate = async (req, res) => {
  loggerService.info(
    `>> calling controller::getRSSFeedSortByDate::order: ${req.query.order}`
  );
  const { order } = req.query;

  const payload = await getPayload(order);

  loggerService.debug('>> getRSSFeedSortByDate::payload: ');
  loggerService.debug(payload);

  res.send(payload);
};

module.exports = {
  getRSSFeedNoOrder,
  getRSSFeedSortByDate,
};
