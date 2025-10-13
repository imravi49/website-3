import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCPtNZsTxQ1_SJKrNKTvD5cjHPqs5x0bNo",
  authDomain: "ravisharmaphotofilms.firebaseapp.com",
  projectId: "ravisharmaphotofilms",
  storageBucket: "ravisharmaphotofilms.firebasestorage.app",
  messagingSenderId: "872104718351",
  appId: "1:872104718351:web:67889d20ed9eaf92e9737a",
  measurementId: "G-DWLS4BSZNF"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export default app
