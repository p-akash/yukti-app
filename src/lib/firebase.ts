// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhUDtKYlFQAT_GEfJG6LxgchNtlBpE1TA",
  authDomain: "ai-saas-platform-b75ca.firebaseapp.com",
  projectId: "ai-saas-platform-b75ca",
  storageBucket: "ai-saas-platform-b75ca.firebasestorage.app",
  messagingSenderId: "969529760055",
  appId: "1:969529760055:web:b0ac611c18043550bae2b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);