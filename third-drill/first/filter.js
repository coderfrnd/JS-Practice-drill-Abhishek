  function validity(dataset){
    return  (Array.isArray(dataset)) ? dataset : false;
  }
  function checkfn(cb){
      return (typeof cb == "function") ? cb :false
  }

  const items = [1, 2, 3, 4, 5, 5];
  function filter(elements,cb){

      let answer=[]
   
    if(validity(elements) && checkfn(cb)){
        for(let i=0;i<elements.length;i++){
            let x=cb(elements[i])
            if(x) answer.push(x)
          }
        return answer
    }
    else if(!checkfn(cb)) return console.log("Plz pass a valid function");
         
    else return console.log("This is not a array ")
    
    
  }
  console.log( filter(items));
  
