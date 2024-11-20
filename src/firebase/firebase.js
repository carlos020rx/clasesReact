// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiaKtPYbQy8wAYMMUFzic0lp6nXa6MIQ0",
  authDomain: "web-semana-14.firebaseapp.com",
  projectId: "web-semana-14",
  storageBucket: "web-semana-14.firebasestorage.app",
  messagingSenderId: "868011552166",
  appId: "1:868011552166:web:7a8e15c82fbe986a9e7367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };