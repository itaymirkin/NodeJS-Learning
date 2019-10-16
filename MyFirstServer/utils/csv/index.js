const fs = require('fs');
const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;

var csv =  {
  read: async (path) => {
    fs.readFile(path, function(err, data) {
      if (err) console.log("There was an error: " + err);
      return data
    })
  },

  write: async (path, data) => await fs.writeFileSync(path, data),
  readJson: async (path) => await CSVtoJSON().fromFile(path),
  writeJson: async (path, csvData, jsonFileds) => csv.write(path, JSONtoCSV(csvData, jsonFileds))
}

module.exports = csv;
