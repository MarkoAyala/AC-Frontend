import React from "react";
import css from '../Components/Home/Home.module.css';
// =========== IMAGENES ============ //
import Portada from '../img/portada.jpg';
import CardWomen from '../img/mujer.jpg';
import CardMan from '../img/hombre.jpg';
// =========== IMPORT COMPONENTS ================//
import CardsMOW from "../Components/Home/MenOrWoman/CardsMOW";
// =========== Import MUI COMPONENTS ============ //
import Grid from "@mui/material/Grid";
function Home() {
  return (
    <Grid
      container
      maxWidth={"xl"}
      spacing={2}
      sx={{margin: "10vh auto" }}
    >
      <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>

      <Grid item xs={7}>
        <img src={Portada} alt="alto cuero" style={{width:'100%', height:"auto"}} />
      </Grid>
      </Grid>
      <Grid item xs={12} sx={{display:"flex", padding:"0px !important", justifyContent:"center" , marginTop:"3rem"}}>
        <Grid item xs={5} sx={{color:"white",display:"flex", justifyContent:"end"}}>
         <CardsMOW imagen={CardMan}/>
        </Grid>
        <Grid item xs={5} sx={{color:"white"}}>
          <CardsMOW imagen={CardWomen}/>
        </Grid>
      </Grid>


    </Grid>
  );
}

export default Home;
