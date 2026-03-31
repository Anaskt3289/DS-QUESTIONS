/*
Longest Repeating Character Replacement (Medium)
Given string and k replacements allowed,
return longest substring with same character.

"AABABBA", k = 1
Output: 4
*/

function characterReplacement(s, k) {
  let left = 0;
  let maxCount = 0;
  let maxLen = 0;
  const freq = {};

  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;

    maxCount = Math.max(maxCount, freq[s[right]]);

    while ((right - left + 1) - maxCount > k) {
      freq[s[left]]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}