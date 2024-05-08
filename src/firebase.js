import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRdO-dMNm9MEzZIBYR7k23dZkb1Nv5I_k",
  authDomain: "authproject-11695.firebaseapp.com",
  projectId: "authproject-11695",
  storageBucket: "authproject-11695.appspot.com",
  messagingSenderId: "502979847438",
  appId: "1:502979847438:web:5608f8c475a32aeb57235f",
  measurementId: "G-PES7YV7LM4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
