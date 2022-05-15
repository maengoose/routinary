// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHIcXbdTuIZGUvYXtzqNc8ewKFXoMcSeA",
  authDomain: "routinary-1322c.firebaseapp.com",
  projectId: "routinary-1322c",
  storageBucket: "routinary-1322c.appspot.com",
  messagingSenderId: "894202752748",
  appId: "1:894202752748:web:422adadb8ec8c6aec53fc9",
  measurementId: "G-8FENK06030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
