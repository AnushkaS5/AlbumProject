// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOGW464M4E_jaQCOI9jZ1xTzZyZB-qHvA",
  authDomain: "photofolio1-4d624.firebaseapp.com",
  projectId: "photofolio1-4d624",
  storageBucket: "photofolio1-4d624.appspot.com",
  messagingSenderId: "78002693528",
  appId: "1:78002693528:web:da4f1b18048104ee00f7ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBpe5YdhpDA_xqR-htbRBRK8C04kSmwi1I",
//   authDomain: "photofolio-c1ffb.firebaseapp.com",
//   projectId: "photofolio-c1ffb",
//   storageBucket: "photofolio-c1ffb.appspot.com",
//   messagingSenderId: "846575631096",
//   appId: "1:846575631096:web:88541ddb47c73b68a7990d"
// };

// Initialize Firebase

export const db = getFirestore(app);