// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseApp = initializeApp ({
  apiKey: "AIzaSyAMoXiHCRIkMWDw1nsYaiVDhJ1fhsVHowA",
  authDomain: "leme-59360.firebaseapp.com",
  projectId: "leme-59360",
  storageBucket: "leme-59360.appspot.com",
  messagingSenderId: "832193489953",
  appId: "1:832193489953:web:cd404f8acae88f2829c760"
});

// import { getAuth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword,
//   onAuthStateChanged
//  } from "firebase/auth";

const auth = getAuth(firebaseApp);

// //button
const signupbtn = document.getElementById("signUp");
const signinbtn = document.getElementById("signIn");

// //SignUp
// const signupEmailPassword = async () => {
//   const signupEmail = document.getElementById("signUpmail").value;
//   const signupPassword = document.getElementById("signUppass").value;

//   try{
//     const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
//     console.log(userCredential.user);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// //SignIn
// const signinEmailPassword = async () => {
//   const signinEmail = document.getElementById("signInmail").value;
//   const signinPassword = document.getElementById("signInpass").value;

//   try{
//   const userCredential = await signInWithEmailAndPassword(auth, signinEmail, signinPassword);
//   console.log(userCredential.user);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// signupbtn.addEventListener("click", signupEmailPassword);
// signinbtn.addEventListener("click", signinEmailPassword);

// const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if(user){
//       console.log(user);
//       window.location.replace("index.html");
//     }
//     else{
//       window.location.replace("Sign.html");
//     }
//   });
// }

// monitorAuthState();

// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

//   signinbtn.addEventListener("click", signInWithPopup);