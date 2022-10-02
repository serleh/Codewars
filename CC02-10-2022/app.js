//Given an array of integers, return a new array with each value doubled.

// For example:
// [1,2,3] --> [2,4,6]

   // SOLUTION

//P: Is it always going to return integers? Are we going to be given
// any special characters? An empty array ever?

//R: Return a new arr with each value doubled
//E: if we are given [2,3,4] return [4,6,8]
 //    if we are given [4,5,6] return [8,10,12]
 //   if we are given [2,22]  return [4,44]

 //PSEUDO CODE:

 // Make a function that takes in new array
 function doubled(arr){
    return arr.map(e =>e*2)
 }
 // map into the array and multiply each element by 2, also return lol

 //[1,2,3].map(1 = 1*2) -> 2
 //           (2 = 2*2) -> 4
 //             (3 = 3*2) -> 6
 //             [2,4,6] 

 console.log(doubled([1,2,3]),[2,4,6])