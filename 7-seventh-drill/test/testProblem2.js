import { appendAnyfile, deleteAllFile, lowerCase, readAnyFile, sortFile, upperCase, writeAnyFile} from '../problem2.js'

let fileName = '../lipsum.txt'
let upperCaseFile = 'upper.txt'
let lowerCaseFile = 'lower.txt'
let fileNameFile = 'filename.txt'
let sortedFileName = 'sorted.txt'
 
readAnyFile(fileName,(err,data)=>{
    if(err){
        console.log("Error in read lipsum txt",err);
    }
    upperCase(data,upperCaseFile,(err,upperCaseFileName)=>{ 
        if(err){
            console.log("Error in creation of upper.txt",err);
        }   
        appendAnyfile(upperCaseFileName,fileNameFile,(err)=>{
            if(err){
                console.log("Any Error");
            }
            else{
                lowerCase(data,lowerCaseFile,(err,lowerCaseFileName)=>{
                    if(err){
                        console.log("Error in creation of lower.txt",err);
                    } 
                    else{
                        console.log("done creation of lower case");     
                        appendAnyfile(lowerCaseFileName,fileNameFile,(err)=>{
                            if(err){
                                console.log("Error in append of lower.txt",err);
                            } 
                            else{
                                sortFile(data,sortedFileName,(err,sortedFile)=>{
                                    if(err){
                                        console.log("Error in sorted File Creation",err);
                                    }
                                    else{
                                        console.log("Done Sorted File Creation done");
                                         appendAnyfile(sortedFile,fileNameFile,(err)=>{
                                            if(err){
                                                console.log("Error in append of sorted.txt",err);
                                            } 
                                            else{
                                                console.log("Append of sorted file done");
                                                deleteAllFile(fileNameFile,(err,msg)=>{
                                                    if(err){
                                                        console.log("Error",err)
                                                    }
                                                    else{
                                                          console.log("Deleteion",msg);
                                                          
                                                    }
                                                })   
                                            }
                                         })
                                    }
                                })
                            }
                        })      
                    }
                 })

            }
           

        })
         
          
    })

})