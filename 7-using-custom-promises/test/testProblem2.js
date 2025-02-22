import path from "node:path";
import {
  appendAnyfile,
  deleteAllFile,
  deleteFileNameData,
  lowerCaseConverter,
  readFile,
  sortFileConverter,
  upperCaseConverter,
} from "../problem2.js";

let filePathOfTextFile = "../lipsum.txt";
let upperCaseFileName = "upperCase.txt";
let lowerCaseFileName = "lowerCase.txt";
let sortCaseFileName = "sortCase.txt";
let fileNameOfFile = "fileName.txt";
readFile(filePathOfTextFile)
  .then((fileContent) => {
    return upperCaseConverter(fileNameOfFile, upperCaseFileName, fileContent);
  })
  .then((readFileName) => {
    return lowerCaseConverter(fileNameOfFile, lowerCaseFileName, readFileName);
  })
  .then((readFileName) => {
    return sortFileConverter(fileNameOfFile, sortCaseFileName, readFileName);
  })
  .then(() => {
    let filePath = path.join(process.cwd(), fileNameOfFile);
    return readFile(filePath);
  })
  .then((fileContent) => {
    return deleteAllFile(fileContent);
  })
  .then(() => {
    return deleteFileNameData(fileNameOfFile);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
