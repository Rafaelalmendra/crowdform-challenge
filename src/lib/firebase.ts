import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdS1aCzA-SUDYIyqKsEErqqFhKkFasyaY",
  authDomain: "crowdform-challenge.firebaseapp.com",
  projectId: "crowdform-challenge",
  storageBucket: "crowdform-challenge.appspot.com",
  messagingSenderId: "322690193837",
  appId: "1:322690193837:web:88290d83962c6c91166924",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const googleAuth = new GoogleAuthProvider();

export const config = firebaseConfig;
export const compatAuth = firebase;
