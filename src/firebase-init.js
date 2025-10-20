// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARvhcoOdvquDDGHIBQgzK6j6i6JDMG_Bw",
  authDomain: "impostor-ffbfc.firebaseapp.com",
  projectId: "impostor-ffbfc",
  storageBucket: "impostor-ffbfc.firebasestorage.app",
  messagingSenderId: "958806903632",
  appId: "1:958806903632:web:6d1dd418e206cb14d47a55",
  measurementId: "G-S5NQC84X77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only if in browser and analytics is supported
if (typeof window !== 'undefined') {
  try {
    const analytics = getAnalytics(app);
    console.log('Firebase Analytics initialized');
  } catch (error) {
    console.warn('Analytics not available:', error);
  }
}

export { app };
