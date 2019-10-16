const csv = require('../csv');


module.exports = (config) => {
  var usersHandler = {};

  usersHandler.addUser = (newUser) => {
    csv.readJson(config.path).then(users => {
      users.push(newUser);
      csv.writeJson(config.path, users, {fields: config.fields});
    })
  }

  usersHandler.getAll = () => {
    return csv.readJson(config.path);
  }

  return usersHandler;
}
