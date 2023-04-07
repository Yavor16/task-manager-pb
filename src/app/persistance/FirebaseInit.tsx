import "firebase/firestore"
import "firebase/auth"
import firebaseConfig from "./config/FirebaseConfig"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB =  getFirestore(FIREBASE_APP);
