import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkbVGfgoNcSO0fP4LCwQsGPLOKnAi9wsU",
  authDomain: "thedojo-236dd.firebaseapp.com",
  projectId: "thedojo-236dd",
  storageBucket: "thedojo-236dd.appspot.com",
  messagingSenderId: "1020014388470",
  appId: "1:1020014388470:web:9aacdb7f98924be17a78d7",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
