// Write your function here
function areValidCredentials(user, pass) {
  let contraseña = pass.length;
  let usuario = user.length;
  if (contraseña <= 8) {
    return false;
  } else if (usuario <= 3) {
    return false;
  } else {
    return true;
  }
}
