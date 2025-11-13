// Write your function here
const countAllCharacters = (str) => {
    if (!str) {
        return {}
    }

    return str
        .split('')
        .reduce((acc, ele) => {
            if (ele in acc) {
                acc[ele] += 1

            } else {
                acc[ele] = 1
            }
            return acc
        }, {})

}
