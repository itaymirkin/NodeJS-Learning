const validatorF = require('./validator');
const usersHandlerF = require('./usersHandler');

module.exports = (config) => {
  manager = {}
  usersHandler = usersHandlerF(config);
  validator = validatorF(usersHandler);

  manager.registerUser = (newUser) => usersHandler.addUser(newUser);

  manager.handleNewUser = (newUser) => {
    if (validator.validateNewUser(newUser)) {
      manager.registerUser(newUser);
    }
  }


  return manager;
}
