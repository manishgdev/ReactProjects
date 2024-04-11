// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1gfXNzg8lZyC-HpkcAAjnEiEvN5sLnbU",
  authDomain: "react-tutorial-eab48.firebaseapp.com",
  projectId: "react-tutorial-eab48",
  storageBucket: "react-tutorial-eab48.appspot.com",
  messagingSenderId: "514779134682",
  appId: "1:514779134682:web:b99c1d2bc66ef76783c3e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const authProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
