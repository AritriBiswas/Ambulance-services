import React from 'react'
import {Route,Link} from "react-router-dom"
import {useAuth} from "../Contexts/AuthContext"


export default function PrivateRoute({component : Component, ...rest}) {
    const {currentUser} = useAuth()

  return (
    <div>
        <Route
            {...rest}
            render=
        {props => {
            return currentUser ? <Component {...props}/> : <Link to="/Login"></Link>
        }}
        >

        </Route>
      
    </div>
  )
}
