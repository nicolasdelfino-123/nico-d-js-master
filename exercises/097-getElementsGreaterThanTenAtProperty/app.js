// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || !obj[key]) {
        return []
    } else {
        return obj[key].filter((ele) => ele > 10)
    }

}

