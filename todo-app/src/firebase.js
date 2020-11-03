import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLVO44CvMow_-rwC7g-AMM3Hsf4MD_S54",
    authDomain: "todo-app-cp-e2ef5.firebaseapp.com",
    databaseURL: "https://todo-app-cp-e2ef5.firebaseio.com",
    projectId: "todo-app-cp-e2ef5",
    storageBucket: "todo-app-cp-e2ef5.appspot.com",
    messagingSenderId: "66830289803",
    appId: "1:66830289803:web:375572d06792628e8dfd8e",
    measurementId: "G-Z9ME8EM2XY"
})

const db = firebaseApp.firestore();

export default db;
