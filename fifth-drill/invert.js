


const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };


function invert (obj){
   let answer = {}
   let key=[]
   let value =[]
   
   if(typeof obj == "object"){
    for(let keys in obj){
        key.push(keys)
        value.push(obj[keys])
    }
    for(let i=0; i<key.length;i++){
     answer[value[i]]=key[i]
    }
 
    return answer
   }
   else return console.log("This is not a object");

  

}

console.log(invert(testObject));
