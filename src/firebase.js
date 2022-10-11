// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANzd6_Yc3wvlIa0R1wXYwcvMsvUJfMbyQ",
  authDomain: "code-editor-6a164.firebaseapp.com",
  databaseURL: "https://code-editor-6a164-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "code-editor-6a164",
  storageBucket: "code-editor-6a164.appspot.com",
  messagingSenderId: "149686876957",
  appId: "1:149686876957:web:67e50561c98a439a443ff4",
  measurementId: "G-L11BWCN2DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;