import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDepSmWqOpiRrWZzDtU7nKHTp6ifn6l9YY",
  authDomain: "portfolio-b47bf.firebaseapp.com",
  projectId: "portfolio-b47bf",
  storageBucket: "portfolio-b47bf.appspot.com",
  messagingSenderId: "655251267106",
  appId: "1:655251267106:web:82c600a94d7ac28946f47b",
  measurementId: "G-E2HX8659LC",
};

const app = initializeApp(firebaseConfig);

export const firebaseAnalytics = getAnalytics(app);
