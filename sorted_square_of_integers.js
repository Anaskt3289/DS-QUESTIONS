/*
"Write a function that given a sorted array of integer values, returns a sorted array of those values' squares. For example:

squares([-8,0,1,2,3,4,8,10]);
// Should return [0, 1, 4, 9, 16, 64, 64, 100]"
*/

function sortSquares(arr) {
    let n = arr.length;
    let left = 0;
    let right = n - 1;
    let result = new Array(n);
    let idx = n - 1;

    while (left <= right) {
        let leftSq = arr[left] * arr[left];
        let rightSq = arr[right] * arr[right];

        if (leftSq > rightSq) {
            result[idx] = leftSq;
            left++;
        } else {
            result[idx] = rightSq;
            right--;
        }

        idx--;
    }

    return result;
}

console.log(`Result ::`, sortSquares([-8,0,1,2,3,4,8,10]));
