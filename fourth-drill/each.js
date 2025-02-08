function validity(dataset){
  return  (Array.isArray(dataset)) ? dataset : false;
}
function checkfn(cb){
    return (typeof cb == "function") ? cb :false

}


function each(element , cb){
        if(validity(element) && checkfn(cb)){
            for(let i=0;i<element.length;i++){
                 cb(element[i],i)
            }
        }
        else if(!checkfn(cb)) return console.log("Plz pass a valid function");
         
        else return console.log("This is not a array ")

}

const items = [1, 2, 3, 4, 5, 5];
each(items,(a,b)=>{
     console.log(`Value of array ${a} and index ${b}`)
})

each([{name:"a"}])