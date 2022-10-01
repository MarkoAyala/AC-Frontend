import React from "react";
import TittleEfect from "../../TitleEffect/TittleEfect";
// ========= IMPORT MUI IMG ============= // 
import mapPc from '../../../img/mapPc.png';
import logo from '../../../img/logo.jpg';
import mapCelu from '../../../img/mapCelu.png';
//========= IMPORT MUI COMPONENTS ==========//
import { Grid, Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer(){
    return(
        <>
        <Grid container width={'100%'} sx={{backgroundColor:'var(--marron)', minHeight:{xs:'80px', md:'100px'}, display:{xs:'none', md:'flex'}, justifyContent:'center'}}>
            <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
                <Box width={{md:'50%', xl:'30%'}}>
                    <img src={logo} alt='noimg' style={{width:'100%', height:'auto', objectFit:'cover', borderRadius:'30px'}}/>
                </Box>
                <Box>
                </Box>
            </Grid>
            <Grid item xs={9} sx={{display:'flex',justifyContent:'center', marginTop:'1rem'}}>
                    <div style={{width:'40%', border:'8px solid white',display:'flex',justifyContent:'center', position:'relative', background:'white', borderRadius:'8px',boxShadow:'1px 10px 20px black',zIndex:10}}><div style={{width:'60px', height:'60px', background:'white', position:'absolute', borderRadius:'100%',margin:'-1.9em',boxShadow:'0px 0px 4px black'}}></div></div>
            </Grid>
            <TittleEfect text='Contacto:' align='center' margin="3.5rem 0 -1.6rem 0" width={'100%'} fontSize='30px' />
            <Grid item xs={9} sx={{display:'flex',justifyContent:'center', marginTop:'2rem'}}>
                <Box sx={{maxWidth:'343px', overflow:'hidden'}}>
                    <a href="https://www.facebook.com/malamadrecueros/" target='_blank'>
                        <IconButton aria-label="delete" color='secondary' size='large' sx={{minWidth:'70px', minHeight:'70px'}}>
                            <FacebookIcon fontSize="large" sx={{transition:'0.2s',"&.MuiSvgIcon-root:hover":{fontSize:'2.8rem'}, overflow:'hidden'}}/>
                        </IconButton>
                    </a>
                    <a href="https://www.instagram.com/camperas_altocuero/" target='_blank'>
                        <IconButton aria-label="delete" color='secondary' size='large' sx={{minWidth:'70px', minHeight:'70px'}}>
                            <InstagramIcon fontSize="large" sx={{transition:'0.2s',"&.MuiSvgIcon-root:hover":{fontSize:'2.8rem'}, overflow:'hidden'}}/>
                        </IconButton>
                    </a>
                    <a target='_blank' href="https://www.google.com.ar/maps/place/34%C2%B035'12.8%22S+58%C2%B023'28.3%22W/@-34.5868889,-58.3911944,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4923f14197849578!8m2!3d-34.5868875!4d-58.3911861">
                        <IconButton aria-label="delete" color='secondary' size='large' sx={{minWidth:'70px', minHeight:'70px'}}>
                            <LocationOnIcon fontSize="large" sx={{transition:'0.2s',"&.MuiSvgIcon-root:hover":{fontSize:'2.8rem'}, overflow:'hidden'}}/>
                        </IconButton>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=541170995410" target='_blank'>
                        <IconButton aria-label="delete" color='secondary' size='large' sx={{minWidth:'70px', minHeight:'70px'}}>
                            <WhatsAppIcon fontSize="large" sx={{transition:'0.2s',"&.MuiSvgIcon-root:hover":{fontSize:'2.8rem'}, overflow:'hidden'}}/>
                        </IconButton>
                    </a>
                </Box>
            </Grid>
            <Grid item xs={9} sx={{display:'flex', justifyContent:'center', marginTop:'1rem', paddingBottom:'1.5rem'}}>
                <span style={{textAlign:'center', fontWeight:'600'}}>Todos los derechos reservados. <br/>&#169; Camperas Alto Cuero</span>
            </Grid>
        </Grid>


        <Grid container width={'100%'} sx={{backgroundColor:'var(--marron)', minHeight:{xs:'80px', md:'100px'}, display:{xs:'flex', md:'none'}, justifyContent:'center', marginTop:'1rem'}}>
            <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
                <Box width={{xs:'89%'}}>
                    <img src={logo} alt='noimg' style={{width:'100%', height:'auto', objectFit:'cover', borderRadius:'30px'}}/>
                </Box>
                <Box>
                </Box>
            </Grid>
            <Grid item xs={9} sx={{display:'flex',justifyContent:'center', marginTop:'1rem'}}>
                    <div style={{width:'90%', border:'5px solid white',display:'flex',justifyContent:'center', position:'relative', background:'white', borderRadius:'8px',boxShadow:'1px 10px 20px black',zIndex:10}}><div style={{width:'40px', height:'40px', background:'white', position:'absolute', borderRadius:'100%',margin:'-1.4em',boxShadow:'0px 0px 4px black'}}></div></div>
            </Grid>
            <TittleEfect text='Contacto:' align='center' margin="2rem 0 -1.6rem 0" width={'100%'} fontSize='25px' />
            <Grid item xs={12} sx={{display:'flex',justifyContent:'center', marginTop:'2rem'}}>
                <Box sx={{maxWidth:'343px', overflow:'hidden'}}>
                    <a href="https://www.facebook.com/malamadrecueros/" target={'_blank'}>
                        <IconButton aria-label="delete" color='secondary' size='large' sx={{minWidth:'30px', minHeight:'70px'}}>
                            <FacebookIcon fontSize="large" sx={{transition:'0.2s'}}/>
                        </IconButton>
                    </a>
                    <a href="https://www.instagram.com/camperas_altocuero/" target='_blank'>
                        <IconButton aria-label="delete" color='secondary' size='large' sx={{minWidth:'30px', minHeight:'70px'}}>
                            <InstagramIcon fontSize="large" sx={{transition:'0.2s'}}/>
                        </IconButton>
                    </a>
                    <a target='_blank' href="https://www.google.com.ar/maps/place/34%C2%B035'12.8%22S+58%C2%B023'28.3%22W/@-34.5868889,-58.3911944,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4923f14197849578!8m2!3d-34.5868875!4d-58.3911861">
                        <IconButton aria-label="delete" color='secondary' size='large' sx={{minWidth:'30px', minHeight:'70px'}}>
                            <LocationOnIcon fontSize="large" sx={{transition:'0.2s'}}/>
                        </IconButton>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=541170995410" target='_blank'>
                        <IconButton aria-label="delete" color='secondary' size='large' sx={{minWidth:'30px', minHeight:'70px'}}>
                            <WhatsAppIcon fontSize="large" sx={{transition:'0.2s'}}/>
                        </IconButton>
                    </a>

                </Box>
            </Grid>
            <Grid item xs={9} sx={{display:'flex', justifyContent:'center', marginTop:'1rem', paddingBottom:'1.5rem'}}>
                <span style={{textAlign:'center', fontWeight:'600'}}>Todos los derechos reservados. <br/>&#169; Camperas Alto Cuero</span>
            </Grid>
        </Grid>

        
        </>
    )
}