import fs from "fs";
import path from "path";

// Using callbacks and the fs module's asynchronous functions, do the following:
// 1. Create a directory of random JSON files
// 2. Delete those files simultaneously

export function createDirectory(dirPath, fileNum, cbfunction) {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      return console.log("Something wrong in folder creation", err);
    }
    cbfunction(fileNum, dirPath);
  });
}

export function writeFile(fileNum, filePath, cbfunction) {
  let fileCount = 0;
  for (let i = 1; i <= fileNum; i++) {
    fs.writeFile(`${filePath}/${i}-random.json`, `${i}`, (err) => {
      if (err) {
        return console.log("Something wrong in random file creation", err);
      }
    });
    fileCount++;
  }
  if (fileCount == fileNum) {
    cbfunction(filePath);
  }
}

export function readDir(folderPath, cbfunction) {
  fs.readdir(folderPath, (err, data) => {
    if (err) {
      return console.log("Something wrong in reading directory", err);
    }
    cbfunction(folderPath, data);
  });
}

export function deleteAllFile(folderPath, listOfFile) {
  let count = 0;
  listOfFile.forEach((singleFile) => {
    let filePath = path.join(folderPath, singleFile);
    fs.unlink(filePath, (err) => {
      if (err) {
        return console.log("something went wrong in deletion", err);
      }
      count++;
      console.log("File deletion done", `${singleFile}`);
      if (count === listOfFile.length) {
        console.log("Done all the file deleted");
      }
    });
  });
  // console.log(count);
}
