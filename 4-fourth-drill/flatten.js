const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'



let answer =[]
let tripplenested = [[1,[2],[3],[4],5],6]

function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
let final =[]
    for(let i=0 ;i<elements.length;i++){
            if(typeof elements[i] == "number"){
                // answer.push(elements[i])
                final.push(elements[i])
            }
            else {
                // final.push(flatten(elements[i]))
                // return back ho rahaa hai yahaa 
                let returnarray = flatten(elements[i])
                for(let i=0 ;i<returnarray.length;i++){
                    final.push(returnarray[i]) 
                }
            }
            }
    return final
}





answer = flatten(nestedArray)

console.log(answer);
console.log(flatten(tripplenested));

