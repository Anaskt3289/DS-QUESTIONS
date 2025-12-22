/* 
Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.
*/

var lengthOfLongestSubstring = function(s) {
  let char_map = {}, length = 0
  for(let char of s){
      if(!char_map[char]){
        char_map[char] = 1;
          length++
        }
}  
return length;
};

console.log(lengthOfLongestSubstring("pwwkew"));
