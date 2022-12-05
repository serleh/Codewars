/*Complete the square sum function so that it squares each number 
passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

//    SOLUTION
/*Parameter ---> array of Intergers
Return   ----> integer
Example -----> [2,2,2] = 12,  [1,2,2] = 9
PseudoCode ----->1 Create a function that accept an array
        2  Square each number in the array
        3  Sum the result and return the value   */ 


        function squareSum(numbers){
            let result = numbers.map((e)=> e**2)
          let sum = result.reduce((accumulator,currentValue )=> accumulator + currentValue,0 )
           return sum
        }


console.log(squareSum([2,2,2]))