// import {auth} from "./firebase.js";

//import { initializeApp } from "firebase/app";

ellement = document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
  });

const btn = document.getElementById("signUp");

btn.addEventListener("click", function(){
  window.location.href = "../index.html";
});

// const signUpbtn = document.getElementById("signUp");
// signUpbtn.addEventListener('click', function(e) {


//     // メールアドレス・パスワードを取得
//     const email = document.getElementById('signUpmail').value;
//     const password = document.getElementById('signUppass').value;

//     console.log(signUpmail.value);
    
//     // 新規ユーザーを登録
//     firebase.auth().createUserWithEmailAndPassword(email, password)


// });


//   const signInbtn = document.getElementById("signIn");
//   signInbtn.addEventListener("click", () => {
//     const email = document.getElementById("signInmail");
//     const password = document.getElementById("signInpass");
    
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
    
//             const user = userCredential.user;
//             window.location.replace('index.html');
            
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
            
//           });
//   });


// //firebase機能のインポート
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signOut } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAMoXiHCRIkMWDw1nsYaiVDhJ1fhsVHowA",
//   authDomain: "leme-59360.firebaseapp.com",
//   projectId: "leme-59360",
//   storageBucket: "leme-59360.appspot.com",
//   messagingSenderId: "832193489953",
//   appId: "1:832193489953:web:cd404f8acae88f2829c760"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// //DOMの変数
// const signIn = document.getElementById("signIn");
// const signUp = document.getElementById("singUp");

// signIn.addEventListener('click', () => {
//   firebase.auth().signInWithPopup(provider).then(result => {
//     // GoogleプロパイダのOAuthトークンを取得します。
//     const token = result.credential.accessToken
//     // ログインしたユーザーの情報を取得します。
//     const user = result.user
//   }).catch(function(err) {
//     console.error(err)
//     // エラー処理
//   })
// })

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
    
//     const user = userCredential.user;
    
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
    
//   });

//   //LogIn

 


// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

//   //LogOut

  

// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// // import { getAuth, signInwithEmailAndPassword } from "firebase/auth";

// // // Your web app's Firebase configuration

// // // Initialize Firebase
// // const firebaseApp = initializeApp(firebaseConfig);

// // const auth = getAuth();
// // createUserWithEmailAndPassword(auth, email, password)
// // .then((userCredential) => {
// //   //Signed in
// //   const user = userCredential.user;
// // })
// // .catch((error) => {
// //   const errorCode = error.code;
// //   const errorMessage = error.message;
// // });

// // const auth2 = getAuth();
// // signInwithEmailAndPassword(auth2, email, password)
// // .then((userCredential) => {
// //   //Signed in
// //   const user = userCredential.user;
// // })
// // .catch((error) => {
// //   const errorCode = error.code;
// //   const errorMessage = error.message;
// // });