import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCqnOG861YetERT7MxBrsgWocPuKEIb_mY",
  authDomain: "todo-react-dda3b.firebaseapp.com",
  projectId: "todo-react-dda3b",
  storageBucket: "todo-react-dda3b.appspot.com",
  messagingSenderId: "63756431116",
  appId: "1:63756431116:web:fdc0fba6f8a66929bc6329",
  measurementId: "G-ZFBQYJLD6J",
});

const db = firebase.firestore();

export default db ;
