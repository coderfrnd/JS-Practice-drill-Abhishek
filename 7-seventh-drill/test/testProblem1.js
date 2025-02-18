import {deleteFile , createDirectoryAndFile} from '../problem1.js'

let folderName = "testingDirectory"

createDirectoryAndFile(5,folderName,()=>{
    deleteFile(folderName)
})




