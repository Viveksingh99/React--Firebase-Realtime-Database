// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ81tM39_xF910920GaPcSH5gvQA8Aih4",
  authDomain: "react-firebase-store-fe1a9.firebaseapp.com",
  projectId: "react-firebase-store-fe1a9",
  storageBucket: "react-firebase-store-fe1a9.appspot.com",
  messagingSenderId: "1062164114034",
  appId: "1:1062164114034:web:7d45fb0e643c58ee7e30eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)