const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json } = format;

const logger = createLogger({
  level: 'debug',
  format: combine(timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS a' }), json()),
  transports: [new transports.Console()],
});

module.exports = logger;
