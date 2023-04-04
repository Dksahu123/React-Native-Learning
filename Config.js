import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCssWGs0TM-cBs5eMzacOP1CT2KyO2CNG0",
  authDomain: "phoneauth-78978.firebaseapp.com",
  projectId: "phoneauth-78978",
  storageBucket: "phoneauth-78978.appspot.com",
  messagingSenderId: "1013169337801",
  appId: "1:1013169337801:web:92bd812a024af9349e2418",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
