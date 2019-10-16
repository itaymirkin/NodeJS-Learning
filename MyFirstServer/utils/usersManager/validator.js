var validator = (usersHandler) => {
  validator = {}

  validator.validateNewUser = (newUser) => {
    return validator.validateUsername(newUser.username) && validator.validatePassword(newUser.password)
  }

  validator.validateUsername = async (username) => {
    var existsUsers = await usersHandler.getAll();
    existsUsers.forEach(existUser => {
      if (existUser.username == newUser.username)
        console.log("username invalid");
        return false;
      console.log("username valid");
      return true;
    })
  }

  validator.validatePassword = (password) => {
    return password.length >= 6;
  }

  return validator;
}

module.exports = validator;
