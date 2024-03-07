import { getDatabase } from "firebase/database";
import { firebaseApp } from '../firebase'
  
const database = getDatabase(firebaseApp);

export { database }
