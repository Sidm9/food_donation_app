// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";


const fire = firebase.initializeApp(firebaseConfig);
export default fire;