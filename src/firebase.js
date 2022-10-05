// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO5XhztPWHvBGemq40DBentGPsJjPN_r0",
  authDomain: "filmer-capstone.firebaseapp.com",
  projectId: "filmer-capstone",
  storageBucket: "filmer-capstone.appspot.com",
  messagingSenderId: "84771882522",
  appId: "1:84771882522:web:114c295dff645ea6c1b3a3",
  measurementId: "G-60W92HXN3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);