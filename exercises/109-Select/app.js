// Write your function here
const select = (arr, obj) => {
    return arr.reduce((acc, ele) => {
        if (ele in obj) {
            acc[ele] = obj[ele]
        }
        return acc
    }, {})
}