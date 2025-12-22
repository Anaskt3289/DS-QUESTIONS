const removeDuplicatesAndKeepOneOccurance = (str)=>{
    const strArray = str.split("")
    const data_set = [...new Set(strArray)]
    return data_set.join('');
}

console.log("Result with only one occurance ::", removeDuplicatesAndKeepOneOccurance("aabcddeeffffg"));


const removeDuplicates = (str)=>{
    const countMap = {}
    let result= ""
    for(let s of str){
        countMap[s] = (countMap[s] || 0) + 1 ;
    }

    for(let s of str){
        if(countMap[s] == 1) result += s
    }

    return result
}

console.log("Result with only one occurance ::", removeDuplicates("aabcddeeffffg"));

const findFirstNonRepeatingChar = (str)=>{
    const countMap = {}
    for(let s of str){
        countMap[s] = (countMap[s] || 0) + 1 ;
    }

    for(let s of str){
        if(countMap[s] == 1) return s;
    }

    return null;
}

console.log("Result with first non repeatative charecter ::", findFirstNonRepeatingChar("aabcddeeffffg"));
