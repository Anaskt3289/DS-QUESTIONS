
const removeZerosFromArray = (array)=>{ // time O(n)  - space O(n)
    let result = []
    for(let num of array){
        if(num !== 0) result.push(num)
    }

    return result;
}

const moveZerosToLast = (array)=>{ // time O(n) - space O(1)
    let pos = 0;
    for(let num of array){
        if(num !== 0){
            array[pos] = num;
            pos++
        }
    }

    while(pos < array.length){
        array[pos] = 0;
        pos++
    }
    return array;
}

let array = [4,5,6,0,0,4,0,2,40,0]
console.log(removeZerosFromArray(array),moveZerosToLast(array));
