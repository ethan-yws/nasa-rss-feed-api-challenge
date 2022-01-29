const loggerService = require('../common/logger/logger');
const { getPayloadNoOrder } = require('../services/getPayload.service');

const getRSSFeedNoOrder = async (req, res) => {
  loggerService.info('>> calling controller::getRSSFeedNoOrder');
  const payload = await getPayloadNoOrder();
  loggerService.debug(payload);
  res.send(payload);
};

const getRSSFeedSortByDate = (req, res) => {
  loggerService.info(
    `>> calling controller::getRSSFeedSortByDate::order: ${req.query.order}`
  );
  const { order } = req.query;

  res.send();
};

module.exports = {
  getRSSFeedNoOrder,
  getRSSFeedSortByDate,
};
