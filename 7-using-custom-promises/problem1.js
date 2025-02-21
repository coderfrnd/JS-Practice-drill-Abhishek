import fs from "fs";
import path from "path";
// 1. Create a directory of random JSON files
// 2. Delete those files simultaneously

export function createDirectory(folderPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        reject(err);
      }
      return resolve(folderPath);
    });
  });
}

export function createFiles(folderPath, numberOfFiles) {
  let promiseArr = [];
  for (let index = 1; index <= numberOfFiles; index++) {
    let singlePromise = new Promise((resolve, reject) => {
      fs.writeFile(
        `${folderPath}/${index}-random.json`,
        `{"id" : ${index} , "name":${index}-random.json }`,
        (err) => {
          if (err) {
            reject(err);
          }
          resolve(`${index}-random.json`);
        }
      );
    });
    promiseArr.push(singlePromise);
  }
  return Promise.all(promiseArr).then((listOfFile) => {
    listOfFile.forEach((ele) => {
      console.log(`${ele} is created`);
    });
    return listOfFile;
  });
}

export function readDirectory(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, fileList) => {
      if (err) {
        reject(err);
      }
      resolve(fileList);
    });
  });
}

export function deleteDirectory(listOfFile, folderPath) {
  let promiseArr = listOfFile.map((element) => {
    return new Promise((resolve, reject) => {
      let filePath = path.join(folderPath, element);
      fs.unlink(filePath, (err) => {
        if (err) {
          reject(err);
        }
        resolve(`file successfully deleted ${element}`);
      });
    });
  });
  return Promise.all(promiseArr).then((data) => {
    data.forEach((ele) => {
      console.log(ele);
    });
  });
}
