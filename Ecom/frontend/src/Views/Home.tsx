import React, { useEffect, useMemo, useState } from "react";
import css from '../Components/Home/Home.module.css';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useAuth0 } from "@auth0/auth0-react";
// ========= UTILITIES =========== //
import { Link } from "react-scroll";
import { userFavoriteTemplate } from "../app/Utils/userUtilities";
import { fetchProducts } from "../app/Reducers/productSlice";
import { fetchUserByEmail } from "../app/Reducers/userSlice";
import { fetchImages } from "../app/Reducers/ImagesSlice";
import { editUser } from "../app/Utils/userUtilities";
import { ProductTemplate } from "../app/Utils/postProduct";
import { Product } from "../app/Interfaces/interfaceProducts";
// ========== INTERFACES ============ //
import { StarProducts } from "../app/Interfaces/interfaceRandoms";
import { UserFavorite } from "../app/Interfaces/interfaceUser";
import { Images } from "../app/Interfaces/interfaceRandoms";
// =========== IMAGENES ============ //
import CardWomen from '../img/mujer.jpg';
import CardMan from '../img/hombre.jpg';
// =========== IMPORT COMPONENTS ================//
import Ubicacion from "../Components/Home/Ubicacion/Ubicacion";
import Filter from "../Components/Filters/Filter";
import CardsMOW from "../Components/Home/MenOrWoman/CardsMOW";
import TittleEfect from "../Components/TitleEffect/TittleEfect";
import ProductsCards from "../Components/Home/ProductsCards/ProductsCards";
import ListFilter from "../Components/Home/ListFilter/ListFilter";
import Footer from "../Components/Home/Footer/Footer";
// =========== Import MUI COMPONENTS ============ //
import PaidIcon from '@mui/icons-material/Paid';
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Typography } from "@mui/material";
import { PayloadAction } from "@reduxjs/toolkit";

