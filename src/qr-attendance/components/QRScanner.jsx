import React, { useState, useEffect } from 'react'
import QrReader from 'react-qr-reader'
import { Container } from 'react-bootstrap'
// import { useAuth } from '../Context'
import { database } from '../Firebase'
import qrImg from '../pics/qrImg.png'
import NavBar from './NavBar'

export default function QRScanner() {
  const [delay, setDelay] = useState(100)
  const [attendance, setAttendance] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false);

  function handleError(err) {
    console.error(err)
  }

  async function handleScan(data) {

    let result = JSON.parse(data)

    if (data) {

      database.lachelaCodes.where("email", "==", result.email).onSnapshot((snapshot) => {

        snapshot.forEach((response) => {
       
          if (response) {
           
            const user = response.data();
          
            if (user.counter < user.max) {
         
              const updateDocument = {
                ...user,
                counter: user.counter + 1
              }
              
              database.lachelaCodes.doc(response.id).update(updateDocument).then((updateResponse) => {
                console.log(updateResponse)
                      
                setAttendance(true)
                setIsSuccess(true)
              })
             
            }
            else {
              setAttendance(true)
              setIsSuccess(false)
            }
          }
           
        })
       
      })



    }
  }

  useEffect(() => {

  }, [])

  return (
    <Container className="main row p-0 m-0" style={{ height: "100vh" }} fluid>
      <Container style={{ height: "60vh", width: "100vw", background: "" }} className="main p-0 m-0">
        <NavBar show={true} />
        <div>
          {attendance &&
            <div className="main attendance-heading">
              { isSuccess ? <h5 style={{color: "green"}}>Satisfactorio!</h5> : <h5 style={{color: "red"}}>Máximo superado</h5> }
            </div>
          }
          {!attendance && <QrReader
            style={{ width: "40vh", height: "30vh" }}
            delay={delay}
            onError={handleError}
            onScan={handleScan}
            className="some"
          />}
        </div>
      </Container>
      <Container fluid style={{ height: "40vh", width: "100vw" }} className="main p-0 m-0 justify-content-evenly">
        <div><img style={{ height: "39vh" }} src={qrImg} alt="qrImg" /></div>
        <div className="heading breakpoint"><div className="react-heading">React</div> QR Attendance</div>
      </Container>
    </Container>
  )
}
