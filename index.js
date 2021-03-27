const { setSystemTime } = require("./helpers/date");
const { writeToFile } = require("./helpers/file");
const { commitChanges } = require("./helpers/gitOps");

// ------------

(async () => {
  for (let index = 0; index < 330; index++) {
    await setSystemTime(1);
    const myRandomNumber = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    for (let innerIndex = 0; innerIndex <= myRandomNumber; innerIndex++) {
      await writeToFile();
      await commitChanges();
      console.log("myRandomNumber: ", myRandomNumber);
      console.log("innerIndex: ", innerIndex);
    }
    console.log("index: ", index);
  }
  // Set system date
})();
// ------------
// Execute git command

// exec('git commit -m "test"', (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

// ------------
// Push code to github
