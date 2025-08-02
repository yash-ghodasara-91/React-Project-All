// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBEaH5OuLiI8maNg52CSuOBVU0pcztB04",
  authDomain: "react-project-536cb.firebaseapp.com",
  projectId: "react-project-536cb",
  storageBucket: "react-project-536cb.firebasestorage.app",
  messagingSenderId: "16501429350",
  appId: "1:16501429350:web:917501d74973adbf8549a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}