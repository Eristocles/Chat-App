// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVVU0u8wDexBRwE8dJvqZY0aIbtyYEsmg",
  authDomain: "chat-app-6a3d4.firebaseapp.com",
  projectId: "chat-app-6a3d4",
  storageBucket: "chat-app-6a3d4.appspot.com",
  messagingSenderId: "695839569718",
  appId: "1:695839569718:web:b1e2cf0766eef7945c6597",
  measurementId: "G-2J0GX1TCB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);