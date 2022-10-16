import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import css from '../Components/ProductDetail/ProductDetail.module.css';
import MercadoPagoImagen from '../img/mercadopago.png';
import FormUser from "../Components/ProductDetail/FormUser/FormUser";
// ========= IMPORT MUI COMPONENTS ========== //
import { Grid , Box, Skeleton , Button } from '@mui/material';
import Footer from "../Components/Home/Footer/Footer";
import ModalImagenZoomeable from "../Components/ProductDetail/ImagenZoom/ModalImagenZoomeable";
// ============= IMPORT UTILITIES ======== //
import { Compra , RenderColor, ErrorCompra } from "../app/Interfaces/interfaceRandoms";
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
import { useAuth0 } from "@auth0/auth0-react";

SwiperCore.use([Keyboard,Scrollbar,Pagination,Navigation])
// name, descriptiom, picture , price, nombreComprador, emailComprador, telefono, codigodeArea, dni , calle, numero , codigoPostal
//
function ProductDetail(){
    const DBUser = useAppSelector((state)=> state.user.dataUser);
    const { isAuthenticated, user, isLoading } = useAuth0();
    let [openDialogZoom , setOpenDialogZoom] = React.useState<boolean>(false);
    let [currentZoom , setCurrentZoom] = React.useState<any>();
    let [color , setColor] = React.useState<string|unknown>('default');
    let [talle, setTalle] = React.useState<string>("null");
    let [renderColor , setRenderColor] = React.useState<Array<Array<RenderColor>>|[]>([]);
    let [errorCompra , setErrorCompra] = React.useState<ErrorCompra>({
            required : false, 
            nombre_comprador: '', 
            email_comprador:'', 
            celular:'',
             codigo_de_area:'',
             dni:'',
             calle:'',
             provincia:'',
             numeracion:'',
             codigo_postal:''
    });
    let [openCompra, setOpenCompra] = React.useState<boolean>(false);
    let [compra , setCompra] = React.useState<Compra>({
        name:'',
        description:'',
        picture:'',
        price:0,
        nombre_comprador:'',
        email_comprador:'',
        codigo_de_area:'',
        celular:'',
        dni:'',
        provincia:'',
        calle:'',
        numeracion:'',
        codigo_postal:'',
        id_producto:''
    });
    let [error, setError] = React.useState<{bloq:boolean,talle:boolean,color:boolean}>({bloq:false,talle:true,color:true});
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
            });
            setCompra(compra={...compra, name:producto[0].name,picture:producto[0].url.img1, price:producto[0].price})
        }
    },[producto])

    const handleClickOpenDialogZoomeable = (e:any)=>{
        setCurrentZoom(currentZoom=e)
        setOpenDialogZoom(true);
      }
      const handleChangeInput = (e:SelectChangeEvent<unknown|string>)=> {
        setColor(color = e.target.value);
        setTalle(talle='null')
        setError(error={bloq:false, talle:true,color:false})
       }
      const handleChangeTalle = (e:any) =>{
        setTalle(talle=e.target.id);
        setError(error={bloq:false, color:false,talle:false})
      }

    const handleComprarAhora = () =>{
        if(error.talle || error.color)setError(error={...error, bloq:true});
        if(!error.bloq && !error.talle && !error.color && errorCompra.required === false){
            setOpenCompra(true);
            setCompra(compra={...compra, description:`campera de cuero color ${color}, talle ${talle}`, email_comprador:DBUser.email, id_producto:_id});
        }
    }   
    const handleChangeCompra = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setCompra(compra={...compra, [e.target.name]:e.target.value});
        let objError = buyValidation({...compra , [e.target.name]:e.target.value});
        setErrorCompra(objError);
    }

    const buyValidation = (input:Compra)=>{
        let errores = {required : false , nombre_comprador: '', email_comprador:'', celular:'', codigo_de_area:'', dni:'', calle:'', provincia:'', numeracion:'', codigo_postal:''};
        if(input.nombre_comprador.length >= 13){
            errores.nombre_comprador = 'Max 13 caracteres';
            errores.required = true;
        }
        if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email_comprador))){
            errores.email_comprador = "Mail invalido";
            errores.required = true;
        }
        if(input.celular !== ''){
            if(!(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(input.celular))){
                errores.celular = 'Cel invalido, Ejemplo: 1180554325';
                errores.required = true;
            }
        }
        if(input.codigo_de_area !== ''){
            if(!(/^([0-9])*$/.test(input.codigo_de_area))){
                errores.codigo_de_area = 'Solo numeros';
                errores.required = true;
            }
        }
        if(input.dni !== ''){
            if(!(/^([0-9])*$/.test(input.dni))){
                errores.dni = 'Solo numeros';
                errores.required = true;
            }
        }
        if(input.calle !== ''){
            if(!(/^[A-Z]+$/i.test(input.calle))){
                errores.calle = 'Solo letras';
                errores.required = true;
            }
        }
        if(input.provincia !== ''){
            if(input.provincia){
                errores.provincia = 'Solo letras';
                errores.required = true;
            }
        }
        if(input.numeracion !== ''){
            if(!(/^([0-9])*$/.test(input.numeracion))){
                errores.numeracion = 'Solo numeros';
                errores.required = true;
            }
        }
        if(input.codigo_postal !== ''){
            if(!(/^([0-9])*$/.test(input.codigo_postal)) || input.codigo_postal.length >=7){
                errores.codigo_postal = 'Max 6nums';
                errores.required = true;
            }
        }
        return errores
    }

    useEffect(()=>{
        if(compra){
            console.log(compra)
        }
    },[compra])
    if(producto[0] && producto[0].name !==''){
        let price = producto[0].price.toString().split("")
        let aux = price.splice(2,0,'.');
        let final = price.join('');
        return (
            <>
            <FormUser openCompra={openCompra} setOpenCompra={setOpenCompra} compra={compra} handleChangeCompra={handleChangeCompra} errorCompra={errorCompra}/>
            <ModalImagenZoomeable openDialogZoom={openDialogZoom} setOpenDialogZoom={setOpenDialogZoom} currentZoom={currentZoom}/>
            <Grid container sx={{width:'100%', display:{xs:'none', md:'flex'}, justifyContent:'center', marginTop:'2rem', marginBottom:'9rem'}}>
                <Grid container sx={{width:{xs:'96%',xl:'80%'},marginTop:'8rem', background:'var(--azulOscuro)', color:'white', borderRadius:'10px', paddingBottom:'2rem'}}>
    
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
                        <p style={{width:'100%', fontSize:'35px',margin:'3rem 1rem 1rem 1rem', display:'flex', textAlign:'start'}}>{`$ ${producto[0].price.toString().length >= 5?final:producto[0].price}`}</p>
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
                                    <MenuItem key={'12332122'} value={'default'} sx={{visibility:'hidden', display:'none'}} >Selecciona un color</MenuItem>

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
                            color && color !== '' && renderColor !==null?renderColor.map((element:any)=>{
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
                        <Button variant='contained' className={css.buttonBuyNow} sx={{"&.MuiButton-root:hover":{backgroundColor:'#2968c8 !important'}}} onClick={handleComprarAhora}>Comprar ahora</Button>
                        {
                            error.bloq && isAuthenticated?(
                                <p style={{display:!error.color && !error.talle?'none':'block' }} className={css.error}>{error.color && error.talle?"Debe seleccionar un color y talle":error.color?"Debe seleccionar un color":error.talle?'Debe seleccionar un talle':null}</p>
                            ):null
                        }
                        {
                            !isAuthenticated && !isLoading?(
                                <p className={css.error} style={{color:"#f9ac05"}}>Debes iniciar sesión para hacer una compra</p>
                            ):null
                        }
                    </Grid>
                        </Grid>
                        <Box width='100%' sx={{margin:'1rem'}}>
                            <img src={MercadoPagoImagen} alt='noimg' className="noSelect" style={{objectFit:'cover', width:'240px'}}/>
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
                            <MenuItem key={'123321'} value={'default'} sx={{visibility:'hidden', display:'none'}} >Selecciona un color</MenuItem>
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
                    <p style={{width:'100%', fontSize:'25px',margin:'1rem 1rem 0.1rem 1rem', display:'flex', textAlign:'start', color:'#db9844'}}>{`Precio:`}</p>
                    <p style={{width:'100%', fontSize:'35px',margin:'0.1rem 1rem 1rem 1rem', display:'flex', textAlign:'start'}}>{`$ ${producto[0].price.toString().length >= 5?final:producto[0].price}`}</p>
                    <Grid item xs={12} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                        <Button variant='contained' className={css.buttonBuyNaw} sx={{"&.MuiButton-root:hover":{backgroundColor:'#2968c8 !important'}, margin:'1.5rem auto 0rem auto'}} onClick={handleComprarAhora}>Comprar ahora</Button>
                        {
                            error.bloq && isAuthenticated?(
                                <p style={{display:!error.color && !error.talle?'none':'block' , width:'90%' }} className={css.errorMobile}>{error.color && error.talle?"Debe seleccionar un color y talle":error.color?"Debe seleccionar un color":error.talle?'Debe seleccionar un talle':null}</p>
                            ):null
                        }
                        {
                            !isAuthenticated && !isLoading?(
                                <p className={css.errorMobile} style={{color:"#f9ac05" , width:'90%'}}>Debes iniciar sesión para hacer una compra</p>
                            ):null
                        }
                    </Grid>
                    <p style={{width:'100%', fontSize:'25px',margin:'1rem 1rem 0.1rem 1rem', display:'flex', textAlign:'start', color:'#db9844'}}>{`Descripción:`}</p>
                    <p style={{width:"90%", margin:'0.3rem auto 1rem auto'}}>{producto[0].description}</p>
                    <Box sx={{display:'flex', margin:'1rem 1rem 1rem 1.2rem', alignItems:'center', width:{md:'100%',lg:'80%'}}}>
                        <LocalShippingIcon color='success' fontSize='large' /><p style={{color:'#239037', margin:'0px 0px 0px 10px'}}>Finalizada la compra, recibiras un correo electrónico con nuestros datos de contacto para estar al tanto del envio.</p>
                    </Box>
                    <Box width='100%' sx={{margin:'1rem', display:'flex', justifyContent:'center'}}>
                            <img src={MercadoPagoImagen} alt='noimg' style={{objectFit:'cover', width:'240px'}} className="noSelect"/>
                    </Box>
                </Grid>
            </Grid>
            <Footer/>
            </>
        )
    }else{
       return(
        null
       )
    }
}

export default ProductDetail