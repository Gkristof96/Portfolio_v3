import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDepSmWqOpiRrWZzDtU7nKHTp6ifn6l9YY",
  authDomain: "portfolio-b47bf.firebaseapp.com",
  projectId: "portfolio-b47bf",
  storageBucket: "portfolio-b47bf.appspot.com",
  messagingSenderId: "655251267106",
  appId: "1:655251267106:web:82c600a94d7ac28946f47b",
  measurementId: "G-E2HX8659LC",
};

export const firebaseAnalytics = getAnalytics();
