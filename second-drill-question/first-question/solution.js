import users from './users.js';  

import {nationality, Programminglanguage, qualification, videogame} from './function.js'


// WITH PROPER ARGUMENTS
videogame(users,"Video Games")
// WITH ONE AGRUMENT 
videogame(users)
// WITH NO ARGUMENT
videogame()

// WITH PROPER ARGUMENTS
nationality(users,"Germany")
// WITH ONE AGRUMENT 
nationality(users)
// WITH NO ARGUMENT
nationality()

// WITH PROPER ARGUMENTS
qualification(users,"Master")
// WITH ONE AGRUMENT 
qualification(users)
// WITH NO ARGUMENT
qualification()

// WITHOUT ARGUMENT
Programminglanguage()
// WITH ARGUMENT 
Programminglanguage(users)