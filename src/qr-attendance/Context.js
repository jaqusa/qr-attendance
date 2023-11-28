import React,{useContext, useEffect, useState} from 'react'
import {auth, googleProvider } from './Firebase'

const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext)
}
export default function Context({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(false)
  // function logout(){
  //   return auth.signOut()
  // }
  // function signinWithGoogle(){
  //   return auth.signInWithPopup(googleProvider)
  // }
  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(user => {
    //   setCurrentUser(user)
    //   setLoading(false)
    // })
    // return unsubscribe
  }, [])

  const value = {
    currentUser: {
      name: "founders"
    },
    logout: () => {

    },
    signinWithGoogle: () => {
      
    },
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}