var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    let merged = [];

    while (merged.length < (nums1.length + nums2.length)) {
        if(nums1[i] == undefined || nums2[j] == undefined){
            let data = null
            if(nums1[i] !== undefined){
                merged.push(nums1[i]);
                i++;
            }else if(nums2[j] !== undefined){
                merged.push(nums2[j]);
                j++;
            }
        }
        else if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0
        ? (merged[mid - 1] + merged[mid]) / 2
        : merged[mid];
};



console.log(findMedianSortedArrays([0,0], [0,0]));
