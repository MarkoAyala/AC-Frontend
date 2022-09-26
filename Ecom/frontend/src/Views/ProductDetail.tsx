import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// ========= IMPORT MUI COMPONENTS ========== //
import { Grid , Box, Skeleton , Button } from '@mui/material';
// ============= IMPORT UTILITIES ======== //
import {Swiper , SwiperSlide} from 'swiper/react';
import SwiperCore, {Keyboard , Scrollbar,Pagination , Navigation,} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProductById } from "../app/Reducers/productByIdSlice";
import { Product } from "../app/Interfaces/interfaceProducts";
import { ProductTemplate } from "../app/Utils/postProduct";
import { getProductById } from "../app/Utils/getProductById";
import TittleEfect from "../Components/TitleEffect/TittleEfect";

SwiperCore.use([Keyboard,Scrollbar,Pagination,Navigation])

function ProductDetail(){
    const producto:any = useAppSelector<any>((state:any)=> state.productById.productById);
    const dispatch:any = useAppDispatch();
    const {_id} = useParams();
    useEffect(()=>{
        if(_id){
            dispatch(fetchProductById(_id))
        }
    },[])
    if(producto[0] && producto[0].name !==''){

        return (
            <>
            <Grid container sx={{width:'100%', display:{xs:'none', md:'flex'}, justifyContent:'center', marginTop:'2rem'}}>
                <Grid container sx={{width:{xs:'96%',xl:'80%'},marginTop:'8rem', background:'var(--azulOscuro)', color:'white', borderRadius:'10px'}}>
    
                    {/* Container miniaturas */}
    
                    <Grid item xs={1} sx={{display:'flex', flexDirection:'column'}}>
                        {
                            producto && producto[0] && producto[0].name !== ''?(
                                    <>
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                         
                                    </>
                                ):null
                        }
                    </Grid>
    
                    {/* Imagen principal */}
    
                    <Grid item xs={4} width='478px !important'>
                        <Box sx={{width:'100%',height:'100%', display:'flex !important', justifyContent:'center !important', background:'rgba(0,0,0,0.4)'}}>
                            {
                                producto &&producto[0] && producto[0].name !== ''?(
                                    <Swiper
                                    grabCursor
                                    keyboard={{enabled:true}}
                                    pagination={{clickable:true}}
                                    navigation
                                    loop
                                    style={{padding:'0 0 3rem 0',}}
                                    >
                                        {
                                            producto[0].url?.img1?(
                                            <SwiperSlide style={{display:'flex', justifyContent:''}}>
                                                <img className="pcSwiper" src={producto[0].url.img1} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px', objectFit:'cover'}} />
                                            </SwiperSlide>
                                            ):null
                                        }
                                        {
                                            producto[0].url?.img2?(
                                                <SwiperSlide style={{display:'flex', justifyContent:''}}>
                                                    <img className="pcSwiper" src={producto[0].url.img2} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px', objectFit:'cover'}} />
                                                </SwiperSlide>
                                                ):null
                                        }
                                    </Swiper>
                                ):null
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Grid>



            {/*  MOBILE */}
            <Grid key ='24e23e' container sx={{width:'100%', display:{xs:'flex', md:'none'}, justifyContent:'center', marginTop:'1.2rem'}}>
                <Grid container sx={{width:{xs:'96%',xl:'80%'},marginTop:'8rem', background:'var(--azulOscuro)', color:'white', borderRadius:'10px'}}>
                    <TittleEfect text={producto[0].name} align='center' width='100%' fontSize={"30px"} margin='2rem 0px'/>
                           
                    {/* Container miniaturas */}
    
                    {/* <Grid item xs={1} sx={{display:'flex', flexDirection:'column'}}>
                        {
                            producto && producto[0] && producto[0].name !== ''?(
                                    <>
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                         
                                    </>
                                ):null
                        }
                    </Grid> */}
    
                    {/* Imagen principal */}
                    <Grid item xs={12} >
                        <Box >
                            {
                                producto &&producto[0] && producto[0].name !== ''?(
                                    <Swiper
                                    grabCursor
                                    keyboard={{enabled:true}}
                                    pagination={{clickable:true}}
                                    navigation
                                    loop
                                    style={{padding:'0 0 3rem 0',}}
                                    >
                                        {
                                            producto[0].url?.img1?(
                                            <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                <img className='pcSwiper' src={producto[0].url.img1} alt='noimg' style={{maxWidth:'100%', maxHeight:'500px', width:'auto', objectFit:'cover'}} />
                                            </SwiperSlide>
                                            ):null
                                        }
                                        {
                                            producto[0].url?.img2?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className='pcSwiper' src={producto[0].url.img2} alt='noimg' style={{maxWidth:'100%', maxHeight:'500px', width:'auto', objectFit:'cover'}} />
                                                </SwiperSlide>
                                                ):null
                                        }
                                    </Swiper>
                                ):null
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            </>
        )
    }else{
       return(
        null
       )
    }
}

export default ProductDetail