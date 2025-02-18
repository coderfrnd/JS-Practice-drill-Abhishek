
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const arr=[]
function pairs(obj, cb){

    let answer =[]
    if(typeof obj == "object"){
        for( let keys in obj){
            let ans =[];
            ans.push(keys)
            ans.push(obj[keys])
            answer.push(ans)
        }
        return answer
    }
    else return console.log("This is not a object");
    
  
   
}
// let a 

console.log(pairs(testObject));
// console.log(pairs(a));

