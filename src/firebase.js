import * as firebase from "firebase/app";
// import firebase from 'firebase/app'

import "firebase/firestore";
import "firebase/auth";
// import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAn4MHqX9W9aMg9rA7Os3f8_4gV2XZgFQw",
    authDomain: "bears-selector-type.firebaseapp.com",
    projectId: "bears-selector-type",
    storageBucket: "bears-selector-type.appspot.com",
    messagingSenderId: "101560071626",
    appId: "1:101560071626:web:c183f6bb1f7603c8064b33",
    measurementId: "G-JTRK7G6H9H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const auth = firebase.auth();

export const firestore = firebase.firstore();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;