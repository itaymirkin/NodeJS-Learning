const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const xlsx = require('xlsx')
// const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const utils = require('./utils');

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
    registerDetails=req.body
    username = req.body.username
    password = req.body.password

   CSVtoJSON().fromFile('./users.csv').then(source => {
     registerCheck=false
     source.forEach(existsUser => {
       if (existsUser.username == username) {
          console.log('username is already taken')
          registerCheck=false
          res.status(400).send({message:false, username:false, password:true})
          console.log('itau');
        }
      else if (password.length < 6) {
        console.log('password less than 6 letters')
        registerCheck=false
        res.status(400).send({message:false,username:true, password:false})
      }
      else {
          registerCheck=true
          console.log('co co co co cool')
      }
    })
     if(registerCheck == true) {
       source.push({
           "username": username,
           "password": password
         });
       const  csv = JSONtoCSV(source, { fields: ["username", "password"]})
       fs.writeFileSync("./users.csv", csv)
     }
    })
})

app.post('/login', (req, res, next) => {
  loginDetails = req.body
  loginCheck = false
  let insertUsername =  loginDetails.username
  let insertPassword = loginDetails.password
  loginDetailsCheck =
    { username: insertUsername,
      password: insertPassword }
    CSVtoJSON().fromFile('./users.csv').then(source => {
      source.forEach(existsUser => {
        if(existsUser.username == insertUsername && existsUser.password == insertPassword){
          loginCheck = true
        }
      })
          console.log(loginCheck);
    if (loginCheck == true) {
        res.send('hello '+ username)
      } else {
          res.send('try again')
        }
    })
});




app.listen(3000, () => {
    console.log('Starting server at port 3000');
})
