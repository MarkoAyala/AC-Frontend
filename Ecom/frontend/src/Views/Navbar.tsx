import { useAuth0 } from '@auth0/auth0-react';
import React , {useEffect} from 'react'
// ------ Import components -------- // 
import LogginButton from '../Components/Loggin/LogginButton';
import LogOutButton from '../Components/Loggin/LogOutButton';

function Navbar() {
  const {user , isAuthenticated, isLoading} = useAuth0();
  useEffect(() => {
    console.log(user)
  }, [user])
  
  return (
    <div style={{width:"100%", height:"80px", border:"1px solid green"}}>
        <LogginButton/>
        <LogOutButton/>
    </div>
  )
}

export default Navbar

/* email: "markoayala3@hotmail.com"
email_verified: false
name: "markoayala3@hotmail.com"
nickname: "markoayala3"
picture: "https://s.gravatar.com/avatar/466b661626e32060fe96dff1f52eec54?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png"
sub: "auth0|62be23768cc36d316ecf1dde"
updated_at: "2022-06-30T22:30:40.182Z" */