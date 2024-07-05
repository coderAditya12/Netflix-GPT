// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6wG7IE1cPD4oooAsr5ZMrtpz4TVlWC_k",
  authDomain: "netflixgpt-5e5df.firebaseapp.com",
  projectId: "netflixgpt-5e5df",
  storageBucket: "netflixgpt-5e5df.appspot.com",
  messagingSenderId: "1029729200229",
  appId: "1:1029729200229:web:b4325d58c225cdcea6fe8c",
  measurementId: "G-V3F357DSNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
