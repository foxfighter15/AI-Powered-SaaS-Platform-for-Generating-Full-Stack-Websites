// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "demo2-86d5e.firebaseapp.com",
  projectId: "demo2-86d5e",
  storageBucket: "demo2-86d5e.firebasestorage.app",
  messagingSenderId: "158539497165",
  appId: "1:158539497165:web:c12317237f7b4d3beb3384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
