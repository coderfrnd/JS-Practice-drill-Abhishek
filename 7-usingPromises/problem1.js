const { default: fs } = await import("fs/promises");
import path from "path";

// 1. Create a directory of random JSON files
// 2. Delete those files simultaneously

let fileName = "random.json";
export function createDir(folderpath, fileName) {
 return fs.mkdir(folderpath, { recursive: true })
}

 export function createFile(numofFile, path, fileName) {
  for (let index = 0; index < numofFile; index++) {
    fs.writeFile(`${path}/${index + 1}${fileName}`, "creation of file" + index);
  }
}

export function deleteFiles(folerPath) {
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
