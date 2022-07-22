import React from "react";
import css from '../Components/Home/Home.module.css';
import { useAuth0 } from '@auth0/auth0-react';
// =========== IMAGENES ============ //
import Portada from '../img/portada.jpg';
import CardWomen from '../img/mujer.jpg';
import CardMan from '../img/hombre.jpg';
// =========== IMPORT COMPONENTS ================//
import CardsMOW from "../Components/Home/MenOrWoman/CardsMOW";
import CarritoAndFavorito from "../Components/CarAndFavoriteIcons/CarritoAndFavorito";
// =========== Import MUI COMPONENTS ============ //
import Grid from "@mui/material/Grid";
function Home() {
  const {user , isAuthenticated, isLoading , logout} = useAuth0();
  return (
    <Grid
      container
      maxWidth={"xl"}
      spacing={2}
      sx={{margin: "6vh auto" }}
    >
      {
        isAuthenticated?(
          <CarritoAndFavorito/>
        ):null
      }
      <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>

      <Grid item sm={10} md={9} lg={9} xl={7} xs={12}>
        <img src={Portada} alt="alto cuero" style={{width:'100%', height:"auto"}} />
      </Grid>
      </Grid>
      <Grid item xs={12} sx={{display:"flex", padding:"0px !important", justifyContent:"center" , marginTop:"4rem"}}>
        <Grid item lg={4} xl={3} md={5} sm={6} xs={6} sx={{color:"white",display:"flex", justifyContent:"end"}}>
         <CardsMOW imagen={CardMan}/>
        </Grid>
        <Grid item lg={4} xl={3} md={5} sm={6} xs={6} sx={{color:"white",display:"flex", justifyContent:"start"}}>
          <CardsMOW imagen={CardWomen}/>
        </Grid>
      </Grid>


    </Grid>
  );
}

export default Home;
