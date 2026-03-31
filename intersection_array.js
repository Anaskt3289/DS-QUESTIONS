/*
find the numbers both in arr1 and arr2
nums1 = [1,2,2,1]
nums2 = [2,2]
Output: [2]
*/

function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();

  for (const num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return [...result];
}
