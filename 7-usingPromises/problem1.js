const { default: fs } = await import("fs/promises");
import path, { join } from "path";

// 1. Create a directory of random JSON files
// 2. Delete those files simultaneously

export function createDir(numofFile, folderPath, fileName) {
  return fs.mkdir(folderPath, { recursive: true }).then(() => {
    return { numofFile, folderPath, fileName };
  });
}

export function createFile(numofFile, folderPath, fileName) {
  let promisesCount = [];
  let promise;
  for (let index = 0; index < numofFile; index++) {
    promise = fs.writeFile(
      `${folderPath}/${index + 1}${fileName}`,
      "creation of file" + index
    );
    promisesCount.push(promise);
  }
  return Promise.all(promisesCount)
    .then(() => {
      console.log("File Creation done");
      return folderPath;
    })
    .catch((err) => {
      console.log("Error is coming in creation of file", err);
    });
}
export function readDir(folderPath) {
  return fs
    .readdir(folderPath)
    .then((listOfFile) => {
      return { listOfFile, folderPath };
    })
    .catch((err) => {
      return console.log(err);
    });
}

export function deleteAllFile(fileNameList, folderPath) {
  let promisesCount = [];
  let promise;
  fileNameList.forEach((singleFileName) => {
    let filePath = path.join(folderPath, singleFileName);
    promise = fs.unlink(filePath);
    promisesCount.push(promise);
  });
  return Promise.all(promisesCount)
    .then(() => {
      console.log("All file deletion done");
    })
    .catch((err) => {
      console.log("Error in deletion of file", err);
    });
}
