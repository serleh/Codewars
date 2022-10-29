//Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

// SOLUTION

function evenOrOdd(n){
    // if(n%2 === 0){
    //     return "Even"
    // }
    // return "Odd"

   return  n%2==0? 'Even': 'Odd'
}


//Solution using arrow function
// let evenOrOdd = (n)=>{return n%2===0? 'Even':'odd'}


console.log(evenOrOdd(50))


