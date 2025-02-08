import {bmwandaudi, carinfo, carmodel, caryear, lastcar, oldercar} from './function.js'
import inventory from './cars.js'

// WITH ONE ARGUMENT IT SHOWS ERROR
carinfo(inventory)
// WITH PROPER ARGUMENT 
carinfo(inventory,33)

// WITH ONE ARGUMENT THIS TIME DATA SET NOT GIVEN SHOWS SAME ERROR
carinfo(33)

// WITHOUT ARGUMENT IT SHOWS ERROR
lastcar()
// WITH PROPER ARGUMENT 
lastcar(inventory)

// WITHOUT ARGUMENT IT SHOWS ERROR
carmodel()
// WITH PROPER ARGUMENT 
// lastcar(inventory)
carmodel(inventory)

// WITH PROPER ARGUMENT 
console.log(caryear(inventory));

//  WITHOUT ARGUMENT IT SHOWS ERROR
console.log(caryear())

// older car
console.log(oldercar())

// WITH PROPER ARGUMENT 
console.log(bmwandaudi(inventory));
