const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

function defaul(obj, defprop){
 
    if(typeof obj == "object"){
        for(let keys in obj){
            if(obj[keys]==defprop){
                obj[keys]=null
            }
        }
        return obj
    }
    else return console.log("This is not a object");
  

}


console.log(defaul(testObject,36));
