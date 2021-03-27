const { runCmdCommand } = require("./cmd");

const commitChanges = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await runCmdCommand(`git add .`);
      await runCmdCommand(`git commit -m "improving"`);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  commitChanges,
};
