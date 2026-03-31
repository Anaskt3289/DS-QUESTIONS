/*
Minimum Size Subarray Sum (Very Popular)
Find smallest subarray whose sum ≥ target.
arr = [2,3,1,2,4,3]
target = 7
Output: 2 → [4,3]
*/

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}