import React from 'react';
import Banner from '../img/banner.png';
import { useSearchParams } from 'react-router-dom';
import Footer from '../Components/Home/Footer/Footer';
// ============= MUI COMPONENTS ============ //
import { Grid , Box , Button } from '@mui/material';
export const Success = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('payment_id');
    return (
        <>
        <Grid container sx={{width:'100%', marginTop:{xs:'3rem', md:'7rem'},color:'white'}}>
            <Grid item xs={11} md={8} sx={{margin:'0px auto'}}>
                <img alt='noimg' src={Banner} style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
                <h2 style={{textAlign:'center', margin:'20px 0px 30px 0px'}}>
                    Gracias por tu compra 🧡
                </h2>
                <p style={{padding:'0rem 1rem 0rem 1rem'}}>En breve deberia llegarte a tu correo electronico un mail con nuestro contacto e información de envio. <br/> Ante cualquier duda/consulta escribinos, <span style={{fontWeight:'bold'}}>recuerda que tu mensaje no es molestia 😀</span></p>
                <h3 style={{margin:'20px 0px 1rem 1rem'}}>Comprobante de pago: <span style={{backgroundColor:'var(--marron)', padding:'2px 15px 2px 15px', borderRadius:'3px', marginTop:'20px'}}>{id && id}</span></h3>
                <Box sx={{width:{xs:'80%',md:'30%'}, margin:'1rem auto 5rem auto'}}>

                <Button variant='contained' fullWidth href='/' >Volver al inicio</Button>
                </Box>
            </Grid>
        </Grid>
        <Footer/>
        </>
    )
}