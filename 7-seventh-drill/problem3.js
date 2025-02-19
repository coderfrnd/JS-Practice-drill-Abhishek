import fs from "fs";
import path from "path";

/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

 export function readTheFile(folderPath,cb) {
 readAnyFile( folderPath,(err, data) => {
    if (err) {
      console.log("Something wrong in reading file of lipsum.txt", err);
    } else {
      upperCase(data, (err, upperCaseFileName) => {
        if (err) {
          console.log("Error in Upper Case File name", err);
        } else {
          console.log("File Creation done", upperCaseFileName);
          appendAnyfile(upperCaseFileName, (err) => {
            if (err) {
              console.log("Error in Upper Case File name", err);
            } else {
              readAnyFile(upperCaseFileName, (err, data) => {
                if (err) {
                  console.log("Error upper case file not reading sucessful", err);
                } else {
                  lowerCase(data, (err, lowerCaseFileName) => {
                    if (err) {
                      console.log("Error", err);
                    } else {
                      console.log("Suceessful creating lowercase and write", lowerCaseFileName);
                      appendAnyfile(lowerCaseFileName, (err) => {
                        if (err) {
                          console.log("Error in append file name", err);
                        } else {
                          console.log("Done append lower Case");
                          readAnyFile(upperCaseFileName, (err, data) => {
                            if (err) {
                              console.log("Error", err);
                            } else {
                              console.log("Read File done for sorted Data");

                              let sortedData = data
                                .split(" ")
                                .sort()
                                .join("\n");
                              let sortedDataFileName = "sortedData.txt";
                              writeAnyFile(
                                sortedDataFileName,
                                sortedData,
                                (err) => {
                                  if (err) {
                                    console.log("Error in writing Sorted Data File", err);
                                  } else {
                                    console.log("Done sorted data stored");
                                    appendAnyfile(sortedDataFileName, (err) => {
                                      if (err) {
                                        console.log("error in appending", err);
                                      } else {
                                        console.log("done");
                                        readAnyFile('filename.txt',(err,data)=>{
                                          if(err){
                                            console.log("Error in reading filename.txt",err);
                                          }
                                          else{
                                            console.log("Reading done");
                                            let fileName = data.split("\n")
                                             fileName = fileName.filter(ele => ele.trim()!=="")
                                            fileName.forEach((fileNameIndex)=>{
                                              fs.rm(fileNameIndex,(err)=>{
                                                if(err){
                                                  console.log("Something wrong in Deleteing",err);
                                                }
                                                else{
                                                  console.log("Done Deliting",fileNameIndex);
                                                  
                                                }
                                              })
                                            })
                                          }
                                        })
                                      }
                                    });
                                  }
                                }
                              );
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

function readAnyFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", cb);
}

function upperCase(data, cb) {
  let upperCaseContent = data.toUpperCase();
  let upperCaseFileName = "upperCase.txt";
  writeAnyFile(upperCaseFileName, upperCaseContent, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null, upperCaseFileName);
    }
  });
}
function lowerCase(data, cb) {
  let lowerCaseContent = data.toLowerCase();
  lowerCaseContent = lowerCaseContent.split(".").join("\n");
  let lowerCaseFileName = "lower.txt";
  writeAnyFile(lowerCaseFileName, lowerCaseContent, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null, lowerCaseFileName);
    }
  });
}
function writeAnyFile(filePath, data, cb) {
  fs.writeFile(filePath, data, cb);
}
function appendAnyfile(data, cb) {
  return fs.appendFile("filename.txt", data + "\n", cb);
}
