const { default: fs } = await import("fs/promises");
let textFilesNamePath = "fileName.txt";
// 1. Read the given file lipsum.txt
// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

export function readFile(filePath, textFilesNamePath) {
  return fs.readFile(filePath, "utf-8");
}

export function appendAnyfile(filePath, fileName) {
  return fs.appendFile(filePath, fileName + "\n");
}

export function convertToUpperCase(fileContent, fileName) {
  fileContent = fileContent.toUpperCase();
  return fs.writeFile(fileName, fileContent).then(() => {
    appendAnyfile(textFilesNamePath, fileName);
    return fileName;
  });
}

export function convertToSortedFile(readFileName, fileName) {
  return readFile(readFileName, fileName)
    .then((fileContent) => {
      fileContent = fileContent.split(".").sort().join("\n");
      fs.writeFile(fileName, fileContent);
      return fileName;
    })
    .then((fileName) => {
      appendAnyfile(textFilesNamePath, fileName);
      return textFilesNamePath;
    });
}

export function deleteAllFile(fileNames) {
  readFile(fileNames).then((fileContent) => {
    fileContent = fileContent.split("\n");
    fileContent = fileContent.filter((ele) => ele.trim() != "");
    fileContent.forEach((element) => {
      fs.unlink(element).then(() => {
        console.log(element, "deleteion done ");
      });
    });
  });
}

function deleteFileData(fileName) {
  return fs.truncate(fileName).then(() => {
    console.log("All names deleted from the", fileName);
  });
}

export function convertTolowerCase(readfileName, fileName) {
  return readFile(readfileName)
    .then((fileContent) => {
      fileContent = fileContent.toLowerCase();
      fs.writeFile(fileName, fileContent);
      return fileName;
    })
    .then((fileName) => {
      appendAnyfile(textFilesNamePath, fileName);
      return fileName;
    })
    .catch((err) => {
      console.log("erros in", err);
    });
}
