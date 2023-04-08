import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAk6WiEC84SYfvcW36MYQIDQkbN9HHnmYo",
  authDomain: "rnfirebase-92c29.firebaseapp.com",
  databaseURL:
    "https://rnfirebase-92c29-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rnfirebase-92c29",
  storageBucket: "rnfirebase-92c29.appspot.com",
  messagingSenderId: "514326335228",
  appId: "1:514326335228:web:c60787e5dad2c1826a5179",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db };
