// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7X64H3FbpMka5iH5305XX9bcnNe1HIdc",
  authDomain: "react-news-portal-auth.firebaseapp.com",
  projectId: "react-news-portal-auth",
  storageBucket: "react-news-portal-auth.appspot.com",
  messagingSenderId: "847368207682",
  appId: "1:847368207682:web:5fc216ee078b194b015cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;