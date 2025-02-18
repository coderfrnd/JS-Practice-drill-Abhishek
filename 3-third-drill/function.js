const validdatset = (dataset)=>{   
   return dataset ? dataset : false
}
function idcheck(num){
    if(typeof num == "number") {
        return num;
    }
   else if(/^\d+$/.test(num)){
        num = parseInt(num)
        return num
    }
    else return false
}


// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");


 export function carinfo(dataset, num){
   dataset = validdatset(dataset)
   num = idcheck(num);
 if(dataset && num){
     dataset.forEach(val => {
        if(val.id == num){
            console.log(`Car ${num} is a ${val.car_year} car make ${val.car_make} car modal ${val.car_model}`)
        }    
     });

 }
 else {
    console.log("Maybe You are passing wrong Parameter or Not Passing Parameter")
}

   
}

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:

export function lastcar(dataset){
    dataset = validdatset(dataset)
    
    if(dataset){
        let x = dataset.length;
        console.log(`Last car is a ${dataset[x-1].car_make} ${dataset[x-1].car_model}`)
    }
    else {
        console.log("Maybe You are passing wrong Parameter or Not Passing Parameter")
    }
}

// // ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

export function carmodel(dataset){
    dataset = validdatset(dataset)
    if(dataset){
        dataset.sort((a,b)=> a.car_model.localeCompare(b.car_model))
        return console.log(dataset);
    }
    else {
        console.log("Maybe You are passing wrong Parameter or Not Passing Parameter")
    }
}

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.


let answercaryear = []
export function caryear(dataset){
    dataset = validdatset(dataset)
   
    if(dataset){
        dataset.forEach((val)=>{
            answercaryear.push(val.car_year)
        })
        
        return answercaryear
    }
    else {
        console.log("Maybe You are passing wrong Parameter or Not Passing Parameter")
    }
}

// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
let newcar =[]
export function oldercar(){
    answercaryear.forEach((val) => {
        (val >= 2000) ? newcar.push(val) : null
    })

    return newcar
}

// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
 
 let BMWAndAudi =[]
  export function bmwandaudi(dataset){
    dataset= validdatset(dataset)
    if(dataset){
        dataset.forEach((val) => {
            (val.car_make == 'BMW' || val.car_make == "Audi") ? BMWAndAudi.push(val) : null
        })

        return JSON.stringify(BMWAndAudi, null ,2)
    }
    else {
        console.log("Maybe You are passing wrong Parameter or Not Passing Parameter")
    }

  }
