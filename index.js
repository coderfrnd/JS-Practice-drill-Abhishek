import {arrayOfObjects} from './persons.js'



export function email(num){

    let valid = Array.isArray(num);
     
     

    if(!valid){
        return 'NOT A ARRAY TYPE GIVE A DATA IN ARRAY ONLY'
    }
    else if(num.length<1){
        return "ARRAY IS EMPTY GIVE A VALID ARRAY"
    }
    
  else {
    let abh=[]

    for(let i=0;i<num.length;i++){
        abh.push(num[i].email)
        
       }
       return abh;
  }  
  
    

}

export function hobby(num, dataset){
    if(typeof num == "string"){
        if(/^\d+$/.test(num)){
            num = parseInt(num)
            console.log(num)
        }
       
    }
    if(typeof num == 'number' && num>=0){
        let x=0;
        for(let i=0;i<dataset.length;i++){
            if(num == dataset[i].age){
                x++;
              return  console.log(dataset[i].hobbies)
            }
        }
        if(x==0){
            console.log("Sorry their is not any person of  this age group present")
        }
    }
    else{
        console.log('Give only Integer Value')

}

}

export function australia(dataset){

    if(Array.isArray(dataset)){
        
    }

}





