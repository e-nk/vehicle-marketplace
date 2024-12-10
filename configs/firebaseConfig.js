// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-1eace.firebaseapp.com",
  projectId: "car-marketplace-1eace",
  storageBucket: "car-marketplace-1eace.firebasestorage.app",
  messagingSenderId: "466645888109",
  appId: "1:466645888109:web:7dcadf9ff65a9816e02364",
  measurementId: "G-MHLLRM3F5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);