import path from "path";
import {
  convertTolowerCase,
  convertToSortedFile,
  convertToUpperCase,
  deleteAllFile,
  deleteFileData,
  readFile,
} from "../problem2.js";

let textFileName = "../lipsum.txt";
let filePath = path.join(process.cwd(), textFileName);
let upperCaseFileName = "upperCase.txt";
let lowerCaseFileName = "lowerCase.txt";
let sortCaseFileName = "sortCase.txt";
let textFilesNamePath = "fileName.txt";

readFile(filePath)
  .then((fileContent) => {
    return convertToUpperCase(
      fileContent,
      upperCaseFileName,
      textFilesNamePath
    );
  })
  .then(({ upperCaseFileName, textFilesNamePath }) => {
    return convertTolowerCase(
      { upperCaseFileName, textFilesNamePath },
      lowerCaseFileName
    );
  })
  .then(({ lowerCaseFileName, textFilesNamePath }) => {
    return convertToSortedFile(
      { lowerCaseFileName, textFilesNamePath },
      sortCaseFileName
    );
  })
  .then((listOfFile) => {
    return deleteAllFile(listOfFile);
  })
  .catch((err) => {
    console.error(err);
  });
