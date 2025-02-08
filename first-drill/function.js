
// REPETATIVE FUNCTION
 function arg(dataset){
    if(!dataset){
        return false
    }
    return true
 }
 function validarrayornot(dataset){
    if(Array.isArray(dataset)){
        return true
    }
    else false
 }
function arraylength(dataset){
    if(dataset.length == 0){
        return false
    }
    else return true;
}
function numvalid(num){
    if(typeof num == "string"){
        if(/^\d+$/.test(num)){
            return num = parseInt(num)
         }
         else return false
    }
     else if( typeof num == "number"){
        
        return num;
     }
     else return false
}
//   till here 

// Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
export function email(dataset){
   
    if(arg(dataset)){
        if(validarrayornot(dataset)){
            if(!arraylength(dataset)) return console.log("This is a Empty Array")
          
                dataset.forEach((val)=>{
                    console.log(`Email : ${val.email}`)
                })
            return;

        }
        else console.log("This is not a array")
    }
    else  return console.log("There is not any parameter")
   
}


// Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
export function hobby(num, dataset){
   if(arg(dataset)){
    if(validarrayornot(dataset)){
        if(!arraylength(dataset)) return console.log("This is a Empty Array")
           
            num = numvalid(num);
           if(num){
            dataset.forEach((val)=>{
                if(val.age == num){
                    console.log(`Hobbies:  ${val.hobbies}`)
                }
            })
           }
           else return  console.log("DON'T MIX SPECIAL CHAR IN PLACE NUMBER")
    }else console.log("This ia not a array")
   }
   else return console.log("There is not any parameter")
}

//  Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

export function australia(dataset, nation){

    if(arg(dataset)){
        if(validarrayornot(dataset)){
            if(!arraylength(dataset)){
                return console.log("This is a Empty Array")
            }
            let x=0;
            dataset.forEach((val)=>{
                if(val.isStudent ==  true && val.country == nation){
                    console.log(`THE STUDENT NAME IS  :   ${val.name} `)
                    x++;
                }
            })
            if(x==0) return console.log("Sorry there is not matching anyone")
        }
        else return console.log("This ia not a array")
    }
    else return console.log("There is not any parameter")
   

}
// Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

export function city(num,dataset){
   if(arg(dataset)){
    if(validarrayornot(dataset)){
        if(!arraylength(dataset))  return console.log("This is a Empty Array")
            num = numvalid(num)
        // console.log(num)
        if(num >=0 && num < dataset.length){
           
               
                console.log(`NAME: ${dataset[num].name} City: ${dataset[num].city}`)
          
        }
        else return console.log("Maybe you are giving out of the bound value or not giving proper char")
    }
    else return console.log("This is not a array ")
   }
   else return console.log("There is not a parameter")
}




//  Implement a loop to access and print the ages of all individuals in the dataset.

export function ages (dataset){

   if(arg(dataset)){
    if(validarrayornot(dataset)){
        if(!arraylength(dataset)){
       return console.log("This is empty array ")
        }
        dataset.forEach((val)=>{
            console.log(`AGES : ${val.age}`)
        })
    }
    else return console.log("This is not a array ")
   }
   else return console.log("There is not a parameter")

}

// Create a function to retrieve and display the first hobby of each individual in the dataset.

export function firsthobby (dataset){
    if(arg(dataset)){
       if(validarrayornot(dataset)){
        if(!arraylength(dataset)){
            return console.log("This is a Empty Array")
        }
        dataset.forEach((val)=>{
            return console.log("first-hobby :", val.hobbies[0])
        })
       }
       else return console.log("This is not array")
    }else{
        return console.log("There is not any parameter")
    }
}

//  Write a function that accesses and prints the names and email addresses of individuals aged 25.

export function nameandemail(num,dataset){
     if(arg(dataset)){
        if(validarrayornot(dataset)){
            if(!arraylength(dataset)) return console.log("This is a Empty Array")

              if(numvalid(num)){
                num = numvalid(num)
              
                dataset.forEach((val)=>{
                    if(val.age==num){
                         console.log(`Name : ${val.name}`, `Email : ${val.email}`)
                    }
                })

                return
              }
              else return console.log("DON'T MIX SPECIAL CHAR IN PLACE NUMBER")
                 
        }
        else return console.log("This is not array")
     }
     else{
       return console.log("There is not any parameter")
    }

}

// Implement a loop to access and log the city and country of each individual in the dataset.

export function cityandcountry(dataset){
     if(arg(dataset)){
        if(validarrayornot(dataset)){
               if(!arraylength) return console.log("This is a Empty Array")

                dataset.forEach((val)=>{
                    console.log(`Name : ${val.city} ,  Email : ${val.email}`)
                })
                return
        }
        else return console.log("This is not array")
     }
     else{
        return console.log("There is not any parameter")
     }
}
