const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const config = require('./config');
const utils = require('./utils')(config);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  next();
})

app.use(bodyParser());

app.get('/', (req, res) => {
  console.log("got request");
  res.send('hello world');
})


app.post('/register', (req,res) => {
  utils.usersManager.handleNewUser({
    username: req.body.username,
    password: req.body.password
  })
})

// app.post('/login', (req, res, next) => {
//   loginDetails = req.body
//   loginCheck = false
//   let insertUsername =  loginDetails.username
//   let insertPassword = loginDetails.password
//   loginDetailsCheck =
//     { username: insertUsername,
//       password: insertPassword }
//     CSVtoJSON().fromFile('./users.csv').then(source => {
//       source.forEach(existsUser => {
//         if(existsUser.username == insertUsername && existsUser.password == insertPassword){
//           loginCheck = true
//         }
//       })
//           console.log(loginCheck);
//     if (loginCheck == true) {
//         res.send('hello '+ username)
//       } else {
//           res.send('try again')
//         }
//     })
// });
//



app.listen(config.port, () => {
    console.log('Starting server at port ' + config.port);
})
