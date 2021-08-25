import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Context from '../Context'
import QRScanner from './QRScanner'
import SecureRoute from './SecureRoute'
import TeacherLogin from './TeacherLogin'
import TeacherQRForm from './TeacherQRForm'
import StudentLogin from './StudentLogin'


export default function Home() {
  return (
    <Router>
      <Context>
        <Switch>
          <Route exact path="/" component={StudentLogin}/>
          <Route exact path="/teacher-login" component={TeacherLogin}/>
          <SecureRoute exact path="/make-qr" component={TeacherQRForm}/>
          <SecureRoute exact path="/scan-qr" component={QRScanner}/>
        </Switch>
      </Context>
    </Router>
  )
}