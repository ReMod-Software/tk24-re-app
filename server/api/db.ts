import { getDatabase } from "firebase/database"
import { firebaseConfig } from "../firebase"
import { initializeApp } from "firebase/app"

initializeApp(firebaseConfig)
const database = getDatabase()

export { database }
