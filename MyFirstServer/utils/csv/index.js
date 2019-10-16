const fs = require('fs');
const CSVtoJSON = require('csvtojson');


module.exports = {
  read: async (path) => {
    return await fs.readFile(path);
  },

  readJson: async (path) => {
    return await CSVtoJSON().fromFile(path)
  }
}
