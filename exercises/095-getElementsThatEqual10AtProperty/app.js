// Write your function here
const getElementsThatEqual10AtProperty = (obj, key) => {
    if (!Array.isArray(obj[key]) || !obj.hasOwnProperty(key) || !obj[key]) {
        return []
    } else {
        return obj[key].filter((ele) => ele === 10)

    }
}