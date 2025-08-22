// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhBnGvi1MmYG822JI6RFDzE6xjcb_EUQo",
  authDomain: "az02-38c0c.firebaseapp.com",
  projectId: "az02-38c0c",
  storageBucket: "az02-38c0c.firebasestorage.app",
  messagingSenderId: "501504498406",
  appId: "1:501504498406:web:2ec9706432bcdb1005f927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider;
export {auth,db,provider} 