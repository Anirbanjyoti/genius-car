// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_14mHRaSargCQnHUzabnzRLjCYynCa0Q",
  authDomain: "genius-car-b492a.firebaseapp.com",
  projectId: "genius-car-b492a",
  storageBucket: "genius-car-b492a.appspot.com",
  messagingSenderId: "63992472",
  appId: "1:63992472:web:f7122b5e2233cfad8096ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;