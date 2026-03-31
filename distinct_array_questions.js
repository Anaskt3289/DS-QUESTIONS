// Given an array, count the number of distinct elements.

const countDistinctElements= (array) => {
    let frequency_obj = {}
    for(let element of array){
        frequency_obj[element] = (frequency_obj[element] || 0) + 1;
    }
    let distinct_count = Object.values(frequency_obj).reduce((acc, curr)=>{
        if(curr == 1) acc++;
        return acc;
    },0)

    return distinct_count;
}

console.log("DISTINCT COUNT :: ",countDistinctElements([3,4,5,64,5,3,3,3,3]));


/*
Find the maximum and minimum element in an array.
out put : {max : 5, min: 1}
*/

const findMaxAndMn = (arr) =>{
    let min = arr[0];
    let max = arr[0];
    for(let element of arr){
        if(element < min) min = element;
        if(element > max) max = element;
    }

    return {max, min}
}

console.log("MAX AND MIN :: ",findMaxAndMn([3,4,5,6,6,2,1,80]));

//Find the second maximum element in an array.
const findSecondMaxElement = (arr) =>{
    let max = arr[0];
    let second_max = arr[0];
    for(let element of arr){
        if(element > max){
            second_max = max;
            max = element;
        }
    }

    return second_max;
}

console.log("SECOND MAXIMUM ELEMENT :: ",findSecondMaxElement([3,4,5,60,6,2,1,80]));

/*
Find minimum difference between any two elements.
Input: [4, 9, 1, 32]
Output: 3 (between 1 & 4)
*/
function findMinDifference(arr) {
    if (arr.length < 2) return 0;

    // 1. Sort the array numerically
    // O(n log n) time complexity
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;

    // 2. Linear scan to find the smallest gap
    // O(n) time complexity
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
}

const input = [4, 9, 1, 32];
console.log('MIN DIFF BETWEEN ELEMENTS',findMinDifference(input));


