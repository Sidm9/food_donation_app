import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnfnBQoBY-I5eDHIYPmvHcG8BQ1qcIuic",
    authDomain: "fooddonationapp-9c3de.firebaseapp.com",
    databaseURL: "https://fooddonationapp-9c3de.firebaseio.com",
    projectId: "fooddonationapp-9c3de",
    storageBucket: "fooddonationapp-9c3de.appspot.com",
    messagingSenderId: "273463632363",
    appId: "1:273463632363:web:0c15e6489b5228c9f079ae",
    measurementId: "G-ZG58RD5LNG"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };