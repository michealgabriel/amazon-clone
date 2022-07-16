
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBkXoMHWtGnRbrbYcEn5syaZo32VVvX9vA",
  authDomain: "clone-46d7a.firebaseapp.com",
  projectId: "clone-46d7a",
  storageBucket: "clone-46d7a.appspot.com",
  messagingSenderId: "231718569959",
  appId: "1:231718569959:web:8830b25c6b872db7241f42",
  measurementId: "G-66QZ21BEKD"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();
// const storage = getStorage(firebaseApp);

export { db, auth };