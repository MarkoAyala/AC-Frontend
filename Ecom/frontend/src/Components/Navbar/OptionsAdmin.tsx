import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
const Options = () =>{
const DBUser = useAppSelector((state)=> state.user.dataUser)
return(
<>
{
          window.location.pathname !== '/'?(
<Link to={{pathname:'/'}} style={{textDecoration:'none', color:'black'}}>
            <ListItem key={'inicio'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'Inicio'} />
              </ListItemButton>
            </ListItem>
</Link>
          ):null
}
{
  window.location.pathname !== '/CreateProductAdmin' && DBUser.role ===1?(
<Link to={{pathname:'/CreateProductAdmin'}} style={{textDecoration:'none', color:'black'}}>
            <ListItem key={'Crear producto/Actualizar stock'} disablePadding>
              <ListItemButton>
                
                <ListItemText primary={'Crear producto/Actualizar stock'} />
              </ListItemButton>
            </ListItem>
</Link>
  ):null
}
{
  window.location.pathname !== '/OptionsAdmin' && DBUser.role ===1?(
<Link to={{pathname:'/OptionsAdmin'}} style={{textDecoration:'none', color:'black'}}>
            <ListItem key={'Modificar Inicio'} disablePadding>
              <ListItemButton>
                
                <ListItemText primary={'Modificar Inicio'} />
              </ListItemButton>
            </ListItem>
</Link>
  ):null
}
</>
)
}

export default Options