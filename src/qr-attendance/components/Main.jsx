import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'
// import { Redirect } from 'react-router-dom'
import scan from '../pics/qrImg.png'

export default function Main() {
  const role = "host"

  return (
    <div style={{backgroundColor: "#008aff", height: "100vh"}}>
      <NavBar show={false} color={"#001e37"}/>
      <Container style={{height: "80vh"}} fluid className="d-flex flex-column justify-content-center align-items-center">
        {/* {false && (
          role ==="guest" && <Redirect to={'/scan-qr'}/>
        )}
        {false && (
          role ==="host" && <Redirect to={'/make-qr'}/>
        )} */}
        <div className="heading breakpoint">
          <div className="react-heading">
           La chela de los founders
          </div>
        </div>
        <img src={scan} alt="Dashboard" style={{height: "50vh", width: "50vh"}}/>
      </Container>
      <Container style={{height: "10vh"}}>
        <div className="d-flex justify-content-evenly">
          <a href="/guest-login" role="button" className="btn btn-primary bord">Guest</a>
          <a href="/host-login" role="button" className="btn btn-primary bord">Host</a>
        </div>
      </Container>
    </div>
  )
}
