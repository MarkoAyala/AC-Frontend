import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import css from '../Components/ProductDetail/ProductDetail.module.css';
import MercadoPagoImagen from '../img/mercadopago.png';
// ========= IMPORT MUI COMPONENTS ========== //
import { Grid , Box, Skeleton , Button } from '@mui/material';
import ModalImagenZoomeable from "../Components/ProductDetail/ImagenZoom/ModalImagenZoomeable";
// ============= IMPORT UTILITIES ======== //
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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
// name, descriptiom, picture , price, nombreComprador, emailComprador, telefono, codigodeArea, dni , calle, numero , codigoPostal
function ProductDetail(){
    let [openDialogZoom , setOpenDialogZoom] = React.useState<boolean>(false);
    let [currentZoom , setCurrentZoom] = React.useState<any>();
    let [color , setColor] = React.useState<string|unknown>('');
    let [talle, setTalle] = React.useState<string>("null");
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
      const handleChangeInput = (e:SelectChangeEvent<unknown|string>)=> {
        setColor(color = e.target.value);
        setTalle(talle='null')
       }
      const handleChangeTalle = (e:any) =>{
        setTalle(talle=e.target.id)
      }
    if(producto[0] && producto[0].name !==''){
        let price = producto[0].price.toString().split("")
        let aux = price.splice(2,0,'.');
        let final = price.join('');
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
                                        producto[0].url?.img1?(<img className="select" src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}} alt='noimg'/>):null
                                    }
                                    {
                                        producto[0].url?.img2?(<img className="select" src={producto[0].url.img2} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}} alt='noimg'/>):null
                                    }
                                    {
                                        producto[0].url?.img3?(<img className="select" src={producto[0].url.img3} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}} alt='noimg'/>):null
                                    }
                                    {
                                        producto[0].url?.img4?(<img className="select" src={producto[0].url.img4} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}} alt='noimg'/>):null
                                    }
                                    {
                                        producto[0].url?.img5?(<img className="select" src={producto[0].url.img5} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}} alt='noimg'/>):null
                                    }
                                    {
                                        producto[0].url?.img6?(<img className="select" src={producto[0].url.img6} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}} alt='noimg'/>):null
                                    }
                         
                                    </>
                                ):null
                        }
                    </Grid>
    
                    {/* Imagen principal */}
    
                    <Grid item xs={4} width='478px !important' sx={{maxHeight:'656px'}}>
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
                    <Box className={css.containerInfo}  sx={{overflow:'hidden'}}>
                        <TittleEfect text={producto[0].name} align='start' width='100%' fontSize={"50px"} margin='1rem 1rem'/>
                        {/* <TittleEfect text={`$ ${final}`} align='start' width='100%' fontSize={"35px"} margin='3rem 1rem 1rem 1rem'/> */}
                        <p style={{width:'100%', fontSize:'35px',margin:'3rem 1rem 1rem 1rem', display:'flex', textAlign:'start'}}>{`$ ${final}`}</p>
                        <p style={{margin:'2rem 0rem 3rem 1rem'}}>{producto[0].description}</p>
                        <Grid container width='100%'>
                            <Grid item xs={7} sx={{margin:'1rem 0rem 1rem 1rem'}}>
                                <FormControl sx={{width:"280px", margin:0,padding:0,}}>
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
                                                            <MenuItem key={name[0]} value={name[0]}>{text.toUpperCase()}</MenuItem>
                                                        )
                                                    }else{
                                                        let text = name[0].split('_').join(" ")
                                                        return(
                                                            <MenuItem key={name[0]} value={name[0]}>{text.toUpperCase()}</MenuItem>
                                                        )
                                                    }
                                                }else{

                                                    return (
                                                        <MenuItem key={name[0]} value={name[0]}>{name[0].toUpperCase()}</MenuItem>
                                                    )
                                                }
                                            }):null
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid key={'1234'}item xs={10} sx={{margin:'20px 0rem 20px 1rem'}}>
                        {
                            color && color !== ''?renderColor.map((element:any)=>{
                                let name = Object.keys(element[0]);
                                if(name[0] === color){
                                    return(
                                        <Box key={'avemaria'}>
                                        <p style={{marginBottom:'20px'}}>Talles disponibles:</p>
                                        <Box key={element[0][name[0]]+Math.random()} sx={{display:'flex',flexWrap:'wrap'}}>

                                       {
                                           element[0][name[0]].xs?(
                                               <p key={Math.random()} id='xs' className={css.talles} style={{border:talle === 'xs'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>XS</p>
                                               ):null
                                            }
                                        {
                                        element[0][name[0]].s?(
                                            <p key={Math.random()} id='s' className={css.talles} style={{border:talle === 's'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>S</p>
                                            ):null
                                       }
                                        {
                                        element[0][name[0]].m?(
                                            <p key={Math.random()} id='m' className={css.talles} style={{border:talle === 'm'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>M</p>
                                        ):null
                                       }
                                        {
                                            element[0][name[0]].l?(
                                            <p key={Math.random()} id='l' className={css.talles} style={{border:talle === 'l'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>L</p>
                                        ):null
                                       }
                                        {
                                        element[0][name[0]].xl?(
                                            <p key={Math.random()} id='xl' className={css.talles} style={{border:talle === 'xl'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>XL</p>
                                            ):null
                                        }
                                        {
                                            element[0][name[0]].xxl?(
                                                <p key={Math.random()} id='xxl' className={css.talles} style={{border:talle === 'xxl'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>XXL</p>
                                                ):null
                                            }
                                        </Box>
                                            {
                                                talle && talle === "null"?(
                                                    <p style={{margin:'15px 0px 20px 0px', color:'#ffae34'}}>Porfavor, seleccione un talle</p>
                                                ):null
                                            }
                                        </Box>
                                    )
                                }
                             
                            }):null
                            
                        }
                    </Grid>
                    <Grid item xs={8}>
                        <Button variant='contained' className={css.buttonBuyNow} sx={{"&.MuiButton-root:hover":{backgroundColor:'#2968c8 !important'}}}>Comprar ahora</Button>
                    </Grid>
                        </Grid>
                        <Box width='100%' sx={{margin:'1rem'}}>
                            <img src={MercadoPagoImagen} alt='noimg' style={{objectFit:'cover', width:'240px'}}/>
                        </Box>
                        
                        <Box sx={{display:'flex', margin:'1rem 1rem 1rem 1.2rem', alignItems:'center', width:{md:'100%',lg:'80%'}}}>
                        <LocalShippingIcon color='success' fontSize='large' /><p style={{color:'#239037', margin:'0px 0px 0px 10px'}}>Finalizada la compra, recibiras un correo electrónico con nuestros datos de contacto para estar al tanto del envio.</p>
                        </Box>
                    </Box>
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
                                                <MenuItem key={name[0]} value={name[0]}>{text.toUpperCase()}</MenuItem>
                                            )
                                        }else{
                                            let text = name[0].split('_').join(" ")
                                            return(
                                                <MenuItem key={name[0]} value={name[0]}>{text.toUpperCase()}</MenuItem>
                                            )
                                        }
                                    }else{

                                        return (
                                            <MenuItem key={name[0]} value={name[0]}>{name[0].toUpperCase()}</MenuItem>
                                        )
                                    }
                                }):null
                            }
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid key={'1234'}item xs={10} sx={{margin:'20px auto'}}>
                        {
                            color && color !== ''?renderColor.map((element:any)=>{
                                let name = Object.keys(element[0]);
                                if(name[0] === color){
                                    return(
                                        <Box key={'avemaria'}>
                                        <p style={{marginBottom:'20px'}}>Talles disponibles:</p>
                                        <Box key={element[0][name[0]]+Math.random()} sx={{display:'flex',flexWrap:'wrap'}}>

                                       {
                                           element[0][name[0]].xs?(
                                               <p key={Math.random()} id='xs' className={css.talles} style={{border:talle === 'xs'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>XS</p>
                                               ):null
                                            }
                                        {
                                        element[0][name[0]].s?(
                                            <p key={Math.random()} id='s' className={css.talles} style={{border:talle === 's'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>S</p>
                                            ):null
                                       }
                                        {
                                        element[0][name[0]].m?(
                                            <p key={Math.random()} id='m' className={css.talles} style={{border:talle === 'm'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>M</p>
                                        ):null
                                       }
                                        {
                                            element[0][name[0]].l?(
                                            <p key={Math.random()} id='l' className={css.talles} style={{border:talle === 'l'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>L</p>
                                        ):null
                                       }
                                        {
                                        element[0][name[0]].xl?(
                                            <p key={Math.random()} id='xl' className={css.talles} style={{border:talle === 'xl'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>XL</p>
                                            ):null
                                        }
                                        {
                                            element[0][name[0]].xxl?(
                                                <p key={Math.random()} id='xxl' className={css.talles} style={{border:talle === 'xxl'?'2px solid white':'2px solid var(--marron)'}} onClick={(e)=> handleChangeTalle(e)}>XXL</p>
                                                ):null
                                            }
                                        </Box>
                                            {
                                                talle && talle === "null"?(
                                                    <p style={{margin:'15px 0px 20px 0px', color:'#ffae34'}}>Porfavor, seleccione un talle</p>
                                                ):null
                                            }
                                        </Box>
                                    )
                                }
                             
                            }):null
                            
                        }
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