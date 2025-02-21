import fs from "fs";
import path, { resolve } from "path";
// 1. Create a directory of random JSON files
// 2. Delete those files simultaneously

let folderPath = path.join(process.cwd(), "testing");

function craeteDirectory(folderPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        reject(err);
      }
      resolve(folderPath);
    });
  });
}

function createFiles(folderPath, numberOfFiles) {
  let promiseArr = [];
  for (let index = 1; index <= numberOfFiles; index++) {
    let singlePromise = new Promise((resolve, reject) => {
      fs.writeFile(
        `${folderPath}/${index}-random.json`,
        `${index}+random.json`,
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
  return Promise.all(promiseArr);
}

function readDirectory(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, fileList) => {
      if (err) {
        reject(err);
      }
      resolve(fileList);
    });
  });
}

craeteDirectory(folderPath)
  .then((folderPath) => {
    return createFiles(folderPath, 5);
  })
  .then((data) => {
    console.log(data);
    return readDirectory(folderPath);
  })
  .then((data) => {})
  .catch((err) => {
    console.log("erros happen", err);
  });
