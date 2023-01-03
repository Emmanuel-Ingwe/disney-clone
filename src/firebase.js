// import firebase from "./firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//     authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//     projectId: "disneyplus-clone-a33d5",
//     storageBucket: "disneyplus-clone-a33d5.appspot.com",
//     messagingSenderId: "37918794208",
//     appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//     measurementId: "G-DRVLJKWRWG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };

// export default db;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };