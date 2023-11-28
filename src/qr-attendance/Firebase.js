import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBPZFVN8wBtDCnInSswovzi8kjdHkTxDsc",
  authDomain: "qr-chela-2e3f1.firebaseapp.com",
  projectId: "qr-chela-2e3f1",
  storageBucket: "qr-chela-2e3f1.appspot.com",
  messagingSenderId: "319761367382",
  appId: "1:319761367382:web:8a81c77c8f217ae14256f7"
})
const firestore = app.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth()
export const database = {
  courseDetails: firestore.collection('courseDetails'),
  studentRecords: firestore.collection('studentRecords'),
  classCountIncrement: firebase.firestore.FieldValue.increment(1),
  attendance: firestore.collection('attendance')
}
export default app