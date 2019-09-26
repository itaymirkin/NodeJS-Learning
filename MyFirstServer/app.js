const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const xlsx = require('xlsx')




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
         i=req.body
         console.log(i);
         fs.appendFile('accounts.xlsx',"\n"+"0"+"\t"+ i.usernamerR + i.passwordR , function (err) {
           if (err) throw err;
           console.log('Saved!');
         });
   })


app.post('/login', (req, res, next) => {
  loginDetails = req.body


        var workbook = xlsx.readFile('accounts.xlsx');
        var sheet_name_list = workbook.SheetNames;
        var xlData =JSON.stringify((workbook.Sheets[sheet_name_list[0]]));
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        var range = xlsx.utils.decode_range(sheet['!ref']);
        console.log((xlData));



// eD= [JSON.stringify(uEnter)],
// pD= [JSON.stringify(pEnter)],
// console.log(eD+pD);
let uEnter =  loginDetails.username
let pEnter = loginDetails.password

loginCheck =xlData.includes(uEnter+pEnter)
// console.log(xlData.includes(pD))
// checkU= xlData.includes(eD)
// checkP= xlData.includes(pD)


if(loginCheck == true){
  console.log('login seccesful')
  welcomeMessage = 'welcome ' + uEnter
  console.log(uEnter + ' connected');
  
  res.send(welcomeMessage)
} else  {
  console.log('try again')
  res.send('loggin failed ')

        }

})


app.listen(3000, () => {
    console.log('Starting server at port 3000');
})
