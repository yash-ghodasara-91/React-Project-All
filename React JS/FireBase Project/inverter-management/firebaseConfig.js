// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUwwiHkNVsgbQydfBeua7D0MfUrmsdtno",
  authDomain: "inverters-project.firebaseapp.com",
  projectId: "inverters-project",
  storageBucket: "inverters-project.firebasestorage.app",
  messagingSenderId: "666838606215",
  appId: "1:666838606215:web:a3ca552e2562dc25567322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}