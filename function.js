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
              console.log(dataset[i].hobbies)
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
        let k= dataset.length;
        if(k==0){
            return console.log("PLease put a valid array")
        }
        let y=0;
        while(k--){
            if((dataset[k].isStudent==true) && dataset[k].country=="Australia"){
                 console.log(dataset[k].name);
                 
                }
               else y++;
        }
        if(y==dataset.length) return console.log("SORRY NO ONE LIVE IN AUSTRALIA OR MAYBE IS STUDENT NOT TRUE");

    }
    else return console.log("ARRAY IS EMPTY GIVE A VALID ARRAY")

}

export function city(num,dataset){
    let valid = Array.isArray(dataset)

     if(valid){
        if(typeof num == "string"){
            if(/^\d+$/.test(num)){
                num=parseInt(num);
                
            }
            else return console.log("DONT MIX SPECIAL CHAR IN PLACE NUMBER")
        }
        //  console.log(num)
        if((typeof num == "number") && num >=0 && num < dataset.length){
            return console.log(dataset[num].city)
        }
        else return console.log(" YOU GIVE VALUE OUT OF BOND ")

        
     }
     else {
        return console.log("ARRAY IS EMPTY GIVE A VALID ARRAY")
     }
}




