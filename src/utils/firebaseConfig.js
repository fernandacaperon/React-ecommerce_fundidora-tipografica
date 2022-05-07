// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVLeDqMkCJ2dK7scebMCNPSmNthD3doI8",
  authDomain: "ecommerce-react-44e0b.firebaseapp.com",
  projectId: "ecommerce-react-44e0b",
  storageBucket: "ecommerce-react-44e0b.appspot.com",
  messagingSenderId: "146213578882",
  appId: "1:146213578882:web:74f996d7aa66b9ea026c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const db = firebase.firestore();
 
export default db;