function Home() {
  const DBUser = useAppSelector((state)=> state.user.dataUser)
  const {user , isAuthenticated, isLoading , logout} = useAuth0();
  let [addFavorite , setAddFavorite] = useState<UserFavorite>(userFavoriteTemplate);
  let [images , setImages] = React.useState<Array<Images>>([{default:''}]);
  let [starProducts , setStarProducts] = useState<Array<StarProducts>>([{favorite:true,id:'', producto:ProductTemplate}]);
  let [users,setUsers] = React.useState({favorites:[], email:''})
  const dispatch = useAppDispatch();
  const fetchImagenes= useAppSelector((state)=> state.images.images);
  const fetchProductos = useAppSelector((state)=> state.products.products);
  let [loading, setLoading] = React.useState<boolean>(true);
  let [loadingCards, setLoadingCards] = React.useState<boolean>(true);
  // Filtros //
  let [filter, setFilter] = React.useState<{color:string|undefined , size:string|undefined , tags:string|undefined}>({
    color:undefined,
    size:undefined,
    tags:undefined
  })
  //=========//
  useEffect(()=>{
    dispatch(fetchImages());
    dispatch(fetchProducts({tags:undefined, color:undefined , size:undefined})).then(()=>{
      setLoading(false);
      setLoadingCards(false);
    })
  },[])

useMemo(()=>{
    if(filter.color !== undefined || filter.size !== undefined || filter.tags !== undefined){
      setLoadingCards(true)
      dispatch(fetchUserByEmail(user))
      .then((res:any)=>{
        setUsers(users=res.payload);
        return dispatch(fetchProducts(filter))
      })
      .then((response:PayloadAction<any>)=>{
        setImages(images=response.payload.map((e:Product)=>{
          return {...e.url, default:e.url.img1}
        }));
        setLoadingCards(false);
        setStarProducts(starProducts = response.payload.map((el:Product)=>{return {favorite:false , id:el._id, producto:el}}));
        return response.payload
      })
      .then((respuesta:any)=>{
        respuesta.forEach((e:Product, i:number)=> {
          if(users && users.email !== '' && fetchProductos[0]?._id){
            users.favorites.forEach((el:Product, index:number)=>{
              if(el._id === e._id){
                setStarProducts(starProducts=starProducts.map((a:StarProducts,a2:number)=>{
                  if(a.id === el._id){
                    return {favorite:true , id:a.id,producto:e}
                  }else{
                    return a
                  }
                  
                }))
              }
            })
          }
        })
      })
      .then(()=>setLoading(false))
    }else{
      setLoadingCards(true)
      dispatch(fetchProducts(filter)).then((respuesta:PayloadAction<any>)=>{
        setImages(images=respuesta.payload.map((e:Product)=>{
          return {...e.url, default:e.url.img1}
        }))
        setStarProducts(starProducts = respuesta.payload.map((el:Product)=>{return {favorite:false , id:el._id, producto:el}}));
        if(user?.nickname !== "undefined" && user?.nickname !=='' && user?.nickname !==undefined && isAuthenticated){
          dispatch(fetchUserByEmail(user))
        }
        setLoadingCards(false);
      })
    }
},[filter])


const handleFavorite = (text:string, numb:number, id:string)=>{
  
  if(text === 'fav'){
    setStarProducts(starProducts = starProducts.map((e:StarProducts , i:number)=>{
      if(i === numb){
        return {favorite:e.favorite === true?false:true, id:e.id , producto:e.producto}
      }else{
        return e
      }
    }))
    let aux = starProducts.map((elemento:StarProducts)=>{
      if(elemento.favorite === true){
        return elemento.producto
      }
    })
    let aux2 = DBUser.favorites.map((elem:Product)=> {
      let reto = true;
      starProducts.forEach((ele2:any)=>{
        if(ele2 !== undefined){
          if(elem._id === ele2.producto._id){
            reto = false
          }
        }
      })
      if(reto){
        return elem
      }else{
        return undefined
      }
    })
    let aux3 = [...aux , ...aux2]
    setAddFavorite(addFavorite={
        _id:DBUser._id,
        email:DBUser.email,
        favorites:aux3.filter((ea:Product|undefined)=> ea !== undefined),
        firstName:DBUser.firstName,
        lastName:DBUser.lastName,
        nickname:DBUser.nickname,
        picture:DBUser.picture,
        role:DBUser.role,
        shoppingCart:DBUser.shoppingCart || [],
        country:DBUser.country
      })
      editUser(addFavorite).then((res)=>setAddFavorite(userFavoriteTemplate)).then((response)=>dispatch(fetchUserByEmail(user)))
  }  
  if(text === 'unfav'){
    setStarProducts(starProducts = starProducts.map((e:StarProducts , i:number)=>{
      if(i === numb){
        return {favorite:e.favorite === true?false:true, id:e.id , producto:e.producto}
      }else{
        return e
      }
    }))
    let aux2 = DBUser.favorites.map((elem:Product)=> {
      let reto:boolean = true;
      let unic:Product|undefined = elem;
      starProducts.forEach((ele2:StarProducts)=>{
        if(ele2 !== undefined){
          if(elem._id === id || ele2.favorite === false || elem._id === ele2.id){
            reto = false
          }
          if(elem._id === ele2.id){
            unic = undefined
          }
        }
      })
      if(reto || unic !== undefined){
        return elem
      }else{
        return undefined
      }
    })
    
    let auxFinal2 = starProducts.map((element:StarProducts)=>element && element.favorite === true?element.producto:undefined)
    let aux3 = [...aux2 , ...auxFinal2]
    setAddFavorite(addFavorite={
      _id:DBUser._id,
      email:DBUser.email,
      favorites:aux3.filter((ea:Product|undefined)=> ea !== undefined),
      firstName:DBUser.firstName,
      lastName:DBUser.lastName,
      nickname:DBUser.nickname,
      picture:DBUser.picture,
      role:DBUser.role,
      shoppingCart:DBUser.shoppingCart || [],
      country:DBUser.country
    })
    editUser(addFavorite).then((res)=>setAddFavorite(userFavoriteTemplate)).then((response)=>dispatch(fetchUserByEmail(user)))
  }
  
}



  return (
    <Grid
      container
      maxWidth={"xl"}
      spacing={2}
      sx={{margin:"6vh auto 0px auto"}}
    >
      
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
           <Link spy={true} to='Camperas' smooth={true}>
        <img src={fetchImagenes[0]?.url?fetchImagenes[0].url:null} className='noSelect' alt="alto cuero" style={{width:'100%', height:"auto", cursor:'pointer'}} />
           </Link>
      </Grid>
      <Grid item xs={9} sm={11} display={{xs:'flex', sm:'none'}}>
        <Link spy={true} to='Camperas' smooth={true}>
          <img src={fetchImagenes[3]?.url?fetchImagenes[3].url:null} className='noSelect' alt="alto cuero" style={{width:'100%', height:"auto"}} />
        </Link>
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

      {
        loading?(
          <Grid item xs={12} sx={{display:"flex", padding:"0px !important", justifyContent:"center" , marginTop:"4rem"}}>
          <Grid item lg={4} xl={3} md={5} sm={6} xs={6} sx={{color:"white",display:"flex", justifyContent:"end"}}>
            <Skeleton variant="rectangular" width={'100%'} height={'300px'} sx={{bgcolor:'#222'}} animation="wave"/>
          </Grid>
          <Grid item lg={4} xl={3} md={5} sm={6} xs={6} sx={{color:"white",display:"flex", justifyContent:"start"}}>
            <Skeleton variant="rectangular" width={'100%'} height={'300px'} sx={{bgcolor:'#222'}} animation="wave"/>
          </Grid>
        </Grid> 
        ):(
          <Grid item xs={12} sx={{display:"flex", padding:"0px !important", justifyContent:"center" , marginTop:"4rem"}}>
            <Grid item lg={4} xl={3} md={5} sm={6} xs={6} sx={{color:"white",display:"flex", justifyContent:"end"}}>
            <CardsMOW key='123' imagen={fetchImagenes[1]?.url?fetchImagenes[1].url:null} setFilter={setFilter} name={'man'}/>
            </Grid>
            <Grid item lg={4} xl={3} md={5} sm={6} xs={6} sx={{color:"white",display:"flex", justifyContent:"start"}}>
              <CardsMOW key='1234' imagen={fetchImagenes[2]?.url?fetchImagenes[2].url:null} setFilter={setFilter} name={'woman'}/>
            </Grid>
          </Grid>
        )
      }

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
      <ProductsCards fetchProductos={fetchProductos} loading={loadingCards} handleFavorite={handleFavorite} starProducts={starProducts} setStarProducts={setStarProducts} images={images} setImages={setImages} filter={filter} />
      <div id="Ubicacion" style={{width:'0px', visibility:'hidden'}}></div>
      <Ubicacion/>
      <Footer/>
      <div id="Contacto" style={{width:'0px', visibility:'hidden'}}></div>
    </Grid>
  );
}

export default Home;
