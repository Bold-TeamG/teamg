// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcX1jg87S2oAkb3kpuQy5lnnHpjOwkJ5E",
  authDomain: "merhobi-92530.firebaseapp.com",
  projectId: "merhobi-92530",
  storageBucket: "merhobi-92530.appspot.com",
  messagingSenderId: "67912505430",
  appId: "1:67912505430:web:c9f25c6fe2e90f7fbd83f7",
  measurementId: "G-Q0KZ8EZF87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

export default app;
