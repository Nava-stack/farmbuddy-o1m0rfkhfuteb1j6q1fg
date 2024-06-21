// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALPzMS9b8i7fvv3gsPLY6Y05TobhFvJsA",
  authDomain: "farmbuddy-88c06.firebaseapp.com",
  projectId: "farmbuddy-88c06",
  storageBucket: "farmbuddy-88c06.appspot.com",
  messagingSenderId: "989736467981",
  appId: "1:989736467981:web:d4b8c8394889a4c9959f44",
  measurementId: "G-9NXF6GS6QZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
