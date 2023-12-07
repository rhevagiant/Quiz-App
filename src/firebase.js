/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArpwESCQqUehEiUZ59RNCCJIeL_xWwwgg",
  authDomain: "my-quiz-bcc30.firebaseapp.com",
  projectId: "my-quiz-bcc30",
  storageBucket: "my-quiz-bcc30.appspot.com",
  messagingSenderId: "889695848789",
  appId: "1:889695848789:web:7ea0ac583f17e1542887dc",
  measurementId: "G-QSYREDXHTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};