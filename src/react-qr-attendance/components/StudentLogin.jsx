import React,{ useState } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useAuth } from "../Context"
import GoogleButton from 'react-google-button'

export default function Signup() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [redirectPossible, setRedirectPossible] = useState(false)
  const { signinWithGoogle, currentUser } = useAuth()
  async function handleSigninWithGoogle(e){
    e.preventDefault()
    try{
      setLoading(true)
      await signinWithGoogle()
      console.log("logged in")
      setRedirectPossible(true)
      setLoading(false)
    }catch(err){
      console.log("error")
      setError("There was a problem signing in!!")
    }
  }
  return (
    <Container className="main" style={{height: "100vh"}}>
      {redirectPossible && <Redirect to="/scan-qr" />}
      {currentUser && <Redirect to="/scan-qr" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Container className="main">
        <GoogleButton
          onClick={handleSigninWithGoogle}
          disabled={loading}
        />
      </Container>
    </Container>
  )
}