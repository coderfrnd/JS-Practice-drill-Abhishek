function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
    let a=0;
   return ()=>{
    if(n>a){
        a++;
     cb(a)
    }
    else return null;
    

   }
  }



  let x = limitFunctionCallCount((a)=>{
    console.log("hello");
    console.log(a);
    
  },2)
  
  x()
  x()
  x()
  
  console.log(x());
  //  x()
  
  