const { default: fs } = await import("fs/promises");
import path from "path";

// 1. Create a directory of random JSON files
// 2. Delete those files simultaneously

export function createDir(folderpath, fileName) {
  return fs.mkdir(folderpath, { recursive: true }).then(() => {
    return { folderPath, fileName };
  });
}

export function createFile(numofFile, folderPath, fileName) {
  for (let index = 0; index < numofFile; index++) {
    fs.writeFile(
      `${folderPathPath}/${index + 1}${fileName}`,
      "creation of file" + index
    );
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
