import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiMaOGQecQFCPS5qs6TobekBH5wKDgkJc",
  authDomain: "pict-marketplace.firebaseapp.com",
  projectId: "pict-marketplace",
  storageBucket: "pict-marketplace.appspot.com",
  messagingSenderId: "359112371669",
  appId: "1:359112371669:web:fa61ad7c6603a3c87f615c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };
