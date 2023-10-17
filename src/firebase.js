// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSMRn3jmt8uXzo66ZDgvYSXbMJWlDJfno",
  authDomain: "simple-firebase-login-c63b7.firebaseapp.com",
  projectId: "simple-firebase-login-c63b7",
  storageBucket: "simple-firebase-login-c63b7.appspot.com",
  messagingSenderId: "605899456497",
  appId: "1:605899456497:web:38536340fc09f447998e50"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider()
