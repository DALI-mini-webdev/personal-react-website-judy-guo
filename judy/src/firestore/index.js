import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCbHOn0GVFYIif6FS2Z9ZgEc3GDmW7Qcfw",
    authDomain: "personal-website-d5b2e.firebaseapp.com",
    projectId: "personal-website-d5b2e",
    storageBucket: "personal-website-d5b2e.appspot.com",
    messagingSenderId: "840724154167",
    appId: "1:840724154167:web:8ca08c61087a15fb5a7cb2",
    measurementId: "G-C82YM9X9D4"
});

const db = firebase.firestore();


export default {
  firebase, db
}