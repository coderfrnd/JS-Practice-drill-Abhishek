import {bmwandaudi, carinfo, carmodel, caryear, lastcar, oldercar} from './function.js'
import inventory from './cars.js'

carinfo(inventory)
carinfo(inventory,33)
lastcar(inventory)
carmodel(inventory)
console.log(caryear(inventory));
console.log(oldercar())

console.log(bmwandaudi(inventory));
