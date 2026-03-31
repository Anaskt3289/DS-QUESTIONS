/*
Count Occurrences of Anagrams (Classic)
s = "forxxorfxdofr"
p = "for"
Output: 3
*/

function countAnagrams(s, p) {
  let count = 0;
  let left = 0;
  const pFreq = {};
  const windowFreq = {};

  for (let char of p) {
    pFreq[char] = (pFreq[char] || 0) + 1;
  }

  for (let right = 0; right < s.length; right++) {
    windowFreq[s[right]] = (windowFreq[s[right]] || 0) + 1;

    if (right - left + 1 > p.length) {
      windowFreq[s[left]]--;
      if (windowFreq[s[left]] === 0) {
        delete windowFreq[s[left]];
      }
      left++;
    }

    if (JSON.stringify(windowFreq) === JSON.stringify(pFreq)) {
      count++;
    }
  }

  return count;
}