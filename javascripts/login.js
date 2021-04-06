
function login()
{

let email = document.getElementById('email1').value
let password = document.getElementById('password1').value
	
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
	document.cookie="accessToken=" + user.za;
	//console.log(user.za);
	
	//window.location.href = "https://authenticate-101.web.app/secure.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
	console.log(errorCode, errorMessage);
	alert("Incorrect login details! Try again");
  });
}

function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
	  console.log("ver working");
      // ...
    });
  // [END auth_send_email_verification]

}

function logout()
{
firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

window.location.href = "https://authenticate-101.web.app/login.html"
}
