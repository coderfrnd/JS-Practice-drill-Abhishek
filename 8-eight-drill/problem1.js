const { default: fs } = await import("fs/promises");
import path from "path";

// 1. Create a directory of random JSON files
// 2. Delete those files simultaneously

let fileName = "random.json";
export function createDir(folderpath, fileName) {
  fs.mkdir(folderpath, { recursive: true })
    .then(() => {
      console.log("Creation done");
    })
    .then(() => {
      console.log("Done");
      createFile(100, folderpath, fileName);
    })
    .then(() => {
      deleteFiles(folderpath);
    })
    .catch((err) => {
      throw err;
    });
}

function createFile(numofFile, path, fileName) {
  for (let index = 0; index < numofFile; index++) {
    fs.writeFile(`${path}/${index + 1}${fileName}`, "creation of file" + index);
  }
}

function deleteFiles(folerPath) {
  fs.readdir(folerPath)
    .then((data) => {
      data.forEach((filePerIndex) => {
        let filePath = path.join(folerPath, filePerIndex);
        fs.unlink(filePath);
      });
    })
    .catch((err) => {
      throw err;
    });
}
