import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPtNZsTxQ1_SJKrNKTvD5cjHPqs5x0bNo",
  authDomain: "ravisharmaphotofilms.firebaseapp.com",
  projectId: "ravisharmaphotofilms",
  storageBucket: "ravisharmaphotofilms.firebasestorage.app",
  messagingSenderId: "872104718351",
  appId: "1:872104718351:web:67889d20ed9eaf92e9737a",
  measurementId: "G-DWLS4BSZNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
