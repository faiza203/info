const runCmdCommand = (command) => {
  return new Promise((resolve, reject) => {
    const { exec } = require("child_process");
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      resolve(true);
    });
  });
};

module.exports = {
  runCmdCommand,
};
