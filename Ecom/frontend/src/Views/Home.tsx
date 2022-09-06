import React, { useEffect, useMemo, useState } from "react";
import css from '../Components/Home/Home.module.css';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useAuth0 } from "@auth0/auth0-react";
import { UserFavorite } from "../app/Interfaces/interfaceUser";
import { userFavoriteTemplate } from "../app/Utils/userUtilities";
import { editUser } from "../app/Utils/userUtilities";
// =========== IMAGENES ============ //
import CardWomen from '../img/mujer.jpg';
import CardMan from '../img/hombre.jpg';
// =========== IMPORT COMPONENTS ================//
import CardsMOW from "../Components/Home/MenOrWoman/CardsMOW";
import TittleEfect from "../Components/TitleEffect/TittleEfect";
import ProductsCards from "../Components/Home/ProductsCards/ProductsCards";
import ListFilter from "../Components/Home/ListFilter/ListFilter";
import CarritoAndFavorito from "../Components/CarAndFavoriteIcons/CarritoAndFavorito";
import PaidIcon from '@mui/icons-material/Paid';
// =========== Import MUI COMPONENTS ============ //
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import Filter from "../Components/Filters/Filter";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { fetchProducts } from "../app/Reducers/productSlice";
import { fetchImages } from "../app/Reducers/ImagesSlice";
import { Typography } from "@mui/material";
import Footer from "../Components/Home/Footer/Footer";
function Home() {
  const DBUser = useAppSelector((state)=> state.user.dataUser)
  const {user , isAuthenticated, isLoading , logout} = useAuth0();
  let [addFavorite , setAddFavorite] = useState<UserFavorite>(userFavoriteTemplate);
  const dispatch = useAppDispatch();
  const fetchImagenes= useAppSelector((state)=> state.images.images);
  const fetchProductos = useAppSelector((state)=> state.products.products)
  let [loading, setLoading] = React.useState(true);
  // Filtros //
  let [filter, setFilter] = React.useState<{color:string|undefined , size:string|undefined , tags:string|undefined}>({
    color:undefined,
    size:undefined,
    tags:undefined
  })
  //=========//
  useEffect(()=>{
    dispatch(fetchImages());
    dispatch(fetchProducts({tags:undefined, color:undefined , size:undefined})).then(()=> setLoading(false))
  },[])

useMemo(()=>{
    setLoading(true)
    dispatch(fetchProducts(filter)).then(()=>setLoading(false))
},[filter])
useEffect(()=>console.log(DBUser),[DBUser]);
const handleFavorite = (element:any,text:string)=>{

}
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
      {
        loading?(
          <>
          <Grid item sm={10} md={9} lg={9} xl={7} xs={12} display={{xs:'none', sm:'flex'}}>
            <Skeleton variant="rectangular" width={'100%'} height={'600px'} sx={{bgcolor:'#222'}} animation="wave"/>
          </Grid>
          <Grid item xs={9} sm={11} display={{xs:'flex', sm:'none'}}>
          <Skeleton variant="rectangular" width={'100%'} height={'525px'} sx={{bgcolor:'#222'}} animation="wave"/>
          </Grid>
          </>
        ):(
          <>
      <Grid item sm={10} md={9} lg={9} xl={7} xs={12} display={{xs:'none', sm:'flex'}}>
        <img src={fetchImagenes[0]?.url?fetchImagenes[0].url:null} alt="alto cuero" style={{width:'100%', height:"auto"}} />
      </Grid>
      <Grid item xs={9} sm={11} display={{xs:'flex', sm:'none'}}>
        <img src={fetchImagenes[3]?.url?fetchImagenes[3].url:null} alt="alto cuero" style={{width:'100%', height:"auto"}} />
      </Grid>
          </>
      
        )
      }
      </Grid>
      <Grid item xs={12} sx={{display:'flex', justifyContent:'center', margin:'3rem', padding:'0px !important'}}>
        <Grid item xs={1} sx={{position:'absolute'}}>
          <div className={css.filtro}>Filtros:</div>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{display:"flex", padding:"0px !important", justifyContent:"center" , marginTop:"4rem"}}>
        <Grid item lg={4} xl={3} md={5} sm={6} xs={6} sx={{color:"white",display:"flex", justifyContent:"end"}}>
         <CardsMOW key='123' imagen={CardMan} setFilter={setFilter} name={'man'}/>
        </Grid>
        <Grid item lg={4} xl={3} md={5} sm={6} xs={6} sx={{color:"white",display:"flex", justifyContent:"start"}}>
          <CardsMOW key='1234' imagen={CardWomen} setFilter={setFilter} name={'woman'}/>
        </Grid>
      </Grid>
        <Filter filter={filter} setFilter={setFilter}/>
      <div style={{width:'100%', border:'1px solid var(--azulOscuro)', margin:'2em 0 2em 0'}}></div>

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
        <Grid item xs={12} sm={8} sx={{display:'flex', justifyContent:{xs:'space-around',md:'start'}, margin:'10px 0px 10px 0px', minHeight:'42px'}}>
          <ListFilter filter={filter} setFilter={setFilter}/>
        </Grid>
      </Grid>
      <div id="Camperas" style={{width:'0px', visibility:'hidden'}}></div>
      <ProductsCards fetchProductos={fetchProductos} loading={loading} handleFavorite={handleFavorite}/>
      <div id="Ubicacion" style={{width:'0px', visibility:'hidden'}}></div>
      <Footer/>
      <div id="Contacto" style={{width:'0px', visibility:'hidden'}}></div>
    </Grid>
  );
}

export default Home;
