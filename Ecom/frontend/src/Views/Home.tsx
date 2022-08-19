import React, { useEffect } from "react";
import css from '../Components/Home/Home.module.css';
import { useAppDispatch, useAppSelector } from "../app/hooks";
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
import Filter from "../Components/Filters/Filter";
import { fetchImages } from "../app/Reducers/ImagesSlice";
function Home() {
  const {user , isAuthenticated, isLoading , logout} = useAuth0();
  const dispatch = useAppDispatch();
  const fetchImagenes= useAppSelector((state)=> state.images.images)
  // Filtros //
  let [checked, setChecked] = React.useState({
    all:true,
    red:false,
    yellow:false,

  });
  function handleChangeCheckBox(e:React.ChangeEvent<HTMLInputElement>){
    let nombre = e.target.name;
    if(nombre === 'all'){
      setChecked(checked={...checked, [e.target.name]:checked.all?false:true})
    }
    if(nombre === 'red'){
      setChecked(checked={...checked, [e.target.name]:checked.red?false:true})
    }
    if(nombre === 'yellow'){
      setChecked(checked={...checked, [e.target.name]:checked.yellow?false:true})
    }
  }
  //=========//
  useEffect(()=>{
    dispatch(fetchImages());
  },[])
  useEffect(()=>{
console.log("hola rey",fetchImagenes)
  },[fetchImagenes])
  return (
    <Grid
      container
      maxWidth={"xl"}
      spacing={2}
      sx={{margin: "6vh auto"}}
    >
      {
        isAuthenticated?(
          <CarritoAndFavorito/>
        ):null
      }
      <Grid item xs={12} sx={{display:"flex", justifyContent:"center", "&.MuiGrid-item":{padding:'0px'}, margin:'1.5em 0 0 0'}}>

      <Grid item sm={10} md={9} lg={9} xl={7} xs={12} display={{xs:'none', sm:'flex'}}>
        <img src={fetchImagenes[0]?.url?fetchImagenes[0].url:null} alt="alto cuero" style={{width:'100%', height:"auto"}} />
      </Grid>
      <Grid item xs={11} sm={11} display={{xs:'flex', sm:'none'}}>
        <img src={fetchImagenes[3]?.url?fetchImagenes[3].url:null} alt="alto cuero" style={{width:'100%', height:"auto"}} />
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

      {/* Filtro y cards */}
      <Grid item xs={12} display={'flex'} sx={{border:"1px solid white", marginTop:"2rem", justifyContent:"center"}}>
        <Grid item xs={3} sx={{border:"1px solid red"}}>
        <Filter checked={checked} setChecked={setChecked} handleChangeCheckBox={handleChangeCheckBox}/>
        </Grid>
        <Grid item xs={8}>

        </Grid>
      </Grid>


    </Grid>
  );
}

export default Home;
