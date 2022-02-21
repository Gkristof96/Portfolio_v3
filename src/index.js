import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebaseConfig } from "./firebase";
import * as firebase from "firebase/app";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
