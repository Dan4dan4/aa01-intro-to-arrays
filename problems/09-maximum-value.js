/*
Define a function called maxVal that takes in an array of numbers as a
parameter. The function should return the largest number of the array. If the
array is empty, the function should return null.
*/

// Your code here 

function maxVal(array){
    if (array.length === 0){
        return null
    }
    high= array[0]
    for (let i =0; i < array.length; i++){
        if (high < array[i]){
            high = array[i]
        }
    }
    return high
}
console.log(maxVal([4, 6, 3, 5, 42, 4])); // 42
console.log(maxVal([-2, -3, -7, 3 ]));    // 3
console.log(maxVal([]));                  // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxVal;