import path from "path";
import {
  appendAnyfile,
  convertTolowerCase,
  convertToSortedFile,
  convertToUpperCase,
  deleteAllFile,
  readFile,
} from "../problem2.js";

let textFileName = "../lipsum.txt";
let filePath = path.join(process.cwd(), textFileName);
let upperCaseFileName = "upperCase.txt";
let lowerCaseFileName = "lowerCase.txt";
let sortCaseFileName = "sortCase.txt";

readFile(filePath)
  .then((fileContent) => {
    return convertToUpperCase(fileContent, upperCaseFileName);
  })
  .then((fileName) => {
    return convertTolowerCase(fileName, lowerCaseFileName);
  })
  .then((fileName) => {
    return convertToSortedFile(fileName, sortCaseFileName);
  })
  .then((listOfFile) => {
    setTimeout(() => {
      deleteAllFile(listOfFile);
    }, 2000);
  })
  .catch((err) => {
    console.error(err);
  });
