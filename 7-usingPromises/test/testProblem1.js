import { createDir, createFile, deleteFiles } from "../problem1.js";
let folderPath = '../testing-folder'
let fileName = 'random.json'


createDir(folderPath)
.then(()=>{
    console.log("Creation of folder done");
})
.then(()=>{
    console.log("creation of file done"); 
    createFile(5,folderPath,fileName)
})
.then(()=>{
    console.log("Deletion done"); 
   deleteFiles(folderPath)
})
.catch((err)=>{
    console.log("error",err); 
})