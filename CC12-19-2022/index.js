// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. 
// For a beginner kata, you can assume that the input data is always
//  a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

// SOLUTION


// function remove (string) {
//   //coding and coding....

//   let rem = string.split('!') 
//   rem = rem.join('') + '!'
//   return rem;  
// }

// let result = remove("Hi!!!!!!!")
// console.log(result)



// EXAMPLE 2:

/*Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]*/

function countByx(x,n){
        let z = []
        for(let i = 1; i<=n; i++){
              z.push(x*i)
               
        }

        return z
}

console.log(countByx(2,5))