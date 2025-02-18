import fs from "fs";
import path from "path";

export function createDirectoryAndFile(fileNum, folderName, deleteFilecb) {
  return fs.mkdir(`${folderName}`, { recursive: true }, (err) => {
    if (err) {
      console.log("something went wrong", err);
    } else {
      console.log("creation successfull Directory");
      for (let index = 1; index <= fileNum; index++) {
        fs.writeFile(
          `${folderName}/${index}-random.json`,
          JSON.stringify(`${index}`, null, 2),
          (err) => {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("File creation Done");
            }
          }
        );
      }
      deleteFilecb();
    }
  });
}

export function deleteFile(filename) {
  fs.readdir(`${filename}`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let lengthOfFolder = data.length;
      let index = 0;
      while (lengthOfFolder--) {
        let filePath = path.join(filename, data[index]);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("error", err);
          } else {
            console.log("File Deletion Done",filePath);
          }
        });
        index++;
      }
    }
  });
}
