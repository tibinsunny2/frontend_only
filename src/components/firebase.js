// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg3tOIY5YAMAbO1wOWPQktuTIVaGbxxa0",
  authDomain: "venturevista-48a4b.firebaseapp.com",
  projectId: "venturevista-48a4b",
  storageBucket: "venturevista-48a4b.appspot.com",
  messagingSenderId: "497886774994",
  appId: "1:497886774994:web:d1e5cff299b0639824cf0b",
  measurementId: "G-XM8XNGY170"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);