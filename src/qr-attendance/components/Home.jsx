import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Context from '../Context'
import QRScanner from './QRScanner'
import SecureRoute from '../AuthComponents/SecureRoute'
import HostLogin from '../AuthComponents/HostLogin'
import TeacherQRForm from '../AuthComponents/TeacherQRForm'
import GuestLogin from '../AuthComponents/GuestLogin'
import AttendanceDetails from './AttendanceDetails'
import Main from './Main'
import Start from './Start'


export default function Home() {
  return (
    <Router>
      <Context>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path="/start/:id" currentRole="student" component={Start}/>
          {/* <Route exact path="/guest-login" component={GuestLogin}/> */}
          {/* <Route exact path="/host-login" component={HostLogin}/> */}
          {/* <SecureRoute exact path="/make-qr" currentRole="teacher" component={TeacherQRForm}/> */}
          {/* <SecureRoute exact path="/get-details" currentRole="teacher" component={AttendanceDetails}/> */}
          <Route exact path="/scan-qr" currentRole="student" component={QRScanner}/>
        </Switch>
      </Context>
    </Router>
  )
}