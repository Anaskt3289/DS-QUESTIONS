/*
Given an array arr = [4,5,6,7,8,8,3] return indices of values which sum up the target
*/

const findTargetPair = (array ,target) => {
    const map = new Map()

    for(let i = 0 ; i< array.length ; i++){
        const complement = target - array[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(array[i], i);
    }
    return []
}
let array = [4,5,6,7,8,8,3];
console.log(`Result ::`,findTargetPair(array, 12));