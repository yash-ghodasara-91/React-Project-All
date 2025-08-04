// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHW1neS4qpGj6ZH-EyDXyvw26Shv20BNI",
  authDomain: "task-managers-f2667.firebaseapp.com",
  projectId: "task-managers-f2667",
  storageBucket: "task-managers-f2667.firebasestorage.app",
  messagingSenderId: "751197195791",
  appId: "1:751197195791:web:f08c44c299963910ef1d7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}