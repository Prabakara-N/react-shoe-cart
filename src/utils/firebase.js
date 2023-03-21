import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_-bK46-gcwWZvqV_lyB6lFPbxCD6k3Bg",
  authDomain: "react-ecommerce-shoe.firebaseapp.com",
  projectId: "react-ecommerce-shoe",
  storageBucket: "react-ecommerce-shoe.appspot.com",
  messagingSenderId: "827173153823",
  appId: "1:827173153823:web:09d8dc13442e8db8d5b92a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
