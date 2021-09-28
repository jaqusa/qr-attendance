import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Context from '../Context'
import QRScanner from './QRScanner'
import SecureRoute from './SecureRoute'
import TeacherLogin from './TeacherLogin'
import TeacherQRForm from './TeacherQRForm'
import StudentLogin from './StudentLogin'
import AttendanceDetails from './AttendanceDetails'


export default function Home() {
  return (
    <Router>
      <Context>
        <Switch>
          <Route exact path="/" component={StudentLogin}/>
          <Route exact path="/teacher-login" component={TeacherLogin}/>
          <SecureRoute exact path="/make-qr" role="teacher" component={TeacherQRForm}/>
          <SecureRoute exact path="/get-details" role="teacher" component={AttendanceDetails}/>
          <SecureRoute exact path="/scan-qr" role="student" component={QRScanner}/>
        </Switch>
      </Context>
    </Router>
  )
}