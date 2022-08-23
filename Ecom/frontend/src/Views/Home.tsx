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
import ProductsCards from "../Components/Home/ProductsCards/ProductsCards";
import CarritoAndFavorito from "../Components/CarAndFavoriteIcons/CarritoAndFavorito";
import PaidIcon from '@mui/icons-material/Paid';
// =========== Import MUI COMPONENTS ============ //
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import Filter from "../Components/Filters/Filter";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { fetchProducts } from "../app/Reducers/productSlice";
import { fetchImages } from "../app/Reducers/ImagesSlice";
import { Typography } from "@mui/material";
function Home() {
  const {user , isAuthenticated, isLoading , logout} = useAuth0();
  const dispatch = useAppDispatch();
  const fetchImagenes= useAppSelector((state)=> state.images.images);
  const fetchProductos = useAppSelector((state)=> state.products.products)
  // Filtros //
  let [filter, setFilter] = React.useState({
    color:[''],
    tags:['']
  })
  //=========//
  useEffect(()=>{
    dispatch(fetchImages());
    dispatch(fetchProducts());
  },[])
useEffect(()=>{
  console.log(fetchProductos)
},[fetchProductos])
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
      <Grid item xs={9} sm={11} display={{xs:'flex', sm:'none'}}>
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
        <Filter filter={filter} setFilter={setFilter}/>
      <div style={{width:'100%', border:'1px solid var(--azulOscuro)', margin:'2em 0 2em 0'}}></div>

      {/* Solo para celular por el momento */}
      <Grid container width={'100%'} sx={{display:'flex', justifyContent:'center'}}>
        <Grid item xs={8} sx={{display:'flex', justifyContent:{xs:'space-around',md:'start'}, margin:'10px 0px 10px 0px'}}>
          <ShoppingCartCheckoutIcon color='success'/>
          <Box width={'80%'} margin={{xs:'none',md:'0px 0px 0px 1em'}}>
            <Typography variant="subtitle2" sx={{color:'green'}}>Envios gratis a todo el país</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{display:'flex', justifyContent:{xs:'space-around',md:'start'}, margin:'10px 0px 10px 0px'}}>
          <PaidIcon color='success'/>
          <Box width={'80%'} margin={{xs:'none',md:'0px 0px 0px 1em'}}>
            <Typography variant="subtitle2" sx={{color:'green'}}>10% de descuento pagando en efectivo!</Typography>
          </Box>
        </Grid>
      </Grid>
      <ProductsCards fetchProductos={fetchProductos} />
    </Grid>
  );
}

export default Home;
