import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';

// Firebase params configuration conection:
const firebaseConfig = {
    apiKey: "AIzaSyA7EmZ-560h2XNcR1eWnJi2w9WrXnxjRak",
    authDomain: "react-journal-app-de610.firebaseapp.com",
    projectId: "react-journal-app-de610",
    storageBucket: "react-journal-app-de610.appspot.com",
    messagingSenderId: "121929640063",
    appId: "1:121929640063:web:5a061488b1d7f4bd29f74a"
  };
// Initialize Firebase
initializeApp(firebaseConfig);

// Database reference:
const db = getFirestore();
// Auth provider: 
const googleAuthProvider = new GoogleAuthProvider();

export{ db , googleAuthProvider }