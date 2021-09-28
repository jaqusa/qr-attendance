import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useAuth} from '../Context'

export default function SecureRoute({component: Component, role, ...rest}) {
  const {currentUser} = useAuth()
  const permittedRole =  localStorage.getItem('role')
  if(currentUser){
    if(permittedRole === role){
      return (
        <Route
          {...rest}
          render={props => {
            return (
              <Component {...props} /> 
            ) 
          }}
        ></Route>
      )
    }
    else{
      return <Redirect to='/'/>
    }
  }else{
    return <Redirect to="/" />
  }
}
