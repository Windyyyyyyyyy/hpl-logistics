// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTylZTD0vivT81GNy7huZmv9BOTY4Uq_Q",
  authDomain: "hpl-logistic.firebaseapp.com",
  databaseURL: "https://hpl-logistic-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "hpl-logistic",
  storageBucket: "hpl-logistic.firebasestorage.app",
  messagingSenderId: "309340390417",
  appId: "1:309340390417:web:367e9df244408ba2001db0",
  measurementId: "G-XQFSBHL1QT"
};

// Initialize Firebase only if it hasn't been initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const database = getDatabase(app);

export { app, database };