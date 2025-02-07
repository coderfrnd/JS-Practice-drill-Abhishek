
function counterFactory(countvar){
     return {
        increment: 
            function (){
                countvar++;
                return countvar
            }
        
        ,
        decrement: 
                function (){
                countvar--;
                return countvar
            }
        
     }
}


let x= counterFactory(5)
console.log(x);
console.log(x.increment());
console.log(x.decrement());


