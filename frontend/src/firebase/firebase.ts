// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjLu5FxuMGgWr6cH23j4-1yFFu2FsZEdk",
  authDomain: "code-royale-958e5.firebaseapp.com",
  projectId: "code-royale-958e5",
  storageBucket: "code-royale-958e5.firebasestorage.app",
  messagingSenderId: "604540749419",
  appId: "1:604540749419:web:92ad7bdd168101c251132e",
  measurementId: "G-61PG7BDRLB"
};

// const firebaseConfig = {
//   apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.PUBLIC_FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, analytics, auth, firestore };