/*
Maximum Sum Subarray of Size K (Fixed Window)
arr = [2,1,5,1,3,2]
k = 3
*/

const masSubArraySum = (arr, k)=> {
    let windowSum= 0, maxSum = 0;
    for(let i=0; i<arr.length; i++){
        windowSum += arr[i]
        
        if(i >= k){
            windowSum = windowSum - arr[i-k]
        }

        if(i >= k-1){
            maxSum = Math.max(maxSum, windowSum)
        }
    }
    return maxSum
}

console.log(masSubArraySum([2,1,5,1,3,2],3))