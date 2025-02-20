import path from "path";
import {
  createDirectory,
  deleteAllFile,
  readDir,
  writeFile,
} from "../problem1.js";

let folderName = "randomJson";
let numOfFile = 5;
let folderPath = path.join(process.cwd(), folderName);

createDirectory(folderPath, numOfFile, (numOfFile, folderPath) => {
  console.log("Folder Creation done");
  writeFile(numOfFile, folderPath, (folderPath) => {
    console.log("File Creation done");
    readDir(folderPath, (folderPath, data) => {
      console.log("Read file done");
      deleteAllFile(folderPath, data);
    });
  });
});
