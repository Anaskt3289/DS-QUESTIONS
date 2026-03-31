/*
const copy = JSON.parse(JSON.stringify(obj));
*/

function deepCopy(value) {
    // primitives
    if (value !== null || typeof value !== "object") { // type of Array is also object JS
        return value;
    }

    // arrays
    if (Array.isArray(value)) {
        let result = [];
        for (let i = 0; i < value.length; i++) {
            result[i] = deepCopy(value[i]);
        }
        return result;
    }

    // objects
    let result = {};
    for (let key in value) {
        if (value[key]) {
            result[key] = deepCopy(value[key]);
        }
    }
    return result;
}
