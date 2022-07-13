import React, { useEffect, useState } from "react";
// ========= CSS ================//
import css from  '../Components/Navbar/Navbar.module.css';
// ========== Auth0 ============= //
import { useAuth0 } from '@auth0/auth0-react';
import LogginButton from '../Components/Loggin/LogginButton';
import LogOutButton from '../Components/Loggin/LogOutButton';
// ========= MUI COMPONENTS ========= //
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// ====== Import imagenes ========= //
import Logo from '../img/logo.jpg';
// ===== Components ==========//
import DrawerNav from "../Components/Navbar/DrawerNav";
import { useAppSelector } from "../app/hooks";
/* 
country: "Incomplete"
createdAt: "2022-07-11T18:44:43.876Z"
email: "markoayala3@hotmail.com"
firstName: "Incomplete"
lastName: "Incomplete"
nickname: "markoayala3"
picture: "https://s.gravatar.com/avatar/466b661626e32060fe96dff1f52eec54?s=480"
role: 0
shoppingCart: []
updatedAt: "2022-07-12T02:51:22.576Z"
__v: 0
_id: "62cc6f9fb86b6aa844865dbd" */

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const {user , isAuthenticated, isLoading , logout} = useAuth0();
  const DBUser = useAppSelector((state)=> state.user.dataUser)
  useEffect(()=> console.log("load",isLoading),[isLoading])


  // Logic drawer //
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  type Anchor ='left'
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
// ================// 
  return (
    <AppBar position="fixed" sx={{backgroundColor:"var(--marron)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
          display={"flex"}
          alignItems="center"
          sx={{flexGrow:0}}
          >
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, mr: 1 , height:"9vh"}}>
          <img src={Logo} style={{width:"100%", height:"auto"}} alt="noimge" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TITULARDO
          </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer('left', true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <DrawerNav toggleDrawer={toggleDrawer} state={state} isAuthenticated={isAuthenticated} user={DBUser}/>
          </Box>

          <Box sx={{flexGrow:1, display: {xs:"none", lg:"flex"}, justifyContent:"end", marginRight:"3%"}}>
          <div className="btn fromCenter">Inicio</div>
          <div className="btn fromCenter">From Center</div>
          <div className="btn fromCenter">From Center</div>
          <div className="btn fromCenter">From Center</div>
          <div className="btn fromCenter">From Center</div>
          </Box>

            {isLoading?(
              <Box sx={{ flexGrow: 0, display:"flex"}}>
                <Skeleton variant="text" width={100}/>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p:0,marginLeft:"9px" }}>
                  {
                    isLoading?(
                      <Skeleton variant="circular" width={40} height={40} />
                    ): <Avatar alt="Remy Sharp" src={DBUser.picture} />
                  }
                 
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
  
                  <MenuItem key={"Edit"} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Editar mi información</Typography>
                  </MenuItem>
                  <MenuItem key={"Close"} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Cerrar sesión</Typography>
                  </MenuItem>
              </Menu>
            </Box>
            ):isAuthenticated?(
              <Box sx={{ flexGrow: 0, display:"flex"}}>
              <Typography
          variant="h6"
          noWrap
          component="span"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily:"sans-serif",
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
            margin:"auto"
          }}
        >
          {DBUser.nickname}
        </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p:0,marginLeft:"9px" }}>
                {
                  isLoading?(
                    <Skeleton variant="circular" width={40} height={40} />
                  ): <Avatar alt="Remy Sharp" src={DBUser.picture} />
                }
               
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

                <MenuItem key={"Edit"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Editar mi información</Typography>
                </MenuItem>
                <MenuItem key={"Close"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={()=> logout({returnTo: window.location.origin})}>Cerrar sesión</Typography>
                </MenuItem>
            </Menu>
          </Box>
            ):(
              <LogginButton/>
            )
            }
       
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

/* email: "markoayala3@hotmail.com"
email_verified: false
name: "markoayala3@hotmail.com"
nickname: "markoayala3"
picture: "https://s.gravatar.com/avatar/466b661626e32060fe96dff1f52eec54?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png"
sub: "auth0|62be23768cc36d316ecf1dde"
updated_at: "2022-06-30T22:30:40.182Z" */
/* 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 */