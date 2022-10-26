

//DESCRIPTION:
//Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//None of the arrays will be empty, so you don't have to worry about that!

           // SOLUTION

// STEP1: use a forloop to loop over the array
//STEP2: use splice method to remove the first element each time the loop runs.

//let removeEl = ['keep','remove', 'keep', 'remove','keep','hhh']

// for(let i = 0; i< removeEl.length; i++){
//     removeEl.splice(i+1,1)

//     console.log(removeEl)
   
// }

function rem(arr){
    for(let i = 0; i<arr.length; i++){
        arr.splice(i+1,1)
    }

    return arr
}

console.log(rem(['keep','remove', 'keep', 'remove','keep']))

