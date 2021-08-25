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
      setRedirectPossible(true)
      setLoading(false)
    }catch(err){
      setError("There was a problem signing in!!")
    }
  }
  return (
    <Container className="main" style={{height: "100vh"}}>
      {redirectPossible && <Redirect to="/make-qr" />}
      {currentUser && <Redirect to="/make-qr" />}
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