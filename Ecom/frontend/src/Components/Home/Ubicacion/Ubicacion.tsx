import React from "react";
// ========= IMPORT MUI IMG ============= // 
import mapPc from '../../../img/mapPc.png';
import mapCelu from '../../../img/mapCelu.png';
//========= IMPORT MUI COMPONENTS ==========//
import { Grid, Box } from "@mui/material";

export default function Ubicacion(){
    return(
        <>
        <Grid container width={{md:'90%',lg:'70%'}} sx={{margin:'3rem auto', justifyContent:'space-between', display:{xs:'none',md:'flex'}}}>
            <Grid item xs={5} sx={{color:'white', display:'flex',flexDirection:'column', marginTop:'5vh'}}>
                <span style={{textDecoration:'underline', marginBottom:'10px'}}>¿Dónde estamos ubicados?</span>
                <span>Todos los sábados de 10 de la mañana a 19hs estamos en la feria de Recoleta, ubicada en frente del Centro Cultural Recoleta y a la vuelta del cementerio. </span>
                <div style={{border:'4px solid var(--azulOscuro)', width:'100%', margin:'15px auto'}}></div>
                <span style={{textDecoration:'underline', marginBottom:'10px'}}>¿Quiénes somos?</span>
                Somos una pequeña PYME que se dedica al rubro del cuero hace más de 10 años. Pisamos fuerte en el mercado ya que nuestro objetivo es brindar una excelente calidad a un precio único. 
               
                <div style={{border:'4px solid var(--azulOscuro)', width:'100%', margin:'15px auto'}}></div>
                Comunicarse vía WhatsApp por otros puntos de encuentro en CABA.
                <a style={{marginTop:'6vh', textDecoration:'underline', color:'var(--marron)', fontSize:'20px'}} target='_blank' href="https://www.google.com.ar/maps/place/34%C2%B035'12.8%22S+58%C2%B023'28.3%22W/@-34.5868889,-58.3911944,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4923f14197849578!8m2!3d-34.5868875!4d-58.3911861">Click aqui para ver en Google Maps</a>
            </Grid>
            <Grid item xs={6} sx={{display:'flex', justifyContent:'center'}}>
                <img src={mapPc} alt='noimg' style={{width:'100%', height:'auto', objectFit:'cover', borderRadius:'30px'}}/>
            </Grid>
        </Grid>
        <Grid container width={{xs:'90%'}} sx={{margin:'1rem auto', justifyContent:'center', display:{xs:'flex',md:'none'}, alignItems:'center'}}>
            <Grid item xs={12} sx={{color:'white', display:'flex',flexDirection:'column', marginTop:'5vh'}}>
                <span style={{textDecoration:'underline', marginBottom:'10px'}}>¿Dónde estamos ubicados?</span>
                <span>Todos los sábados de 10 de la mañana a 19hs estamos en la feria de Recoleta, ubicada en frente del Centro Cultural Recoleta y a la vuelta del cementerio. </span>
                <div style={{border:'4px solid var(--azulOscuro)', width:'100%', margin:'15px auto'}}></div>
                Comunicarse vía WhatsApp por otros puntos de encuentro en CABA.
                <div style={{border:'4px solid var(--azulOscuro)', width:'100%', margin:'15px auto'}}></div>
                
            </Grid>
            <Grid item xs={11} sm={6} sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <img src={mapCelu} alt='noimg' style={{width:'100%', height:'auto', objectFit:'cover', borderRadius:'30px'}}/>
                <a style={{marginTop:'3vh', textDecoration:'underline', color:'var(--marron)', fontSize:'20px'}} target='_blank' href="https://www.google.com.ar/maps/place/34%C2%B035'12.8%22S+58%C2%B023'28.3%22W/@-34.5868889,-58.3911944,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4923f14197849578!8m2!3d-34.5868875!4d-58.3911861">Click aqui para ver en Google Maps</a>
            </Grid>
        </Grid>

        
        </>
    )
}