serverurl="http://localhost:3000/"
const SERVER_URL = "http://localhost:3000/"




function login() {
  console.log('someone trying to login');
  username = document.getElementById('usernameinput').value;
  password = document.getElementById('passwordInput').value;
  serverResponse = sendLoginRequest(username, password);
  console.log(username + password);
}


  function sendLoginRequest(username, password) {
  loginURL = SERVER_URL + 'login/'
  let userInsertData = {
    "username" : username,
    "password" : password
  }
  fetch(loginURL, {
    method: 'post',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(userInsertData)
    })
  .then(function(response){
    return response.json();
  })
  .then(function (userInsertData) {
    console.log('Request succeeded with JSON response', userInsertData);
    console.log(userInrtData);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
}
