const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDUd175OedLD0bFaru3oT3aeIxRDpVjU0c",
    authDomain: "auth-ws.firebaseapp.com",
    projectId: "auth-ws",
    storageBucket: "auth-ws.appspot.com",
    messagingSenderId: "1074712280397",
    appId: "1:1074712280397:web:ed1642bf5f85b4d5d44b04"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app