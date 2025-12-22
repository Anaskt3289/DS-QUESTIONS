let arr = [3,5,6,-5,43,-4,9,0,4]

//transform array into prefix sum array
for(let i = 1; i < arr.length ;  i++){
    arr[i] += arr[i-1] 
}

console.log("The prefix array is ::", arr);

function findSumRange(pos1, pos2){
    if(pos1 == 0) return arr[pos2];
    return arr[pos2] - arr[pos1 - 1]
}


console.log(findSumRange(1,5),'Pos1 = 1 & Pos2 = 5');
console.log(findSumRange(0,8),'Pos1 = 0 & Pos2 = 8');
console.log(findSumRange(6,8),'Pos1 = 6 & Pos2 = 8');
console.log(findSumRange(0,1),'Pos1 = 0 & Pos2 = 1');
console.log(findSumRange(3,6),'Pos1 = 3 & Pos2 = 6');
