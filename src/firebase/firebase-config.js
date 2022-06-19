import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';

// Firebase params configuration conection:
const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "DATA PROVIDED BY FIREBASE",
  projectId: "DATA PROVIDED BY FIREBASE",
  storageBucket: "DATA PROVIDED BY FIREBASE",
  messagingSenderId: "DATA PROVIDED BY FIREBASE",
  appId: "DATA PROVIDED BY FIREBASE"
  };
// Initialize Firebase
initializeApp(firebaseConfig);

// Database reference:
const db = getFirestore();
// Auth provider: 
const googleAuthProvider = new GoogleAuthProvider();

export{ db , googleAuthProvider }