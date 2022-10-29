// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// SOLUTION


// 1-  first- create a function that accept an array
// 2 -  Sort the array to return only positive numbers and save in a new variable
// 3 -  Use reduce to sum of the positive array

function sumOfPositove(arr){
    let positiveSum = arr.filter((e)=> e>0)
    return positiveSum.reduce((acc,c)=> acc + c,0)


    // let total = 0;
    // for(let i = 0; i< arr.length; i++){
    //     if(arr[i] > 0){
    //         total +=arr[i]
    //     }
    // }
    // return total
}

console.log(sumOfPositove([-2,-7,-8,8]))