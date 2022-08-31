import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Link } from 'react-scroll';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import css from './Navbar.module.css'
import { Typography } from '@mui/material';
import Options from './OptionsAdmin';

import {useAuth0} from '@auth0/auth0-react';

import Logo from '../../img/logo.jpg';

type Anchor ='left'

interface Props {
    toggleDrawer: Function,
    state: {left:boolean},
    isAuthenticated:boolean,
    user?:{
      email?:string,
      email_verified?:boolean,
      nickname?:string,
      picture?:string,
      sub?:string,
      updated_at?:string,
    } | undefined
}

export default function DrawerNav({toggleDrawer, state,isAuthenticated, user}:Props) {
  const {logout} = useAuth0()

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width:250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <Box className={css.userBox}>
    {
      isAuthenticated?(
        <>
        <Box sx={{width:"50%"}}>
        <img src={user?.picture} alt="no_user" className={css.userImg}/>
        </Box>
        <Typography textAlign={"center"}>{user?.nickname}</Typography>
        <Typography textAlign={"center"} sx={{fontSize:"14px",color:"gray"}} onClick={()=> logout({returnTo: window.location.origin})} >Cerrar sesión</Typography>
        </>
      ):(
        <>
        <Box sx={{width:"50%"}}>
        <img src={Logo} alt="no_user" className={css.userImg}/>
        </Box>
        <Typography textAlign={"center"}>100% Cuero</Typography>
        <Typography textAlign={"center"} sx={{fontSize:"14px",color:"gray"}} onClick={()=> logout({returnTo: window.location.origin})} >Iniciar Sesión</Typography>
        </>
      )
    }
    </Box>
      <Divider />
      <List>
        {
          window.location.pathname === '/'?(
            <>
            <Link spy={true} to={'Camperas'} smooth={true} onClick={toggleDrawer(anchor, false)}>
              <ListItem key={"Camperas"} disablePadding>
                <ListItemButton>
                  
                  <ListItemText primary={"Camperas"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link spy={true} to={'Ubicacion'} smooth={true} onClick={toggleDrawer(anchor, false)}>
              <ListItem key={"Ubicación"} disablePadding>
                <ListItemButton>
                  
                  <ListItemText primary={"Ubicación"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link spy={true} to={'Contacto'} smooth={true} onClick={toggleDrawer(anchor, false)}>
              <ListItem key={"Contacto"} disablePadding>
                <ListItemButton>
                  
                  <ListItemText primary={"Contacto"} />
                </ListItemButton>
              </ListItem>
            </Link>
            {
              isAuthenticated?(
            <ListItem key={"Productos Favoritos"} disablePadding>
              <ListItemButton>
                
                <ListItemText primary={"Productos Favoritos"} />
              </ListItemButton>
            </ListItem>
              ):null
            }
            </>
          ):null
        }
          
          <Options/>

      </List>
    </Box>
  );

  return (
    <div>
  
        <React.Fragment key={'left'}>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>

    </div>
  );
}