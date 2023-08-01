
import firebase from 'firebase/app';
import 'firebase/auth';

// Tu configuración de Firebase para la aplicación web
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};


// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function registerUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      const user = userCredential.user;
      console.log("Usuario registrado:", user);
      // ...
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
}

document.getElementById('registerBtn').addEventListener('click', function (event) {
  event.preventDefault();
  registerUser();
});
