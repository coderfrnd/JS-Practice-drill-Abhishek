import fs from "fs";
import path from "path";

export function readAnyFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", cb);
}

 export function upperCase(data,upperCaseFileName ,cb) {
  let upperCaseContent = data.toUpperCase();
  writeAnyFile(upperCaseFileName, upperCaseContent, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null, upperCaseFileName);
    }
  });
}
export function lowerCase(data, lowerCaseFileName,cb) {
  let lowerCaseContent = data.toLowerCase();
  lowerCaseContent = lowerCaseContent.split(".").join("\n");
  // let lowerCaseFileName = "lower.txt";
  writeAnyFile(lowerCaseFileName, lowerCaseContent, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null, lowerCaseFileName);
    }
  });
}
export function writeAnyFile(filePath, data, cb) {
  fs.writeFile(filePath, data, cb);
}
export function appendAnyfile(data,fileName ,cb) {
  return fs.appendFile(fileName, data + "\n", cb);
}

  export function sortFile(data,sortedFileName,cb){
  let sortedData = data
  .split(" ")
  .sort()
  .join("\n");
  writeAnyFile(sortedFileName,sortedData,(err)=>{
    if(err)cb(err)
    else{
    cb(null,sortedFileName)
  }  
  })
}

export function deleteAllFile(fileName,cb){
   readAnyFile(fileName,(err,data)=>{
    if(err){
      cb(err)
    }
    else{
  let txtFileName =  data.split("\n")
        txtFileName = txtFileName.filter(ele => ele.trim()!== "") 
        txtFileName.forEach((fileNameIndex)=>{
          fs.rm(fileNameIndex,(err,msg)=>{
            if(err){
              cb(err)
            }
            else{
              cb(null,"done")
            }
          })
   })
    }
   })
  
}