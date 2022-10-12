import React from 'react';
import Banner from '../img/banner.png';
import { useSearchParams } from 'react-router-dom';
import Footer from '../Components/Home/Footer/Footer';
// ============= MUI COMPONENTS ============ //
import { Grid , Box , Button } from '@mui/material';
export const Failed = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('payment_id');
    return (
        <>
        <Grid container sx={{width:'100%', marginTop:{xs:'3rem', md:'7rem'},color:'white'}}>
            <Grid item xs={11} md={8} sx={{margin:'0px auto'}}>
                <img alt='noimg' src={Banner} style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
                <h2 style={{textAlign:'center', margin:'20px 0px 30px 0px'}}>
                    Algo salio mal al hacer tu compra 😥
                </h2>
                <p style={{padding:'0rem 1rem 0rem 1rem'}}>Porfavor, verifica tener saldo en tu cuenta. En caso que sea error nuestro te pedimos una disculpa. <br/> Comunicate con nosotros: <br/>click aqui {"->"}<a className='noVisited' href='https://api.whatsapp.com/send?phone=541170995410' style={{fontWeight:'bold'}}> WhatsApp</a></p>
                <Box sx={{width:{xs:'80%',md:'30%'}, margin:'1rem auto 5rem auto'}}>

                <Button variant='contained' fullWidth href='/' >Volver al inicio</Button>
                </Box>
            </Grid>
        </Grid>
        <Footer/>
        </>
    )
}