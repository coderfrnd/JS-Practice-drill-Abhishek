function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.
    let obj = {

    }
    return (...args)=>{
          let x= JSON.stringify([...args])
        //   obj[x]=cb(...args);
        console.log(x);
          if(obj[x]){
            console.log("from mem");
            return obj[x]
          }
          else {
            console.log("from fun");
            obj[x]=cb(...args)
            return obj[x]
          }
    }
  }

  let a= cacheFunction((a,b)=>{
  return a+b;
  })
  console.log(a(4,5));
  console.log(a(4,5));
  
  console.log(a(4,5));
  console.log(a(4,6));
  console.log(a(4,5));
  console.log(a(4,5));
