// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }

    let newArr = []
    arr = obj[key]

    arr.forEach((ele) => {
        if (ele < 100) {
            newArr.push(ele)
        }
    })
    return newArr
}