// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuZ9C12dc4MI0iOuFLTLNH3qXsxbAxzDc",
  authDomain: "book-app-store-ffada.firebaseapp.com",
  projectId: "book-app-store-ffada",
  storageBucket: "book-app-store-ffada.appspot.com",
  messagingSenderId: "301589696149",
  appId: "1:301589696149:web:f73b30cdd4ee102228959c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;