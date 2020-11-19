// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_qfJBgG-ydqkbpza_ePUJbP4mOmCcrc8",
    authDomain: "connect-consultancy.firebaseapp.com",
    databaseURL: "https://connect-consultancy.firebaseio.com",
    projectId: "connect-consultancy",
    storageBucket: "connect-consultancy.appspot.com",
    messagingSenderId: "122462914049",
    appId: "1:122462914049:web:a3c7845f0051d342d7e200",
    measurementId: "G-42MYFW9HEW"
  }


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
function signin(){
    var userEmail = document.getElementById("emailin").value;
    var userPass = document.getElementById("passin").value;
    console.log(userEmail);
     window.location.href = "index3.html";
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error:" + error.message);
        // ...
      });
}

function signup(){
  var email=document.getElementById("emailup").value;
  var password=document.getElementById("passwordup").value;
  var name = document.getElementById("nameup").value;
  
  //Create User with Email and Password
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
      // [END createwithemail]
      // callSomeFunction(); Optional
      // var user = firebase.auth().currentUser;
      var user = firebase.auth().currentUser;
      user.updateProfile({
          displayName: name
      }).then(function() {
        //   window.location.href = "main/main-card.html";
        alert("successfull");
          // Update successful.
      }, function(error) {
          // An error happened.
          alert('error');
      });        
  }, function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
      } else {
          alert(error);
      }
      // [END_EXCLUDE]
  });
}

function logout(){
  firebase.auth().signOut().then(function() {
// Sign-out successful.
console.log('User Logged Out!');
}).catch(function(error) {
// An error happened.
console.log(error);
});
}