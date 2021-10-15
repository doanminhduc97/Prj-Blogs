// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBseiKxJLVj5JVppEn6LzNRxKMYKYFR1KA",
  authDomain: "blogducdm.firebaseapp.com",
  projectId: "blogducdm",
  storageBucket: "blogducdm.appspot.com",
  messagingSenderId: "179188158288",
  appId: "1:179188158288:web:9aaff58258b558162ee655"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
