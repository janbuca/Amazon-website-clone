import firebase from "firebase/compat/app";

// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy4J6OvZjFNJ6flR6E9E7KaPqNo8TDnFo",
  authDomain: "website-clone-468e1.firebaseapp.com",
  projectId: "website-clone-468e1",
  storageBucket: "website-clone-468e1.appspot.com",
  messagingSenderId: "139856708726",
  appId: "1:139856708726:web:89871d2a2f7d3c63e8cb57"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = app.firestore();