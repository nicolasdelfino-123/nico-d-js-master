// Write your function here
/* const computeAverageOfNumbers = (array) => {
    let total = 0
    for (i = 0; i < array.length; i++) {
        total += array[i]

    } if (array.length === 0) {
        return 0
    }
    const promedio = total / array.length
    return promedio
} */

const computeAverageOfNumbers = (nums) => {
    if (nums.length === 0) return 0;

    const total = nums.reduce((acc, num) => acc + num, 0);
    return total / nums.length

}