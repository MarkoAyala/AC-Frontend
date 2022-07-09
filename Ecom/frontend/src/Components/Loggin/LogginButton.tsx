import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

function LogginButton() {
    const {loginWithRedirect} = useAuth0();
  return (
    <div>
        <div className="btn fromCenter" onClick={()=> loginWithRedirect()}>Iniciar Sesion</div>
    </div>
  )
}

export default LogginButton