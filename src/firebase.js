// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/storage";
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCUFcGXbqehvnafxEzRM2Rnle9g6wdmyjI",
    authDomain: "disneyclone-a973e.firebaseapp.com",
    projectId: "disneyclone-a973e",
    storageBucket: "disneyclone-a973e.appspot.com",
    messagingSenderId: "607391686169",
    appId: "1:607391686169:web:7f3051d3e5186d96a15488",
    measurementId: "G-6P7FYH9H85"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;