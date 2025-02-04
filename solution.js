
import { email,hobby,australia,city, ages, firsthobby,nameandemail, cityandcountry} from "./function.js";
// import {india} from './function.js'
import {arrayOfObjects} from './persons.js'

let valid = Array.isArray(arrayOfObjects);


// WITHOUT ARGUMENT EMAIL FN 
email() 
// WITH OBJECT ARGUMENT WITH EMAIL FN
email({})
// WITH EMPTY ARRAY WITH ARGUMENT FN
email([])
// WITH PROPER DATASET
email(arrayOfObjects)


// prints the hobbies of individuals with a specific age, give any value with age

// WITHOUT ARGUMENT hobby FN 
hobby() 
// WITH OBJECT ARGUMENT WITH hobby FN
hobby(30,{})
// WITH EMPTY ARRAY WITH ARGUMENT FN
hobby(30,[])
// WITH PROPER DATASET
hobby(30, arrayOfObjects)
// if someone put age in specific string 
hobby('30' , arrayOfObjects)
// if someone put num in mix with special char like '30&T67te' it shows error
hobby('30%e$' , arrayOfObjects)

// extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

// WITHOUT ARGUMENT  FN 
australia() 
// WITH OBJECT ARGUMENT WITH  FN
australia,({},'USA')
// WITH EMPTY ARRAY WITH ARGUMENT FN
australia([],'hdkjhkhwuh')
// WITH PROPER DATASET
australia( arrayOfObjects, 'Australia')

//  when name is not matched 
australia(arrayOfObjects, 'MADRID')

// The name and city of the individual at the index position 3 in the dataset.


// WITHOUT ARGUMENT  FN 
city() 
// WITH OBJECT ARGUMENT WITH  FN
city(3,{})
// WITH EMPTY ARRAY WITH ARGUMENT FN
city(3,[])
// WITH PROPER DATASET
city( 3,arrayOfObjects)

//  WHEN YOU GIVE A OUT OF BOUND VALUE 
city(363,arrayOfObjects)

// the ages of all individuals in the dataset

// / WITHOUT ARGUMENT  FN 
ages() 
// WITH OBJECT ARGUMENT WITH  FN
ages({})
// WITH EMPTY ARRAY WITH ARGUMENT FN
ages([])
// WITH PROPER DATASET
ages(arrayOfObjects)

// the first hobby of each individual in the dataset

// WITHOUT ARGUMENT  FN 
firsthobby() 
// WITH OBJECT ARGUMENT WITH  FN
firsthobby({})
// WITH EMPTY ARRAY WITH ARGUMENT FN
firsthobby([])
// WITH PROPER DATASET
firsthobby(arrayOfObjects)

// the names and email addresses of individuals aged 25.

// WITHOUT ARGUMENT  FN 
nameandemail() 
// WITH OBJECT ARGUMENT WITH  FN
nameandemail(25,{})
// WITH EMPTY ARRAY WITH ARGUMENT FN
nameandemail(25,[])
// WITH PROPER DATASET
nameandemail(25,arrayOfObjects)
// If someone put a age in string formate
nameandemail('25',arrayOfObjects)
// if someone try to mix special char in string or without num
nameandemail('25*&', arrayOfObjects)

// city and country of each individual in the dataset.

// WITHOUT ARGUMENT  FN 
cityandcountry() 
// WITH OBJECT ARGUMENT WITH  FN
cityandcountry({})
// WITH EMPTY ARRAY WITH ARGUMENT FN
cityandcountry([])
// WITH PROPER DATASET
cityandcountry(arrayOfObjects)