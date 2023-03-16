// Import the functions you need from the SDKs you need
import { initializeApp } from "C:\Users\81806\Documents\Team-f\LEME\node_modules\firebase\compat\app\dist\index.cjs.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMoXiHCRIkMWDw1nsYaiVDhJ1fhsVHowA",
  authDomain: "leme-59360.firebaseapp.com",
  projectId: "leme-59360",
  storageBucket: "leme-59360.appspot.com",
  messagingSenderId: "832193489953",
  appId: "1:832193489953:web:cd404f8acae88f2829c760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
firebase.initializeApp(config);

export { getAuth };

//新規登録処理
const signUpbotton = document.getElementById('signUp');
signUp.addEventListener('click', function(e) {
  const mailAddress = document.getElementById('signUpmail').value;
  const password = document.getElementById('signInpass').value;

  firebase.auth().createUserWithEmailAndPassword(mailAddress, password)
  alert('done')
  .catch(function(error) {
    alert('登録できません（' + error.message + '）');
  });
});

//ログイン処理
login.addEventListener('click', function(e) {
  const mailAddress = document.getElementById('signInmail').value;
  const password = document.getElementById('signUppass').value;
  
  firebase.auth().signInWithEmailAndPassword(mailAddress, password)
  .catch(function(error) {
    alert('ログインできません（' + error.message + '）');
  });
});

//認証状態の確認
firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    //ログイン状態
    alert("ログインに成功しました");
  }else{
    //ログアウト状態
  }
});

// // Initialize Firebase
// const firebaseapp = initializeApp(firebaseConfig);

// import { getAuth, createUserWithEmailAndPassword } from "/firebase/compat/auth";

// const auth = getAuth(firebaseapp);

// //サインアップに必要な変数

// const sEmail = document.getElementById("signUpmail").value;
// const sPassword = document.getElementById("signUppass").value;
// const sBtn = document.getElementById("signUp");

// //サインアップコード
// function signup(){
//   createUserWithEmailAndPassword(auth, sEmail, sPassword)
//   .then((userCredential) => {
    
//     const user = userCredential.user;
//     window.location.replace('index.html');
                
//     })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
                
//   });
// };

// //サインアップのボタンが押されたら、サインアップする
// sBtn.addEventListener("click", signup);
