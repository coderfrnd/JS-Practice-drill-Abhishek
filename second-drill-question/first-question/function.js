function checkvalidity(dataset){
    if(!dataset){
        return false
    }
    else return true
}



// Find all users who are interested in playing video games.

export function videogame(dataset, common){
    let answer=[]
  if(checkvalidity(dataset)){
      for(let x in dataset){
         let z = dataset[x].interests
        if(z.find(item => item == common)){
          answer.push(x)
        }
      }
      console.log(answer)
  }
  else{
    console.log('give a proper dataset')
  }
    

}


export function nationality(dataset,country){
  let answer=[]
  if(checkvalidity(dataset)){
    for( let x in dataset){
      if(dataset[x].nationality ==  country){
        answer.push(x)
      }
    }
   return console.log(answer)
  }
  else{
    return  console.log('give a proper dataset')
  }
}

export function qualification(dataset, degre){
  let answer =[]
  if(checkvalidity(dataset)){
    for(let x in dataset){
      if(dataset[x].qualification == degre){
        answer.push(x)
      }
    }
    return console.log(answer)
  }
  else{
    return  console.log('give a proper dataset')
  }

}
export function Programminglanguage(dataset){
  
 let answer={}
 if(checkvalidity(dataset)){
  for(let x in dataset){
    let y = dataset[x].desgination
      if(y.includes('Javascript')){

        if('Javascript' in answer){
          answer['Javascript'].name.push(x);
        }
        else{
          answer['Javascript']={
            name : []
          }
          answer['Javascript'].name.push(x);

        }
       
      }
      else if( y.includes('Golang')){
        if('Golang' in answer){
          answer['Golang'].name.push(x);
        }
        else{
          answer['Golang']={
            name : []
          }
          answer['Golang'].name.push(x);

        }
      }
      else{
        if('Python' in answer){
          answer['Python'].name.push(x);
        }
        else{
          answer['Python']={
            name : []
          }
          answer['Python'].name.push(x);

        }
      }
  }
 return console.log(answer)
 }else{
  return  console.log('give a proper dataset')
}

}