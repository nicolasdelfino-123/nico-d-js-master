// Write your function here
const areValidCredentials = (name, pass) => {
    if (name.length >= 3) {
        return true
    } if (pass.length >= 8) {
        return true
    } else {
        return false
    }
}