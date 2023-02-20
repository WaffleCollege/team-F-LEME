ellement = document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
  });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signInwithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  //Signed in
  const user = userCredential.user;
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});

const auth2 = getAuth();
signInwithEmailAndPassword(auth2, email, password)
.then((userCredential) => {
  //Signed in
  const user = userCredential.user;
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});