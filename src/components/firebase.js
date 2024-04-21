import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAh2DfAwc_XXbeKUbspZsGaDN0RWX-WeIg",
  authDomain: "todo-list-420915.firebaseapp.com",
  projectId: "todo-list-420915",
  storageBucket: "todo-list-420915.appspot.com",
  messagingSenderId: "695164963509",
  appId: "1:695164963509:web:11a16dc08bb23ea2cf0cfc",
  measurementId: "G-2QJMN8GEM7",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase()
