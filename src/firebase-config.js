import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC7R189eEYDtAHASzIUyTm7ebeqQ2sQ94",
  authDomain: "fire-vdos-a9b20.firebaseapp.com",
  projectId: "fire-vdos-a9b20",
  storageBucket: "fire-vdos-a9b20.appspot.com",
  messagingSenderId: "285198455513",
  appId: "1:285198455513:web:7b5d789b144b52fd09e4c8",
  measurementId: "G-EF0V2MWPWG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const gProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
