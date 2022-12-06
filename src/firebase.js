// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; // [Autenticacion 1]se importa el metodo de autenticacion de firebase
import { getFirestore } from 'firebase/firestore' // [Base de datos] importarla

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQeYWhiU9A9PEnIP7-GA4NctLhWM-Z-t8",
  authDomain: "chat3-698ea.firebaseapp.com",
  projectId: "chat3-698ea",
  storageBucket: "chat3-698ea.appspot.com",
  messagingSenderId: "730239623387",
  appId: "1:730239623387:web:d763e9f6401d1a28346cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) // [Autenticacion 2] a ese metodo se le pasa como parametro la referencia a la configuracion de firebase
export const db = getFirestore(app) // [Base de datos ] se la asigna a una variable que la representa: db, para la cual se llama al metodo traido de react getFirestore y se le pasa como parametro app. Sigue en Chat.jsx
