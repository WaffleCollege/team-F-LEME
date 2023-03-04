// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const getAuth = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
firebase.initializeApp(config);

export { getAuth };
