function validity(dataset){
    return  (Array.isArray(dataset)) ? dataset : false;
  }
  function checkfn(cb){
      return (typeof cb == "function") ? cb :false
  }
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

   function find(elements,cb){
    if(validity(elements) && checkfn(cb)){
        for(let i=0 ;i<elements.length;i++){
        let x= cb(elements[i]);
        if(x){
            return x;
        }
        }

    }
    else if(!checkfn(cb)) return console.log("Plz pass a valid function");
         
    else return console.log("This is not a array ")
   }
   const items = [1, 2, 3, 4, 5, 5];
   let x =  find(items,(a)=> (a%2==0)? a : false)
   console.log(x)

   console.log(find(items));
   