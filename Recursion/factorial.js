//find factorial of n 

function findFactorial(n){
    if(n == 1) return n;
    else 
        return n * findFactorial(n-1);
}

console.log(findFactorial(8));
