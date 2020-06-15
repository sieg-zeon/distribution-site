import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-storage'


var firebaseConfig = {
    apiKey: "AIzaSyBRE4pL9d0dC_jj-bLPGHcQ81echYLEap8",
    authDomain: "distribution-site-d09ac.firebaseapp.com",
    databaseURL: "https://distribution-site-d09ac.firebaseio.com",
    projectId: "distribution-site-d09ac",
    storageBucket: "distribution-site-d09ac.appspot.com",
    messagingSenderId: "800235939396",
    appId: "1:800235939396:web:b6f2462220458a92517e11",
    measurementId: "G-984CJJ8NWC",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase