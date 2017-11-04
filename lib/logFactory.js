const logger = require("console-log-level");
const moment = require("moment");

LogFactory = {};

LogFactory.newLog = function newLog(keyWord) {
  return logger({
    level: "info",
    prefix: () => {
      return moment().format() + `::${keyWord} - `;
    }
  });
};

module.exports = LogFactory;
