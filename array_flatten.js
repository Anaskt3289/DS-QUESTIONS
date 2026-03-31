const array = [0, 1, [2, [3, [4, 5], 6], 7], 8];


function flattenArray(array, depth=1) {
    let flatten = []
	for(let item of array){
        if(Array.isArray(item) && depth > 0){
            let responseArr = flattenArray(item, depth-1)
            flatten.push(...responseArr)
        }else{
            flatten.push(item)
        }
    }

    return flatten;
}

console.log(`Result ::`, flattenArray(array,3));
