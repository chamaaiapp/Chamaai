import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgucJTX8FzymoMgowylCWhraTVKB_Tc54",
  authDomain: "chamaaiapp-cd660.firebaseapp.com",
  projectId: "chamaaiapp-cd660",
  storageBucket: "chamaaiapp-cd660.appspot.com",
  messagingSenderId: "195839257697",
  appId: "1:195839257697:web:f2546bf417b12b6e4a8e20",
  measurementId: "G-MS9PK8HD4X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
