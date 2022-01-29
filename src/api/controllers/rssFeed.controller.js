const loggerService = require('../common/logger/logger');

const getRSSFeedNoOrder = (req, res) => {
  loggerService.info('>> calling controller::getRSSFeedNoOrder');
  res.send();
};

const getRSSFeedSortByDate = (req, res) => {
  loggerService.info(
    `>> calling controller::getRSSFeedSortByDate::order: ${req.query.order}`
  );
  res.send();
};

module.exports = {
  getRSSFeedNoOrder,
  getRSSFeedSortByDate,
};
