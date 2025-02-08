
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

function mapobject(obj,cb){
    let answer =[]
    for(let value in obj){
      answer.push(cb(obj[value]))  
    }
    return answer
}
// mapobject(testObject ,(a)=>{
//      if(typeof a =="number")a=a+2;
//      return a;
// })
console.log(mapobject(testObject ,(a)=>{
    
    if(typeof a == "number")a=a*2;
    if(typeof a == "string") a=a+" Batman";



    return a;

}));
