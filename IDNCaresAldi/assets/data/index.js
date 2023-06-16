// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, where, query} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOIYy4wTzeDrJI81DhOHzuAV6AScbCcHw",
  authDomain: "pemmob-bf092.firebaseapp.com",
  projectId: "pemmob-bf092",
  storageBucket: "pemmob-bf092.appspot.com",
  messagingSenderId: "781143013706",
  appId: "1:781143013706:web:4157f6fdb4897e7c2769b3",
  measurementId: "G-DCB70P563J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc, getDocs, where, query};