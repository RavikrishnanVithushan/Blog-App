// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-16d48.firebaseapp.com",
  projectId: "mern-blog-16d48",
  storageBucket: "mern-blog-16d48.appspot.com",
  messagingSenderId: "120984809638",
  appId: "1:120984809638:web:08b68114735ee688754467"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);