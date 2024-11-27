// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAVdzfkatccdWXD7EhES3AAlWmtogOjJXY",
  authDomain: "vcube-project.firebaseapp.com",
  projectId: "vcube-project",
  storageBucket: "vcube-project.firebasestorage.app",
  messagingSenderId: "981466944894",
  appId: "1:981466944894:web:aa63a6c3c5c86b2921cf2f",
  measurementId: "G-7KBP83MDCP"
};

// Initialize Firebase only if it hasn't been initialized yet
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig); // Create a new app instance
} else {
  app = getApp(); // Use the existing app instance
}

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export the app instance
export default app;
