import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";


const OptionsNavbar = ()=> {
    const DBUser = useAppSelector((state)=> state.user.dataUser)
    const handlePath = ()=>{
        window.location.pathname ='/OptionsAdmin'
    }
    return(
        <>
        {
        window.location.pathname !== '/OptionsAdmin' && DBUser?.role ===1?(
            <Link to={{pathname:'/OptionsAdmin'}} onClick={handlePath} style={{textDecoration:'none', color:'black'}}>
                    <div className="btn fromCenter">Administrador</div>
            </Link>
        ):null
        
        }
        </>
    )
}

export default OptionsNavbar