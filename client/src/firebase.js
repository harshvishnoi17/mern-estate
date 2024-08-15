// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "mern-estate-a6a12.firebaseapp.com",
  projectId: "mern-estate-a6a12",
  storageBucket: "mern-estate-a6a12.appspot.com",
  messagingSenderId: "27513442389",
  appId: "1:27513442389:web:1cd18236303b0723abc4dc"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);