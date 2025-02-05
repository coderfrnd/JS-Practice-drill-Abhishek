function validity(dataset){
    return  (Array.isArray(dataset)) ? dataset : false;
  }
  function checkfn(cb){
      return (typeof cb == "function") ? cb :false
  
  }

   // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value
  function reduce(elements, cb, startingValue){
    let x=0;
    if(validity(elements) && checkfn(cb)){
        for(let i =0 ;i<elements.length;i++){
            if(startingValue == undefined) startingValue=elements[0]
            startingValue = cb(startingValue,elements[i])
        }
        return startingValue
    }
    else if(!checkfn(cb)) return console.log("Plz pass a valid function");
         
        else return console.log("This is not a array ")
   
  }
  const items = [1, 2, 3, 4, 5, 5];
  let z = reduce(items,(a,b)=> {
    if(b>a) a=b;
    return a;
  })

  console.log(z)

  