const { default: fs } = await import("fs/promises");
let textFilesNamePath = "fileName.txt";
// 1. Read the given file lipsum.txt
// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

export function readFile(filePath) {
  return fs.readFile(filePath, "utf-8");
}

export function appendAnyfile(filePath, fileName) {
  return fs.appendFile(filePath, fileName + "\n");
}

export function convertToUpperCase(
  fileContent,
  upperCaseFileName,
  textFilesNamePath
) {
  fileContent = fileContent.toUpperCase();
  return fs.writeFile(upperCaseFileName, fileContent).then(() => {
    appendAnyfile(textFilesNamePath, upperCaseFileName);
    console.log("Upper Case file created");
    return { upperCaseFileName, textFilesNamePath };
  });
}

export function convertToSortedFile(
  { lowerCaseFileName, textFilesNamePath },
  sortCaseFileName
) {
  return readFile(lowerCaseFileName)
    .then((fileContent) => {
      fileContent = fileContent.split(".").sort().join("\n");
      fs.writeFile(sortCaseFileName, fileContent);
    })
    .then(() => {
      console.log("Sorted File Creation done");
    })
    .then(() => {
      appendAnyfile(textFilesNamePath, sortCaseFileName);
      return textFilesNamePath;
    });
}

export function deleteAllFile(fileNames) {
  readFile(fileNames)
    .then((fileContent) => {
      let filesToDelete = fileContent
        .split("\n")
        .filter((ele) => ele.trim() !== "");

      return Promise.all(
        filesToDelete.map((element) =>
          fs
            .unlink(element)
            .then(() => console.log(element, "deletion done"))
            .catch((err) => console.error("Error deleting", element, ":", err))
        )
      );
    })
    .then(() => deleteFileData(fileNames))
    .catch((err) => console.error("Error reading file names:", err));
}

export function deleteFileData(fileName) {
  return fs.truncate(fileName).then(() => {
    console.log("All names deleted from the", fileName);
  });
}

export function convertTolowerCase(
  { upperCaseFileName, textFilesNamePath },
  lowerCaseFileName
) {
  return readFile(upperCaseFileName)
    .then((fileContent) => {
      fileContent = fileContent.toLowerCase();
      fs.writeFile(lowerCaseFileName, fileContent);
      return lowerCaseFileName;
    })
    .then((lowerCaseFileName) => {
      console.log("Lower case file created");
      return lowerCaseFileName;
    })
    .then((lowerCaseFileName) => {
      appendAnyfile(textFilesNamePath, lowerCaseFileName);
      return { lowerCaseFileName, textFilesNamePath };
    })
    .catch((err) => {
      console.log("erros in", err);
    });
}
