// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// EXPORT THESE TO ENV
const firebaseConfig = {
  apiKey: "AIzaSyAjLu5FxuMGgWr6cH23j4-1yFFu2FsZEdk",
  authDomain: "code-royale-958e5.firebaseapp.com",
  projectId: "code-royale-958e5",
  storageBucket: "code-royale-958e5.firebasestorage.app",
  messagingSenderId: "604540749419",
  appId: "1:604540749419:web:92ad7bdd168101c251132e",
  measurementId: "G-61PG7BDRLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };