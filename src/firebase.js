import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAL3iVqIzLUKScWeCW9t5rkNcYZ8VBwANc",
    authDomain: "walkie-talkie-vue-54211.firebaseapp.com",
    projectId: "walkie-talkie-vue-54211",
    storageBucket: "walkie-talkie-vue-54211.appspot.com",
    messagingSenderId: "10623557506",
    appId: "1:10623557506:web:8f392e1c2feb4d982bf99b",
    measurementId: "G-LF9R9P0KEQ"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
