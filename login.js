 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAm9I2ICvf1gVn4HQbik2I5WZ07omS3qUY",
  authDomain: "sign-in-ebd82.firebaseapp.com",
  projectId: "sign-in-ebd82",
  storageBucket: "sign-in-ebd82.appspot.com",
  messagingSenderId: "926995653301",
  appId: "1:926995653301:web:3d16915714a241b9fc14fc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function signin() {
  var userEmail = document.getElementById("Email_input").value;

  var userPass = document.getElementById("Password_input").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
  window.location = "index.html";
}