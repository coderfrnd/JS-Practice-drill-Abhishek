import {
  createDirectory,
  deleteAllFile,
  readDir,
  writeFile,
} from "../problem1.js";

let folderName = "randomJson";
let numOfFile = 5;

createDirectory(folderName, numOfFile, (numOfFile, folderPath) => {
  console.log("Folder Creation done");
  writeFile(numOfFile, folderPath, (folderPath) => {
    console.log("File Creation done");
    readDir(folderPath, (folderPath, data) => {
      console.log("Read file done");
      deleteAllFile(folderPath, data);
    });
  });
});
