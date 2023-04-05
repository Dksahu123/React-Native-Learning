//this is firebase cinfig key setup

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZf1Z_PL8WIggqD4MgnUBM-JI739TAGVQ",
  authDomain: "emailauthentication-13425.firebaseapp.com",
  projectId: "emailauthentication-13425",
  storageBucket: "emailauthentication-13425.appspot.com",
  messagingSenderId: "715625130558",
  appId: "1:715625130558:web:13d8f5cb27058e5bee7f6f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
