
const SERVER_URL = "http://localhost:3000/"
const xhtpp = new XMLHttpRequest();



// TODO: Read about sychonize


function register() {
  console.log('someone trying to register');
  usernameR = document.getElementById('username1').value;
  passwordR = document.getElementById('password1').value;
  serverResponsed = sendRegisterRequest(usernameR, passwordR);
}






function sendRegisterRequest(usernameR, passwordR) {
  registerURL = SERVER_URL + 'register/';
  xhtpp.open("POST", registerURL, true)

  // TODO: read about json - what is it, content-type: application/json and so...
  xhtpp.setRequestHeader("Content-Type", "application/json");


  xhtpp.onload = function () {
      if (xhtpp.readyState === 4) {
          if (xhtpp.status === 200) {
              window.alert(xhtpp.response)
          }
      }
  };

  id = {
    'usernamerR': usernameR ,
    'passwordR': passwordR
  }

  xhtpp.send(JSON.stringify(id));

}
