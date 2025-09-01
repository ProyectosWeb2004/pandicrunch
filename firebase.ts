import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQhNXp5UMjplHTmVuCygggc--VNVGQWkI",
  authDomain: "pandicrunch-28ccb.firebaseapp.com",
  projectId: "pandicrunch-28ccb",
  storageBucket: "pandicrunch-28ccb.appspot.com",
  messagingSenderId: "462888862100",
  appId: "1:462888862100:web:c870a639db2d2068298f81",
  measurementId: "G-2ZSF5HMV7K"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
