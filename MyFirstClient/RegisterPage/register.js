
const SERVER_URL = "http://localhost:3000/"

function register() {
  console.log('someone trying to register');
  username = document.getElementById('usernameinput').value;
  password = document.getElementById('passwordInput').value;
  serverResponsed = sendRegisterRequest(username, password);
}

function sendRegisterRequest(username, password) {
  registerURL = SERVER_URL + 'register/';
  let userInsertData = {
  "username" : username,
  "password" : password
  }

  fetch(registerURL, {
  method: 'post',
  headers: {"Content-type": "application/json"},
  body: JSON.stringify(userInsertData)
  })
.then(function(response){
  console.log(response.status);
    console.log("Response json: ", response);
    return response.json();
})
.then(function (res) {
  console.log('Request succeeded with JSON response',res;
  })
.catch(function (error) {
  console.log('Request failed',error);
});
}
