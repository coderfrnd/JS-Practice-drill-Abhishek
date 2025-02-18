function validity(dataset){
    return  (Array.isArray(dataset)) ? dataset : false;
  }
  function checkfn(cb){
      return (typeof cb == "function") ? cb :false
  
  }

  function map(items,cb){
    let newarr =[]
    for(let i=0;i<items.length;i++){
        newarr.push(cb(items[i]))
    }
    return newarr
  }

  const items = [1, 2, 3, 4, 5, 5];

 const y = map(items,(a)=>{ 
     
    return  a*2
  })

 
  console.log(y)
  