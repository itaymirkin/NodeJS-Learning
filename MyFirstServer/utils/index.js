const usersManager = require('./usersManager');

module.exports = (config) => {
  var utils = {}
  utils.usersManager = usersManager(config.users);

  return utils;
}
