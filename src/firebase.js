import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxEZUhWaEk98pshjzlKZ24JmDKUFDKj14",
  authDomain: "mentornow-b3064.firebaseapp.com",
  projectId: "mentornow-b3064",
  storageBucket: "mentornow-b3064.appspot.com",
  messagingSenderId: "678738957678",
  appId: "1:678738957678:web:244c43d4f1918fe7ffdd7f",
  measurementId: "G-PV2ZS5PSET"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };
