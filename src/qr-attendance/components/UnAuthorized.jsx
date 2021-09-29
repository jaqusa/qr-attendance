import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'

export default function UnAuthorized() {
  return (
    <>
      <NavBar/>
      <Container style={{height: "70vh"}} fluid className="d-flex justify-content-center align-items-center">
        <div className="heading breakpoint">
          <div className="react-heading">
            You don't have access to this route!!
          </div>
        </div>
      </Container>
      <Container style={{height: "10vh"}}>
        <div className="d-flex justify-content-end">
          <a href="/" role="button" className="btn btn-primary">Go back</a>
        </div>
      </Container>
    </>
  )
}
