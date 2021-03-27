const { runCmdCommand } = require("./cmd");

const setSystemTime = async (daysToGoBack) => {
  return new Promise(async (resolve, reject) => {
    try {
      const moment = require("moment"); // require
      const newDate = moment()
        .subtract(daysToGoBack, "days")
        .format("l");
      console.log("Date: ", newDate);
      await runCmdCommand(`date ${newDate}`);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  setSystemTime,
};
