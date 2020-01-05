import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAnFKAoPCH9LYbSD_vUBEtqmsmAnxKVpOY",
    authDomain: "react-chat-3cd68.firebaseapp.com",
    databaseURL: "https://react-chat-3cd68.firebaseio.com",
    projectId: "react-chat-3cd68",
    storageBucket: "react-chat-3cd68.appspot.com",
    messagingSenderId: "1067905229521",
    appId: "1:1067905229521:web:8cfb086a2e3bcf3dfadbf0",
    measurementId: "G-P4H92P4780"
  };

  firebase.initializeApp(firebaseConfig); 
  const db = firebase.firestore();
  export default db;