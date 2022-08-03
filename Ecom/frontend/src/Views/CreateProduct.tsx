import React, { useEffect , useMemo} from "react";
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
import { Button } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import AlertTitle from '@mui/material/AlertTitle';
import TittleEfect from "../Components/TitleEffect/TittleEfect";
import Divider from '@mui/material/Divider';
// ============ IMPORT UTILITIES ===============//
import { fetchStock } from "../app/Reducers/stockSlice";
import { useAppDispatch, useAppSelector} from "../app/hooks";

function CreateProduct() {
  let [render, setRender] = React.useState([1]);
  let [loading, setLoading] = React.useState(false);
  let [tags, setTags] = React.useState('');
  let [saveImage , setSaveImage] = React.useState([{name:""}]);
  let [successUpload , setSuccessUpload] = React.useState(false);
  let [upload , setUpload] = React.useState(false);
  let [createProducts , setCreateProducts] = React.useState({
    name:'',
    price:0,
    stock:'',
    url:{},
    description:'',
    tags:[''],
  })
  const stock = useAppSelector((state)=> state.stock.stock);
  const dispatch:any = useAppDispatch();
  let [renderStock,setRenderStock] = React.useState(['']);
  //Validación un submit
  let [error, setError] = React.useState({
    required:true,
    name:'',
    price:'',
    url:'',
    description:'',
    tags:'',
    stock:''
  })


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

  useEffect(()=>{
    async function inf(){
      let res = await dispatch(fetchStock())
      setRenderStock(renderStock=res.payload)
    }
    inf();
  },[])
  // select tags 
  const handleChange = (event:any | never) => {
    setTags(event.target.value as string);
    if(!createProducts.tags.includes(event.target.value) &&  createProducts.tags.length<5){
      setCreateProducts(createProducts={...createProducts, tags:[...createProducts.tags, event.target.value]})
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
        setCreateProducts(
          (createProducts = {
            ...createProducts,
            url:{...createProducts.url,[`img${i}`]: file.secure_url}
          })
        )
      }else{
        setLoading(true);
      }
    })
  };
  // =========================// 
  
   const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<unknown>)=> {
    setCreateProducts(createProducts={...createProducts, [e.target.name]:e.target.value})
   }

   const validation = (input:any)=>{
    interface Error{
      required:boolean;
      name?:string;
      price?:string;
      stock?:string;
      url?:string;
      description?:string;
      tags?:string;
    }
    let error:Error = {required:false};
    let large = input.description?.split(" ").length
    console.log("large", large);
    if(!input.name || input.name === '' || input.name.length<3){
      error.name = 'El nombre debe tener mas de 3 caracteres';
      error.required = true;
    }
    if((!input.price || input.price<99) || (!isNaN(input.price)===false)){
      error.price = 'El minimo debe ser de 100 pesos sin letras';
      error.required = true;
    }
    if(!input.stock){
      error.stock = 'Debe seleccionar Stock';
      error.required = true;
    }
    if(!input.url.img1){
      error.url = 'Debe haber minimo 1 imagen';
      error.required = true;
    }
    if(large>200 || large<10){
      error.description = `Debe tener mas de 10 palabras y menos de 200, actualmente tiene: ${large-1} palabras`;
      error.required = true;
    }
    if(!input.tags[1]){
      error.tags = 'Debe tener al menos 1 tag';
      error.required = true;
    }
    return error;
   } 

   const submitClick = () => {
      let objError:any = validation(createProducts)
      setError(error=objError);
   }
   useMemo(()=>{
    let objError:any = validation(createProducts)
    setError(error=objError);
  },[createProducts])
  return (
    <Grid container width="100%" sx={{ marginTop:{xs:"7rem", md:"9rem"}, display:'flex', alignItems:"center", flexDirection:"column"}}>
      <Button sx={{width:{xs:'80%', sm:'50%'},textAlign:"center", flexWrap:'nowrap' }}>
      <TittleEfect text="Nuevo Producto" align="center" margin="0px 0px 2rem 0rem" width={'100%'}/>
      </Button>
      <Box width={{xs:"93%",sm:"80%",lg:"70%"}} justifyContent="center">

      <Grid container width={{xs:"100%"}} className={css.containerForm}>
      <Grid item xs={11} sm={5} lg={5} sx={{margin:"15px 5px 15px 5px"}}>
        <TextField fullWidth label="Nombre" onChange={(e)=> handleChangeInput(e)} name='name' value={createProducts.name} autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}}}/>
      </Grid>
      <Grid item xs={11} sm={5} lg={5} sx={{margin:"15px 5px 15px 5px"}}>
      <FormControl sx={{width:"100%", margin:0,padding:0,}}>
      <InputLabel id="demo-simple-select-label" sx={{margin:0,padding:0,"&.MuiInputLabel-root":{color:"white"}}}>Stock</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={createProducts.stock}
            label="Tags"
            name="stock"
            onChange={(e)=>handleChangeInput(e)}
            sx={{width:"100%", color:"white",margin:0,padding:0,"& .MuiOutlinedInput-notchedOutline":{borderColor:"#8B4F00", borderWidth:"2px"}}}
          >
            {
              renderStock.length>1?renderStock.map((stocked:any)=>{
                return(
                  <MenuItem value={stocked._id}>{stocked.name}</MenuItem>
                )
              }):null
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={5} sm={5} md={5} lg={1} sx={{margin:"15px 5px 15px 5px"}}>
        <TextField fullWidth label="Precio" name='price' autoComplete='off' value={createProducts.price} onChange={(e)=> handleChangeInput(e)} focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}}}/>
      </Grid>
      <Grid item xs={5} sx={{margin:"15px 5px 15px 5px"}}>
        <FormControl sx={{width:"100%", margin:0,padding:0,}}>
      <InputLabel id="demo-simple-select-labels" sx={{margin:0,padding:0, "&.MuiInputLabel-root":{color:"white"}}}>Tags</InputLabel>
        <Select
            labelId="demo-simple-select-labels"
            id="demo-simple-selects"
            value={tags}
            color="primary"
            label="Tags"
            onChange={(e)=>handleChange(e)}
            sx={{width:"100%", color:"white",margin:0,padding:0,"& .MuiOutlinedInput-notchedOutline":{borderColor:"#8B4F00", borderWidth:"2px"}}}
          >
            <MenuItem value={"man"}>Man</MenuItem>
            <MenuItem value={"woman"}>Woman</MenuItem>
            <MenuItem value={"leather"}>Leather</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={11} sm={11} md={11} lg={5} sx={{margin:"15px 5px 15px 5px", border:"2px solid #8B4F00", borderRadius:"6px", minHeight:"56px"}} display="flex" justifyContent="center" alignItems={"center"}>
      {createProducts.tags.length>1?createProducts.tags.map((e)=>{
        if(e !==''){
          return(
            <span style={{margin:"0px 0px 0px 5px"}}>{"#"+e}</span>
          )
        }
      }):null}
      </Grid>
      <Grid item xs={1} sx={{margin:"15px 5px 15px 5px"}}>
      </Grid>

      <Grid item xs={12} sx={{margin:"1rem 0.5em 1rem 0.5em"}}>
      <TextField fullWidth label="Descripción" name='description' rows={4} multiline focused onChange={(e)=> handleChangeInput(e)} value={createProducts.description} autoComplete='off' sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, padding:"0px 15px 0px 15px"}}/>
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
          <Box sx={{width:{xs:"87%", md:"60%", lg:"40%", margin:"0px 0px 10px 30px", }}}>
          <Alert severity="info">
            <AlertTitle>Requerimientos:</AlertTitle>
            <Box display={"flex"} flexDirection="column">
              <span style={{margin:error.name && '10px 0px 10px 0px'}}>{error.name && `-${error.name}`}</span>
              <span style={{margin:error.price && '0px 0px 10px 0px'}}>{error.price && `-${error.price}`}</span>
              <span style={{margin:error.stock && '0px 0px 10px 0px'}}>{error.stock && `-${error.stock}`}</span>
              <span style={{margin:error.tags && '0px 0px 10px 0px'}}>{error.tags && `-${error.tags}`}</span>
              <span style={{margin:error.description && '0px 0px 10px 0px'}}>{error.description && `-${error.description}`}</span>
            </Box>
          </Alert>
          </Box>
          {
            saveImage.length>1?(
            <Box sx={{margin:"0px 0px 10px 30px", width:{xs:"87%", md:"60%", lg:"40%"}}}>
              <Alert severity="success" color="success" sx={{color:"white"}}>Al menos 1 imagen subida</Alert>
            </Box>
            ):(
              <Box sx={{margin:"0px 0px 10px 30px", width:{xs:"87%", md:"60%", lg:"40%"}}}>
                <Alert severity="warning">Al menos 1 imagen subida</Alert>
              </Box>
            )
          }
          {
            upload?(
              <Box sx={{margin:"0px 0px 10px 30px", width:{xs:"87%", md:"60%", lg:"40%"}}}>
              <Alert severity="success">Imagenes cargadas</Alert>
            </Box>
            ):(
              <Box sx={{margin:"0px 0px 10px 30px", width:{xs:"87%", md:"60%", lg:"40%"}}}>
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
          <div style={{zIndex:1000, margin:'2px 0px 2px 0px'}} className='btn fromCenter' onClick={(e)=>deleteImagen()}>Eliminar imagen</div>
        </Grid>
        <Grid item xs={11} md={3}>
          <div style={{zIndex:1000, margin:'2px 0px 2px 0px'}} className='btn fromCenter' onClick={(e)=>newImagen()}>Agregar imagen</div>
        </Grid>
        <Grid item xs={11} md={3}>
          <div style={{zIndex:1000, margin:'2px 0px 2px 0px'}} className='btn fromCenter' onClick={(e)=>uploadImage(saveImage)}>Cargar Imagenes</div>
        </Grid>
        <Grid item xs={12} sx={{margin:"2rem 0rem .5rem 0rem"}}>
        <hr style={{borderColor:'#8B4F00'}}/>
        </Grid>
        </Grid>
        <Grid item xs={5}>
           <div style={{zIndex:1000, marginTop:'1.5rem'}} className='btn fromCenter' onClick={(e)=>submitClick()}>SUBIR PRODUCTO</div>
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