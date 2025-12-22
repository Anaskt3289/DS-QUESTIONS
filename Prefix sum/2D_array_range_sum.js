let matrix = [
    [1,4,0,-2,4],
    [4,7,-5,3,4],
    [2,3,5,0,-6],
    [3,4,2,1,-1]
]

let n = matrix.length;
let m = matrix[0].length;
let prefix = Array.from({length : n}, ()=> Array(m).fill(0))

//find out prefix sum array o(n2) , but only have to do first time
for(let i = 0; i < n ; i++){
    for(let j = 0; j < m; j++){
        let top = i > 0 ? prefix[i-1][j] : 0;
        let left = j > 0 ? prefix[i][j-1] : 0;
        let topleft = i > 0 && j > 0 ? prefix[i-1][j-1] : 0 ;
        prefix[i][j] = matrix[i][j] + top + left - topleft;
    }
}

const findSumRange = (i1,j1,i2,j2) =>{
    let top = i1 > 0 ? prefix[i1 - 1][j2] : 0;
    let left = j1 > 0 ? prefix[i2][j1-1] : 0;
    let topleft = i1 > 0 && j1 > 0 ? prefix[i1-1][j1-1] : 0;
    return prefix[i2][j2] - top - left + topleft
}


console.log(findSumRange(1,2,2,4));
