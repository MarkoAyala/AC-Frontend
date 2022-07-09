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
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// ====== Import imagenes ========= //
import Logo from '../img/logo.jpg';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const {user , isAuthenticated, isLoading} = useAuth0();
  useEffect(() => {
    console.log(user)
  }, [user])


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

  return (
    <AppBar position="fixed" sx={{backgroundColor:"var(--marron)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
          display={"flex"}
          alignItems="center"
          sx={{border:"1px solid black", flexGrow:0}}
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
            100% CUERO
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
   
          </Box>

          <Box sx={{flexGrow:1, display: {xs:"none", lg:"flex"}, justifyContent:"end", marginRight:"3%"}}>
          <div className="btn fromCenter">Inicio</div>
          <div className="btn fromCenter">From Center</div>
          <div className="btn fromCenter">From Center</div>
          <div className="btn fromCenter">From Center</div>
          <div className="btn fromCenter">From Center</div>
          </Box>

            {isAuthenticated?(
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
            {user?.nickname}
          </Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p:0,marginLeft:"9px" }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            ):(
              <LogginButton/>
            )}
       
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