import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAHgkAzksb3IRRidwHX7JSKc-BEVvM9Of4",
  authDomain: "qr--attendance.firebaseapp.com",
  projectId: "qr--attendance",
  storageBucket: "qr--attendance.appspot.com",
  messagingSenderId: "263529499624",
  appId: "1:263529499624:web:269ca45297fa2c50fff25d",
  measurementId: "G-JCE4BGN3HV"
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