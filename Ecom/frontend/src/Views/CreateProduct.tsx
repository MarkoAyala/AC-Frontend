import React, { useEffect } from "react";
import css from '../Components/CreateProduct/CreateProduct.module.css';
// ========== Import MUI COMPONENTS ============= //
import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Grid";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from "@mui/system";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import TittleEfect from "../Components/TitleEffect/TittleEfect";

function CreateProduct() {
  let [info, setInfo] = React.useState({url:{}});
  let [render, setRender] = React.useState([1]);
  let [loading, setLoading] = React.useState(false);
  let [tags, setTags] = React.useState('');
  let [renderTags,setRenderTags] = React.useState(['']);
  let [saveImage , setSaveImage] = React.useState([{name:""}]);
  let [successUpload , setSuccessUpload] = React.useState(false);
  let [upload , setUpload] = React.useState(false);

  // ALERT SUCCES AFTER UPLOAD IMAGES WITH CLUDINARY // 
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessUpload(false);
  }

  useEffect(()=> console.log("sabeimage",saveImage),[saveImage])
  // select tags 
  const handleChange = (event:any | never) => {
    setTags(event.target.value as string);
    if(!renderTags.includes(event.target.value)){
      setRenderTags(renderTags=[...renderTags,event.target.value])
    }
  };
  // ====== // 

  const newImagen = () =>{
    if(render.length<=5){
        setRender(render=[...render,render.length+1])
    }
  }
  const deleteImagen = ()=>{
    if(render.length>1){
      let num:number|undefined = render.pop()
      setRender(render=[])
      if(num !== undefined){
        for(let i = 1;i <= num-1; i++){
          newImagen();
        }
      }
    }
    if(saveImage.length>1){
      let deleteImg:any = saveImage.pop()
      let newArray:any = saveImage.filter((e)=> e.name !== deleteImg[0].name);
      setSaveImage(newArray);
    }
  }
