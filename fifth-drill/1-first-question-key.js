// import testObject from './objects'
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; 
function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys

 
    let answer =[];
   for(let x in obj){
       answer.push(x)
   }
   return answer

  }

  console.log(keys(testObject));
  
  
  