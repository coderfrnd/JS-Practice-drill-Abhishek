import path from "path";
import { createDir, createFile, deleteAllFile, readDir } from "../problem1.js";

let folderName = "randomJson";
let fileName = "random.json";
let numofFile = 5;
let folderPath = path.join(process.cwd(), folderName);

createDir(numofFile, folderPath, fileName)
  .then(({ numofFile, folderPath, fileName }) => {
    return createFile(numofFile, folderPath, fileName);
  })
  .then((folderPath) => {
    return readDir(folderPath);
  })
  .then(({ listOfFile, folderPath }) => {
    setTimeout(() => {
      deleteAllFile(listOfFile, folderPath);
    }, 2000);
  })
  .catch((err) => {
    console.log("Error happen", err);
  });