// Conexion clodinary // 
  const saveImagen = async (e:any) => {
    setUpload(false)
    setSaveImage(saveImage=[...saveImage , e.target.files])
  }
  const uploadImage = async (el: any) => {
    el.forEach(async (e:any, i:number)=>{
      if(i !== 0){
        const files: any | null = e[0];
        const data = new FormData()
        data.append("file", files)
        data.append("upload_preset", "CamperasAltoCuero")
        const res = await fetch(
          "http://api.cloudinary.com/v1_1/morgan22/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const file = await res.json()
        if(i === (saveImage.length-1)){
          setLoading(false);
          setSuccessUpload(true);
          setUpload(true);
        }
        setInfo(
          (info = {
            ...info,
            url:{...info.url,[`img${i}`]: file.secure_url}
          })
        )
      }else{
        setLoading(true);
      }
    })
  };
  // =========================// 
  
  // Colores textfield//
  const CssInput = styled(InputLabel)({
    '&.MuiInputLabel-root':{
      color:"white"
    }
  });
  const CssSelect = styled(Select)({
    '&.MuiSelect-select':{
      color:"white"
    },
    '& .MuiOutlinedInput-notchedOutline':{
      borderColor:"#8B4F00"
    },
  })
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#8B4F00',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#8B4F00',
      },
      '&:hover fieldset': {
        borderColor: '#f9ac05',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8B4F00',
      },
    },
    '& .MuiInputLabel-root': {
      color:"white"
    },
    '& .MuiInputBase-input':{
      color:"white"
    }
  });
  return (
    <Grid container width="100%" sx={{ marginTop:{xs:"7rem", md:"10rem"}, border: "1px solid white", display:'flex', alignItems:"center", flexDirection:"column"}}>
      <TittleEfect text="Nuevo Producto" align="start" margin="0px 0px 2rem 0rem" width={'80%'}/>
      <Box width={{xs:"93%",sm:"80%",lg:"70%"}} justifyContent="center">

      <Grid container width={{xs:"100%"}} className={css.containerForm}>
      <Grid item xs={11} sm={5} lg={5} sx={{margin:"15px 5px 15px 5px"}}>
        <CssTextField fullWidth label="Nombre" focused/>
      </Grid>
      <Grid item xs={11} sm={5} lg={5} sx={{margin:"15px 5px 15px 5px"}}>
      <FormControl sx={{width:"100%", margin:0,padding:0,}}>
      <CssInput id="demo-simple-select-label" sx={{margin:0,padding:0,}}>Stock</CssInput>
        <CssSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tags}
            label="Tags"
            onChange={handleChange}
            sx={{width:"100%", color:"white",margin:0,padding:0,}}
          >
            <MenuItem value={'hola'}>Ten</MenuItem>
            <MenuItem value={'dos'}>Twenty</MenuItem>
            <MenuItem value={'treh'}>Thirty</MenuItem>
          </CssSelect>
        </FormControl>
      </Grid>
      <Grid item xs={5} sm={5} md={5} lg={1} sx={{margin:"15px 5px 15px 5px"}}>
        <CssTextField fullWidth label="Precio" focused />
      </Grid>
      <Grid item xs={5} sx={{margin:"15px 5px 15px 5px"}}>
        <FormControl sx={{width:"100%", margin:0,padding:0,}}>
      <CssInput id="demo-simple-select-label" sx={{margin:0,padding:0,}}>Tags</CssInput>
        <CssSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tags}
            label="Tags"
            onChange={handleChange}
            sx={{width:"100%", color:"white",margin:0,padding:0,}}
          >
            <MenuItem value={'hola'}>Ten</MenuItem>
            <MenuItem value={'dos'}>Twenty</MenuItem>
            <MenuItem value={'treh'}>Thirty</MenuItem>
          </CssSelect>
        </FormControl>
      </Grid>
      <Grid item xs={11} sm={11} md={11} lg={5} sx={{margin:"15px 5px 15px 5px", border:"2px solid #8B4F00", borderRadius:"6px", minHeight:"56px"}} display="flex" justifyContent="center" alignItems={"center"}>
      {renderTags.map((e)=>{
        if(e.length>=2){
        return(
          <span style={{margin:"0px 0px 0px 5px"}}>{"#"+e}</span>
        )}
      })}
      </Grid>
      <Grid item xs={1} sx={{margin:"15px 5px 15px 5px"}}>
      </Grid>

      <Grid item xs={12} sx={{margin:"15px 5px 15px 5px"}}>
      <CssTextField fullWidth label="Descripción" rows={4} sx={{padding:"0px 15px 0px 15px"}} multiline focused/>
      </Grid>
        {render? render.map((e,i)=>{
            return(
                <>
              <Grid item xs={12}>
              <FormGroup
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Label for="exampleFile" style={{margin:"10px 0px 10px 0px", borderBottom:"2px solid #8B4F00", paddingBottom:"3px"}}>
                  Imagen: {i+1}
                </Label>
                <Input
                  id="exampleFile"
                  name={`img${e}`}
                  type="file"
                  placeholder="Imagen 1"
                  onChange={(e) => saveImagen(e)}
                />
                <FormText>
                  Cuando salga el nombre de la imagen significa que cargo correctamente
                </FormText>
              </FormGroup>
                  </Grid>
                </>
            )
            
        }):null }
        <Grid item xs={12} display="flex" justifyContent={"flex-start"} flexDirection="column" sx={{margin:"1.5rem 0px 0px 0px"}}>
          {
            saveImage.length>1?(
            <Box sx={{margin:"0px 0px 10px 30px", width:{xs:"85%", md:"60%", lg:"40%"}}}>
              <Alert severity="success" color="success" sx={{color:"white"}}>Al menos 1 imagen subida</Alert>
            </Box>
            ):(
              <Box sx={{margin:"0px 0px 10px 30px", width:{xs:"85%", md:"60%", lg:"40%"}}}>
                <Alert severity="warning">Al menos 1 imagen subida</Alert>
              </Box>
            )
          }
          {
            upload?(
              <Box sx={{margin:"0px 0px 10px 30px", width:{xs:"85%", md:"60%", lg:"40%"}}}>
              <Alert severity="success">Imagenes cargadas</Alert>
            </Box>
            ):(
              <Box sx={{margin:"0px 0px 10px 30px", width:{xs:"85%", md:"60%", lg:"40%"}}}>
              <Alert severity="error">No se han cargado imagenes</Alert>
              </Box>
            )
          }
        </Grid>
         <Grid item xs={12} sx={{display:"flex",justifyContent:"end"}}>
                    {
                      loading?(
                        <Box display="flex" margin={"0px 30px 0px 0px"} >
                          <h5 style={{lineHeight:"30px", margin:"0px 10px 0px 0px"}}>Subiendo imagenes</h5>
                          <CircularProgress size={30} color="primary"/>
                        </Box>
                      ):null
                    }
          </Grid>
          <Snackbar open={successUpload} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} color="info" severity="success" sx={{ width: '100%' }}>
              Imagenes subidas con exito!
            </Alert>
          </Snackbar>
        <Grid container sx={{display:"flex", justifyContent:"space-around", margin:"2rem 0px 0px 0px",padding:0,}}>
        <Grid item xs={11} md={3}>
          <div style={{zIndex:1000}} className='btn fromCenter' onClick={(e)=>deleteImagen()}>Eliminar imagen</div>
        </Grid>
        <Grid item xs={11} md={3}>
          <div style={{zIndex:1000}} className='btn fromCenter' onClick={(e)=>newImagen()}>Agregar imagen</div>
        </Grid>
        <Grid item xs={11} md={3}>
          <div style={{zIndex:1000}} className='btn fromCenter' onClick={(e)=>uploadImage(saveImage)}>Cargar Imagenes</div>
        </Grid>
        </Grid>
      </Grid>
      </Box>
    </Grid>
  );
}

export default CreateProduct;

/* 
STOCk = {
  {
  nombre:athenas,
  stock:{
    red:{
      s:1,
      m:5,
      l:19
    },
    yellow:{
      s:5,
      m:0,
      l:1
    }
  }
},{
  nombre:afrodita,
  stock:{
    red:{
      s:1,
      m:5,
      l:19
    },
    yellow:{
      s:5,
      m:0,
      l:1
    }
  }
},

}


*/