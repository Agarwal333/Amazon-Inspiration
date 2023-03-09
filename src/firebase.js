// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import {auth} from "./firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChyKmYMjt8KbfUZCjqOod4Ej_4wFv8Uw0",
    authDomain: "fir-23783.firebaseapp.com",
    projectId: "fir-23783",
    storageBucket: "fir-23783.appspot.com",
    messagingSenderId: "130969052502",
    appId: "1:130969052502:web:9ed44bb53b26bcf7b962f7",
    measurementId: "G-0WGZRPN4TH"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  // const db = firebaseApp.firestore();

  export const auth = getAuth(firebaseApp);
  export const db = getFirestore(firebaseApp)
  export default firebaseApp;

  // const auth = firebase.auth();
  // export  { db, auth };