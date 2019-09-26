
const SERVER_URL = "http://localhost:3000/"
const xhtpp = new XMLHttpRequest();



// TODO: Read about sychonize


function login() {
  console.log('someone trying to login');
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;

  serverResponse = sendLoginRequest(username, password);

}
function sendLoginRequest(username, password) {
  loginURL = SERVER_URL + 'login/';
  xhtpp.open("POST", loginURL, true)

  // TODO: read about json - what is it, content-type: application/json and so...
  xhtpp.setRequestHeader("Content-Type", "application/json");

  requestBody = {
    'username': username,
    'password': password
  }

  xhtpp.onload = function () {
      if (xhtpp.readyState === 4) {
          if (xhtpp.status === 200) {
               window.alert(xhtpp.response)
          }
      }
  };

  xhtpp.send(JSON.stringify(requestBody));
}
