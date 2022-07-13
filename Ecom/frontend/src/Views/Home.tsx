import React from "react";
// =========== IMAGENES ============ //
import Portada from '../img/portada.jpg'
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
      <Grid item xs={12} sx={{border:"2px solid white", display:"flex", padding:"0px !important", justifyContent:"center"}}>
        <Grid item xs={5} sx={{color:"white", border:"2px solid blue"}}>
    hola 1
        </Grid>
        <Grid item xs={5} sx={{color:"white", border:"2px solid blue"}}>
          hola 2
        </Grid>
      </Grid>


    </Grid>
  );
}

export default Home;
