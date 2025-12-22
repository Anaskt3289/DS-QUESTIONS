/*
Two strings are anagrams if:
They contain the same characters
With the same frequency
Order does NOT matter
Examples:
"listen" → "silent"
"rat" → "tar"
*/

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let frequency_map = {};

    // count characters in s
    for (let char of s) {
        if (!frequency_map[char]) frequency_map[char] = 1;
        else frequency_map[char]++;
    }

    // reduce count using t
    for (let char of t) {
        if (!frequency_map[char]) return false; // char not found or freq is 0
        else frequency_map[char]--;
    }

    return true; // all counts matched
}

console.log(`Result ::`, isAnagram("listen","silent"));
