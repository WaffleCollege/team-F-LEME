// Import the functions you need from the SDKs you need
import { initializeApp } from "/Users/nanako/Documents/Waffle College/nakko/team-F/team-F-LEME/LEME/node_modules/firebase/compat/app/dist/index.cjs.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD-E4VjfdKF6s5m1K5sjZoC3VrduOQ3uc",
  authDomain: "leme-b7fd5.firebaseapp.com",
  projectId: "leme-b7fd5",
  storageBucket: "leme-b7fd5.appspot.com",
  messagingSenderId: "999397436421",
  appId: "1:999397436421:web:5e5940a9221573b8d6c06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
firebase.initializeApp(config);

export { getAuth };

//新規登録処理
const signUpbotton = document.getElementById('signUp');
signUpbotton.addEventListener('click', function() {
  const mailAddress = document.getElementById('signUpmail').value;
  const password = document.getElementById('signInpass').value;

  firebase.auth().createUserWithEmailAndPassword(mailAddress, password)
  console.log("nice")
  .catch(function(error) {
    alert('登録できません（' + error.message + '）');
  });
});

//変更点

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


//新規登録処理
function signInClick(){
  alert('signInされました。');
}
function signUpClick(){
  document.getElementById("signIn").click();
}
const botan = document.getElementById("signUp");
botan.addEventListener("click", () => {
  alert ("yei");
});

// const signUpbotton = document.getElementById('signUp');
// signUpbotton.addEventListener('click', console.log("hello")); {
  // console.log("hello");
  // const mailAddress = document.getElementById('signUpmail').value;
  // const password = document.getElementById('signInpass').value;

  // firebase.auth().createUserWithEmailAndPassword(mailAddress, password)
  // alert('done')
  // .catch(function(error) {
  //   alert('登録できません（' + error.message + '）');
  // });
  
// });

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