// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn-jUApdKNH0sI91xC-_Vn3qRCFNmnpMQ",
  authDomain: "netflixgpt-74e88.firebaseapp.com",
  projectId: "netflixgpt-74e88",
  storageBucket: "netflixgpt-74e88.appspot.com",
  messagingSenderId: "641749713788",
  appId: "1:641749713788:web:e44dd1d5bc26255b181af9",
  measurementId: "G-X9T03K4W0L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
