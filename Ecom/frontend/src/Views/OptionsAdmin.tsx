import React, { useEffect } from 'react'
// =========== IMPORT UTILITIES ============== //
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function OptionsAdmin() {
    const { isAuthenticated, user, isLoading } = useAuth0();
    const navigate = useNavigate()
    useEffect(()=>{

    },[isAuthenticated])
    const handleNavigate = ()=> navigate('/CreateProductAdmin')
  return (
    <Grid container sx={{width:'100%', margin:'7em 0 0 0', display:'flex', justifyContent:'center'}}>
        <Grid item xs={5}>
            <Button onClick={handleNavigate} sx={{height:'80px', borderRadius:'12px', fontSize:'20px'}}  variant='contained' color='info' fullWidth>Crear porducto / Actualizar Stock</Button>
        </Grid>
    </Grid>
  )
}

export default OptionsAdmin