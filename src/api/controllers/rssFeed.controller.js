const loggerService = require('../common/logger/logger');
const {
  getPayloadNoOrder,
  getPayloadWithOrder,
} = require('../services/getPayload.service');

/**
 * root route controller
 * @param req
 * @param res
 */
const getRSSFeedNoOrder = async (req, res) => {
  loggerService.info('>> calling controller::getRSSFeedNoOrder');

  const payload = await getPayloadNoOrder();

  loggerService.debug('>> getRSSFeedNoOrder::payload: ');
  loggerService.debug(payload);

  res.send(payload);
};

/**
 * GET /sort controller
 * @param req
 * @param res
 */
const getRSSFeedSortByDate = async (req, res) => {
  loggerService.info(
    `>> calling controller::getRSSFeedSortByDate::order: ${req.query.order}`
  );
  const { order } = req.query;

  const payload = await getPayloadWithOrder(order);

  loggerService.debug('>> getRSSFeedSortByDate::payload: ');
  loggerService.debug(payload);

  res.send(payload);
};

module.exports = {
  getRSSFeedNoOrder,
  getRSSFeedSortByDate,
};
