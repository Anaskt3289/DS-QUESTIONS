var longestPalindrome = function(s) {
    let largest_string = ""
    let current_string = ""
    let char_map = {}
    for(let char of s){
        current_string += char;
        if(char_map[char]){
            if(largest_string.length > current_string.length) con
        }else{
            char_map[char] = 1
        }
    }
};

console.log(longestPalindrome("babaeed"));
