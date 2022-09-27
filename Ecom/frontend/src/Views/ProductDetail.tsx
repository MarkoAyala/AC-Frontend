import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// ========= IMPORT MUI COMPONENTS ========== //
import { Grid , Box, Skeleton , Button } from '@mui/material';
import ModalImagenZoomeable from "../Components/ProductDetail/ImagenZoom/ModalImagenZoomeable";
// ============= IMPORT UTILITIES ======== //
import {Swiper , SwiperSlide} from 'swiper/react';
import SwiperCore, {Keyboard , Scrollbar,Pagination , Navigation,} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProductById } from "../app/Reducers/productByIdSlice";
import { Product } from "../app/Interfaces/interfaceProducts";
import { ProductTemplate } from "../app/Utils/postProduct";
import { getProductById } from "../app/Utils/getProductById";
import TittleEfect from "../Components/TitleEffect/TittleEfect";

SwiperCore.use([Keyboard,Scrollbar,Pagination,Navigation])

function ProductDetail(){
    let [openDialogZoom , setOpenDialogZoom] = React.useState<boolean>(false);
    let [currentZoom , setCurrentZoom] = React.useState<any>();
    let [color , setColor] = React.useState<any>('');
    let [renderColor , setRenderColor] = React.useState<any>([]);
    const producto:any = useAppSelector<any>((state:any)=> state.productById.productById);
    const dispatch:any = useAppDispatch();
    const {_id} = useParams();
    useEffect(()=>{
        if(_id){
            dispatch(fetchProductById(_id))
        }
    },[])
    useEffect(()=>{
        if(producto[0] && producto[0].name !== ""){
            producto[0].stock.stock.forEach((element:any)=>{
                let name = Object.keys(element[0])
                if(element[0][name[0]][`stock_${name[0]}`] > 0 && name[0] !== 'all'){
                    setRenderColor(renderColor = [...renderColor , element])
                }
            })
        }
    },[producto])

    const handleClickOpenDialogZoomeable = (e:any)=>{
        setCurrentZoom(currentZoom=e)
        setOpenDialogZoom(true);
      }
      const handleChangeInput = (e:SelectChangeEvent<unknown>)=> {
        setColor(color = e.target.value) 
       }
    if(producto[0] && producto[0].name !==''){

        return (
            <>
            <ModalImagenZoomeable openDialogZoom={openDialogZoom} setOpenDialogZoom={setOpenDialogZoom} currentZoom={currentZoom} />
            <Grid container sx={{width:'100%', display:{xs:'none', md:'flex'}, justifyContent:'center', marginTop:'2rem'}}>
                <Grid container sx={{width:{xs:'96%',xl:'80%'},marginTop:'8rem', background:'var(--azulOscuro)', color:'white', borderRadius:'10px'}}>
    
                    {/* Container miniaturas */}
    
                    <Grid item xs={1} sx={{display:'flex', flexDirection:'column'}}>
                        {
                            producto && producto[0] && producto[0].name !== ''?(
                                    <>
                                    {
                                        producto[0].url?.img1?(<img className="select" src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img2?(<img className="select" src={producto[0].url.img2} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img3?(<img className="select" src={producto[0].url.img3} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img4?(<img className="select" src={producto[0].url.img4} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img5?(<img className="select" src={producto[0].url.img5} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                    }
                                    {
                                        producto[0].url?.img6?(<img className="select" src={producto[0].url.img6} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
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
                                            <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                <img className="pcSwiper" src={producto[0].url.img1} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img1)}/>
                                            </SwiperSlide>
                                            ):null
                                        }
                                        {
                                            producto[0].url?.img2?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className="pcSwiper" src={producto[0].url.img2} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img2)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                        {
                                            producto[0].url?.img3?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className="pcSwiper" src={producto[0].url.img3} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img3)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                        {
                                            producto[0].url?.img4?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className="pcSwiper" src={producto[0].url.img4} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img4)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                        {
                                            producto[0].url?.img5?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className="pcSwiper" src={producto[0].url.img5} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img5)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                        {
                                            producto[0].url?.img6?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className="pcSwiper" src={producto[0].url.img6} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img6)}/>
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
                    <TittleEfect text={producto[0].name} align='center' width='100%' fontSize={"30px"} margin='2rem 5px'/>

                    <Grid item xs={12} >
                        <Box>
                            {
                                producto &&producto[0] && producto[0].name !== ''?(
                                    <Swiper
                                    grabCursor
                                    keyboard={{enabled:true}}
                                    pagination={{clickable:true}}
                                    loop
                                    style={{padding:'0 0 3rem 0',}}
                                    >
                                        {
                                            producto[0].url?.img1?(
                                            <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                <img className='pcSwiper' src={producto[0].url.img1} alt='noimg' style={{maxWidth:'100%', maxHeight:'500px', width:'auto', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img1)}/>
                                            </SwiperSlide>
                                            ):null
                                        }
                                        {
                                            producto[0].url?.img2?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className='pcSwiper' src={producto[0].url.img2} alt='noimg' style={{maxWidth:'100%', maxHeight:'500px', width:'auto', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img2)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                        {
                                            producto[0].url?.img3?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className='pcSwiper' src={producto[0].url.img3} alt='noimg' style={{maxWidth:'100%', maxHeight:'500px', width:'auto', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img3)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                        {
                                            producto[0].url?.img4?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className='pcSwiper' src={producto[0].url.img4} alt='noimg' style={{maxWidth:'100%', maxHeight:'500px', width:'auto', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img4)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                        {
                                            producto[0].url?.img5?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className='pcSwiper' src={producto[0].url.img5} alt='noimg' style={{maxWidth:'100%', maxHeight:'500px', width:'auto', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img5)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                        {
                                            producto[0].url?.img6?(
                                                <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
                                                    <img className='pcSwiper' src={producto[0].url.img6} alt='noimg' style={{maxWidth:'100%', maxHeight:'500px', width:'auto', objectFit:'cover'}} onClick={(ev)=>handleClickOpenDialogZoomeable(producto[0].url.img6)}/>
                                                </SwiperSlide>
                                                ):null
                                        }
                                    </Swiper>
                                ):null
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={10} sx={{margin:'20px auto'}}>
                    <FormControl sx={{width:"100%", margin:0,padding:0,}}>
                        <InputLabel id="demo-simple-select-label" sx={{margin:0,padding:0,"&.MuiInputLabel-root":{color:"white"}}}>Color</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Color"
                        name="color"
                        value={color}
                        onChange={(e)=>handleChangeInput(e)}
                        sx={{width:"100%", color:"white",margin:0,padding:0,"& .MuiOutlinedInput-notchedOutline":{borderColor:"#8B4F00", borderWidth:"2px"}}}>
                            {
                                renderColor?renderColor.map((color:any)=>{
                                    let name = Object.keys(color[0]);
                                    if(name[0].indexOf('_') !== -1 || name[0].indexOf('-') !== -1 ){
                                        if(name[0].indexOf('-') !== -1 ){
                                            let text = name[0].split('-').join(" ")
                                            return(
                                                <MenuItem key={name[0]} value={name[0]}>{text}</MenuItem>
                                            )
                                        }else{
                                            let text = name[0].split('_').join(" ")
                                            return(
                                                <MenuItem key={name[0]} value={name[0]}>{text}</MenuItem>
                                            )
                                        }
                                    }else{

                                        return (
                                            <MenuItem key={name[0]} value={name[0]}>{name[0]}</MenuItem>
                                        )
                                    }
                                }):null
                            }
                        </Select>
                    </FormControl>
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