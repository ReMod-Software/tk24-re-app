import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAYjZmseIlXNXpvTl0RIvHAEvsuKsku2VE",
    authDomain: "beacon-735fe.firebaseapp.com",
    projectId: "beacon-735fe",
    storageBucket: "beacon-735fe.appspot.com",
    messagingSenderId: "456606038445",
    appId: "1:456606038445:web:c418d4d6ae19aa86a24924",
    measurementId: "G-G0R6Y96HZD",
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

export default auth
