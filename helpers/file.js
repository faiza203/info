const writeToFile = () => {
  return new Promise(async (resolve, reject) => {
    const fs = require("fs");
    const data =
      "AmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmirAmir";
    fs.appendFile("test.txt", data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports = {
  writeToFile,
};
