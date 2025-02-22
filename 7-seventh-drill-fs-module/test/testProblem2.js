import {
  deleteAllFile,
  lowerCase,
  readAnyFile,
  sortFile,
  upperCase,
  writeAnyFile,
} from "../problem2.js";

let fileName = "../lipsum.txt";
let upperCaseFile = "upper.txt";
let lowerCaseFile = "lower.txt";
let fileNameFile = "filename.txt";
let sortedFileName = "sorted.txt";

readAnyFile(fileName, (err, data) => {
  if (err) {
    console.log("Error in read lipsum txt", err);
  }
  upperCase(data, upperCaseFile, (err, upperCaseFileName) => {
    if (err) {
      console.log("Error in creation of upper.txt", err);
    } else {
      lowerCase(data, lowerCaseFile, (err, lowerCaseFileName) => {
        if (err) {
          console.log("Error in creation of lower.txt", err);
        } else {
          console.log("done creation of lower case");
          sortFile(data, sortedFileName, (err, sortedFile) => {
            if (err) {
              console.log("Error in sorted File Creation", err);
            } else {
              deleteAllFile(fileNameFile, (err) => {
                if (err) {
                  console.log("Error in deletion");
                } else {
                  console.log("Delete done");
                }
              });
            }
          });
        }
      });
    }
  });
});
