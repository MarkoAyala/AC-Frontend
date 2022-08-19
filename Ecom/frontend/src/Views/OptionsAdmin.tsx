import React, { useEffect } from 'react'
// =========== IMPORT UTILITIES ============== //
import { useAuth0 } from "@auth0/auth0-react";
import { postImages } from '../app/Utils/postImages';
import { Box, Button, Grid, Snackbar , Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// ========== IMPORT COMPONENTS ================ // 
import TittleEfect from '../Components/TitleEffect/TittleEfect';
import Upload from '../Components/Upload/Upload';


function OptionsAdmin() {
    const { isAuthenticated, user, isLoading } = useAuth0();
    let [saveImage , setSaveImage] = React.useState([{name:''}])
    let [saveCart , setSaveCart] = React.useState([{name:''}])
    let [saveCartWoman , setSaveCartWoman] = React.useState([{name:''}])
    let [upload , setUpload] = React.useState(false);
    let [successUpload , setSuccessUpload] = React.useState(false);
    let [homeImg , setHomeImg] = React.useState({name:'home', url:'', public_id:''})
    const navigate = useNavigate()
    useEffect(()=>{
      console.log('sabeimge', saveImage)
    },[saveImage])
    const handleNavigate = ()=> navigate('/CreateProductAdmin');
    const removeFile = (filename:string,state:any, setState:any) => {
      setState([state]=[{name:''}])
    }
    const uploadImage = async (el:any, name:string) =>{
      const files:any|null = el[0];
      const data = new FormData()
      data.append('file', files)
      data.append("upload_preset", "CamperasAltoCuero")
      const res = await fetch(
        "http://api.cloudinary.com/v1_1/morgan22/image/upload",
        {
          method: "POST",
          body: data,
        }
      )
      const file = await res.json()
      setSuccessUpload(true);
      setUpload(true);
      if(name === 'HOME'){
        setHomeImg(homeImg={name:'home',url:file.secure_url,public_id:file.public_id})
      }
      if(name === 'MAN'){
        setHomeImg(homeImg={name:'man',url:file.secure_url,public_id:file.public_id})
      }
      if(name==='WOMAN'){
        setHomeImg(homeImg={name:'woman',url:file.secure_url,public_id:file.public_id})
      }
    }
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setSuccessUpload(false);
    }
    const handleChangeImage = (state:any,text:string)=> {
      if(state[0].name !== '' && state[0] !== undefined)
      uploadImage(state,text)
      .then(()=>postImages(homeImg))
      console.log('home', homeImg)
    }
  return (
    <Grid container sx={{width:'100%', margin:'7em 0 0 0', display:'flex', justifyContent:'center'}}>
        <Grid item xs={11} sm={8} md={5}>
            <Button onClick={handleNavigate} sx={{height:'80px', borderRadius:'12px', fontSize:{xs:'14px', md:'20px'}}}  variant='contained' color='info' fullWidth>Crear porducto / Actualizar Stock</Button>
        </Grid>
        <Grid item xs={11} sm={8} sx={{display:'flex', flexDirection:'column',alignItems:'center', margin:'2em 0 0 0'}}>
          <TittleEfect text="Cambiar imagen home" align='center' margin="20px 0px 20px 0px" width={'100%'} fontSize={'24px'}/>
          <Upload saveImage={saveImage} setSaveImage={setSaveImage} removeFile={removeFile} setUpload={setUpload} one={true}/>
          <Box width={{xs:'100%',sm:'100%', md:'60%', lg:'50%', xl:'37%'}} sx={{margin:'0.4em 0 0 0'}} >
            <Button onClick={(e)=>handleChangeImage(saveImage,'HOME')} sx={{height:'50px', borderRadius:'12px', fontSize:'15px'}}  variant='contained' color='info' fullWidth>Actualizar home</Button>
          </Box>
        </Grid>
          <Snackbar open={successUpload} autoHideDuration={6000} onClose={handleClose} sx={{margin:'0px 0px 2em 0px'}}>
            <Alert onClose={handleClose} color="success" severity="success" sx={{ width: '100%' }}>
              Imagenes subidas con exito!
            </Alert>
          </Snackbar>
          <Grid item xs={11} sm={8} sx={{display:'flex', flexDirection:'column',alignItems:'center', margin:'2em 0 0 0'}}>
          <TittleEfect text="Imagen carta hombre" align='center' margin="20px 0px 20px 0px" width={'100%'} fontSize={'24px'}/>
          <Upload saveImage={saveCart} setSaveImage={setSaveCart} removeFile={removeFile} setUpload={setUpload} one={true}/>
          <Box width={{xs:'100%',sm:'100%', md:'60%', lg:'50%', xl:'37%'}} sx={{margin:'0.4em 0 0 0'}} >
            <Button onClick={(e)=>handleChangeImage(saveCart,'MAN')} sx={{height:'50px', borderRadius:'12px', fontSize:'15px'}}  variant='contained' color='info' fullWidth>Actualizar carta</Button>
          </Box>
        </Grid>
        <Grid item xs={11} sm={8} sx={{display:'flex', flexDirection:'column',alignItems:'center', margin:'2em 0 0 0'}}>
          <TittleEfect text="Imagen carta mujer" align='center' margin="20px 0px 20px 0px" width={'100%'} fontSize={'24px'}/>
          <Upload saveImage={saveCartWoman} setSaveImage={setSaveCartWoman} removeFile={removeFile} setUpload={setUpload} one={true}/>
          <Box width={{xs:'100%',sm:'100%', md:'60%', lg:'50%', xl:'37%'}} sx={{margin:'0.4em 0 0 0'}} >
            <Button onClick={(e)=>handleChangeImage(saveCartWoman,'WOMAN')} sx={{height:'50px', borderRadius:'12px', fontSize:'15px'}}  variant='contained' color='info' fullWidth>Actualizar carta</Button>
          </Box>
        </Grid>
    </Grid>
  )
}

export default OptionsAdmin