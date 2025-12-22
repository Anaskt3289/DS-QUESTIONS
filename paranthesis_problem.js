/*
Given a string , it would be valid only if open bracket has corresponding closing bracket -- STACK
s = '{}()[]' - true
s = '[{()}]' - true
s = '[{] - false
*/

const validateString = (s) => {
    const stack = []
    let map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    for(char of s){
        
        if(map[char]){  
            let last_char = stack.pop()
            if(last_char !== map[char]) return false;
        }else{   
            stack.push(char)
        }
    }
    return stack.length === 0 ;
}

let s = '{[]}(ffff)'
console.log(`String :: ${s}   Result :: ${validateString(s)}`);
