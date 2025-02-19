const { default: fs } = await import("fs/promises");
import path from "path";
let filePath = 'lipsum.txt'

// 1. Read the given file lipsum.txt
// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

 



function readFile(filePath){
   return fs.readFile(filePath,"utf-8")
   
}

function upperCase(fileContent,fileName){
     fileContent = fileContent.toUpperCase()
    fs.writeFile(fileName,fileContent)
    return fileContent
     
}





readFile(filePath)
.then((content)=>{
    upperCase(content,'upper.txt') 
}).then((data)=>{
    console.log(data);  
})

// function