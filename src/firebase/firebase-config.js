import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';

// Firebase params configuration conection:
const firebaseConfig = {
  apiKey: "AIzaSyAW7U0awKD9-Iqr8GdOX-58Kjn6_SwcTHg",
  authDomain: "react-eventapp.firebaseapp.com",
  projectId: "react-eventapp",
  storageBucket: "react-eventapp.appspot.com",
  messagingSenderId: "251150530675",
  appId: "1:251150530675:web:039cb38dd199affc789206"
  };
// Initialize Firebase
initializeApp(firebaseConfig);

// Database reference:
const db = getFirestore();
// Auth provider: 
const googleAuthProvider = new GoogleAuthProvider();

export{ db , googleAuthProvider }