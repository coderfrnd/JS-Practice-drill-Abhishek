import fs from "fs";
import path, { resolve } from "path";

// 1. Read the given file lipsum.txt
// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

let fileCreationPath = path.join(process.cwd());

export function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, fileContent) => {
      if (err) {
        reject(err);
      }
      return resolve(fileContent);
    });
  });
}

export function createFile(appendFileName, fileName, fileContent) {
  return new Promise((resolve, reject) => {
    let filePath = path.join(process.cwd(), fileName);
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        reject(err);
      }
      return resolve(fileName);
    });
  });
}
export function upperCaseConverter(appendFileName, fileName, fileContent) {
  fileContent = fileContent.toUpperCase();
  return createFile(appendFileName, fileName, fileContent).then((fileName) => {
    let filePath = process.cwd();
    return appendAnyfile(filePath, appendFileName, fileName);
  });
}

export function lowerCaseConverter(
  appendFileName,
  fileName,
  contentFileNamePath
) {
  return readFile(contentFileNamePath)
    .then((fileContent) => {
      fileContent = fileContent.toLowerCase();
      fileContent = fileContent.split(".").join("\n");
      return createFile(appendFileName, fileName, fileContent);
    })
    .then((fileName) => {
      let filePath = process.cwd();
      return appendAnyfile(filePath, appendFileName, fileName);
    });
}

export function sortFileConverter(
  appendFileName,
  fileName,
  contentFileNamePath
) {
  return readFile(contentFileNamePath)
    .then((fileContent) => {
      fileContent = fileContent.split(" ").sort().join(" ");
      return createFile(appendFileName, fileName, fileContent);
    })
    .then((fileName) => {
      let filePath = process.cwd();
      return appendAnyfile(filePath, appendFileName, fileName);
    });
}

export function appendAnyfile(filePath, fileName, fileContent) {
  return new Promise((resolve, reject) => {
    let totalfilePath = path.join(filePath, fileName);
    fs.appendFile(totalfilePath, fileContent + "\n", (err) => {
      if (err) {
        reject(err);
      }
      console.log(`successfully append ${fileContent} in ${fileName}`);
      return resolve(fileContent);
    });
  });
}

export function deleteAllFile(fileContent) {
  fileContent = fileContent.split("\n");
  fileContent = fileContent.filter((element) => {
    if (element.trim() !== "") {
      return true;
    }
  });
  let promiseArr = fileContent.map((ele) => {
    let filePath = path.join(process.cwd(), ele);
    let promise = new Promise((resolve, reject) => {
      fs.rm(filePath, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve(`file Deletion done ${ele}`);
      });
    });
    return promise;
  });
  return Promise.all(promiseArr).then((listOFPromise) => {
    listOFPromise.forEach((ele) => {
      console.log(ele);
    });
  });
}

export function deleteFileNameData(filePath) {
  return new Promise((resolve, reject) => {
    fs.truncate(filePath, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve("All file Name Deletion done also");
    });
  });
}
