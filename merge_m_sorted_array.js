/*
Merge M sorted arrays of size N each → output one sorted array
*/

function mergeTwoArrays(arr1, arr2) {
  let i = 0, j = 0;
  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length){
    merged.push(arr1[i])
    i++
  };
  while (j < arr2.length){
    merged.push(arr2[j])
    j++;
  };

  return merged;
}

function mergeKArrays(arrays) {
  if (arrays.length === 0) return [];

  while (arrays.length > 1) {
    const mergedArrays = [];

    for (let i = 0; i < arrays.length; i += 2) {
      if (i + 1 < arrays.length) {
        mergedArrays.push(
          mergeTwoArrays(arrays[i], arrays[i + 1])
        );
      } else {
        mergedArrays.push(arrays[i]);
      }
    }

    arrays = mergedArrays;
  }

  return arrays[0];
}