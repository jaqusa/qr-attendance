import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAeGbRUz2kh2WPpzLUq3DVfyXtES_D2xtg",
  authDomain: "react-qr-attendance.firebaseapp.com",
  projectId: "react-qr-attendance",
  storageBucket: "react-qr-attendance.appspot.com",
  messagingSenderId: "449674848834",
  appId: "1:449674848834:web:dd7a44b571766c95155bdb",
  measurementId: "G-6KZ6PLVHD6"
})
const firestore = app.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth()
export const database = {
  courseDetails: firestore.collection('courseDetails'),
  studentRecords: firestore.collection('studentRecords'),
  classCountIncrement: firebase.firestore.FieldValue.increment(1)
}
export default app