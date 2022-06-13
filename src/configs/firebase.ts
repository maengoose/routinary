import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDHIcXbdTuIZGUvYXtzqNc8ewKFXoMcSeA",
  authDomain: "routinary-1322c.firebaseapp.com",
  projectId: "routinary-1322c",
  storageBucket: "routinary-1322c.appspot.com",
  messagingSenderId: "894202752748",
  appId: "1:894202752748:web:422adadb8ec8c6aec53fc9",
  measurementId: "G-8FENK06030"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: 'BMv6gULZnhzKgDyb7TiQ59kGDS3EiTUNo7VnGoeEDODg55Yq2AW_ee6cLLsbZ09ZECa8OTJjE-CrsNE1NbvCG2E' })
  .then((currentToken) => {
    if (currentToken) {
      console.log('currentToken', currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
