import path from "path";
import {
  createDirectory,
  createFiles,
  deleteDirectory,
  readDirectory,
} from "../problem1.js";

path;
let folderName = "randomJsonFolder";
let folderPath = path.join(process.cwd(), folderName);
let numOfFile = 5;

createDirectory(folderPath)
  .then((folderPath) => {
    return createFiles(folderPath, numOfFile);
  })
  .then(() => {
    return readDirectory(folderPath);
  })
  .then((totalFileInFolder) => {
    console.log("Total file in folder", totalFileInFolder.length);
    setTimeout(() => {
      return deleteDirectory(totalFileInFolder, folderPath);
    }, 2000);
  })
  .catch((err) => {
    console.log(err);
  });
