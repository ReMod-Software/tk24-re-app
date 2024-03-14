import { getDatabase } from "@firebase/database"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
	apiKey: "AIzaSyAYjZmseIlXNXpvTl0RIvHAEvsuKsku2VE",
	authDomain: "beacon-735fe.firebaseapp.com",
	projectId: "beacon-735fe",
	storageBucket: "beacon-735fe.appspot.com",
	messagingSenderId: "456606038445",
	appId: "1:456606038445:web:c418d4d6ae19aa86a24924",
	measurementId: "G-G0R6Y96HZD",
	databaseURL: "https://beacon-735fe-default-rtdb.firebaseio.com",
}

initializeApp(firebaseConfig)

const database = getDatabase()

export { database, firebaseConfig }
