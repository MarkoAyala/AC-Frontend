import React from 'react'
import {useAuth0} from '@auth0/auth0-react';

function LogOutButton() {
  const {logout} = useAuth0()
  return (
    <div>
      <button onClick={()=> logout({returnTo: window.location.origin})}>salir</button>
    </div>
  )
}

export default LogOutButton