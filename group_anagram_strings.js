const groupAnagram = (strArray)=>{
    let stringMap = {};
    for(let str of strArray){
        let key = str.split("").sort().join("")
        if(!stringMap[key]) stringMap[key] = [];
        stringMap[key].push(str)
    }

    return Object.values(stringMap)
}

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const key = str.split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
}
console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

//Time complexity O(n * k logk) k is length of string



//Better with O(n * k)
const groupAnagramAscii = (strArray)=>{
    let strMap = new Map()
    for(let str of strArray){
        str = str.toLowerCase();
        const countArr = new Array(26).fill(0)
        for(let ch of str){
            countArr[ch.charCodeAt(0) - 97]++;
        }
        const key = countArr.join("")
        if(!strMap.has(key)) strMap.set(key,[])
        strMap.get(key).push(str)
    }
    return Array.from(strMap.values())
}

console.log(groupAnagramAscii(["eat","tea","tan","ate","nat","bat"]))