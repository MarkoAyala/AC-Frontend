import React, { useEffect , useMemo} from "react";
import css from '../Components/CreateProduct/CreateProduct.module.css';
import Upload from "../Components/Upload/Upload";
import RefreshStock from "../Components/RefreshStock/RefreshStock";
import Dialogo from "../Components/Dialog/Dialogo";
import CreateOrRefreshDialog from "../Components/CreateOrRefreshDialog/CreateOrRefreshDialog";
// ========== Import MUI COMPONENTS ============= //
import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from "@mui/system";
import Snackbar from '@mui/material/Snackbar';
import { Button } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import TittleEfect from "../Components/TitleEffect/TittleEfect";
// ============ IMPORT UTILITIES ===============//
import { fetchStock } from "../app/Reducers/stockSlice";
import { postProduct } from "../app/Utils/postProduct";
import { editStock } from "../app/Utils/stockUtilities";
import { useAppDispatch, useAppSelector} from "../app/hooks";

function CreateProduct() {
  let [loading, setLoading] = React.useState(false);
  let [tags, setTags] = React.useState('');
  let [saveImage , setSaveImage] = React.useState([{name:''}])
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
  //refresh stock
  let [colors, setColors] = React.useState(['']);
  let [newValue , setNewValue] = React.useState('')
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
  let [errorStock , setErrorStock] = React.useState({
    required:true
  })
  //Create or Refresh
  let [oneOption , setOneOption] = React.useState('')
  const [openOptions, setOpenOptions] = React.useState(true);

  const handleClickOpen = () => {
    setOpenOptions(true);
  };
  //update stock
  let [updateStock, setUpdateStock] = React.useState<any>([{
    name:'',
    _id:'',
    stock:[
      [{
        negro:{
          code:'#000000',
          stock_negro:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        blanco:{
          code:'#000000',
          stock_blanco:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        beige:{
          code:'#000000',
          stock_beige:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        gris:{
          code:'#000000',
          stock_gris:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        azul_francia:{
          code:'#000000',
          stock_azul_francia:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        azul_marino:{
          code:'#000000',
          stock_azul_marino:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        azul:{
          code:'#000000',
          stock_azul:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        plata:{
          code:'#000000',
          stock_plata:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        tiza:{
          code:'#000000',
          stock_tiza:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        amarillo:{
          code:'#000000',
          stock_amarillo:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        dorado:{
          code:'#000000',
          stock_dorado:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        marron:{
          code:'#000000',
          stock_marron:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        marron_havana:{
          code:'#000000',
          stock_marron_havana:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        marron_suela:{
          code:'#000000',
          stock_marron_suela:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        marron_cafe:{
          code:'#000000',
          stock_marron_cafe:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        bordo:{
          code:'#000000',
          stock_bordo:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        rojo:{
          code:'#000000',
          stock_rojo:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        verde:{
          code:'#000000',
          stock_verde:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        verde_oscuro:{
          code:'#000000',
          stock_verde_oscuro:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        verde_claro:{
          code:'#000000',
          stock_verde_claro:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        verde_menta:{
          code:'#000000',
          stock_verde_menta:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        verde_oliva:{
          code:'#000000',
          stock_verde_oliva:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        cereza:{
          code:'#000000',
          stock_cereza:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        fucsia:{
          code:'#000000',
          stock_fucsia:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        morado:{
          code:'#000000',
          stock_morado:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        cobre:{
          code:'#000000',
          stock_cobre:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        camel:{
          code:'#000000',
          stock_camel:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        turquesa:{
          code:'#000000',
          stock_turquesa:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        all:0
      }]
    ]
  }])


    const removeFile = (filename:any)=>{
        setSaveImage(saveImage.filter(file=>file.name !== filename))
    }

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
  const uploadImage = async (el: any) => {
    el.forEach(async (e:any, i:number)=>{
      if(i !== 0){
        const files: any | null = e;
        const data = new FormData()
        data.append("file", files)
        data.append('api_key',"724899222591234");
        data.append("upload_preset", "CamperasAltoCuero")
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/morgan22/image/upload",
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
    if(!input.name || input.name === '' || input.name.length<3){
      error.name = 'El nombre debe tener mas de 3 caracteres';
      error.required = true;
    }
    if((!input.price || input.price<99) || (!isNaN(input.price)===false)){
      error.price = 'El minimo debe ser de 100 pesos';
      error.required = true;
    }
    if(!input.stock){
      error.stock = 'Debe seleccionar Stock';
      error.required = true;
    }
    if(!input.url.img1){
      error.url = 'Debe haber minimo 1 imagen CARGADA';
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

   const validationStock = (stock:any) => {
    let error:any = {required:false};
    if(stock[0].name === '' || stock[0]._id === ''){
      error.text = 'No selecciono stock'
      error.required = true;
    }
    stock[0].stock.map((e:any)=>{
      for(let property in e[0]){
        if(e[0][property].code?.length !== 7 && property !== 'all'){
          error.code = {...error.code , [property]: `El color ${property}, debe ser en este formato: #123456`}
          error.required = true;
        }
        if(property!=='all' && (typeof e[0][property].xs !== 'number' || typeof e[0][property].s !== 'number' || typeof e[0][property].m !== 'number' || typeof e[0][property].l !== 'number' || typeof e[0][property].xl !== 'number' || typeof e[0][property].xxl !== 'number')){
          error.talle = {...error.talle , [property]:`El talle de ${property} tiene que ser numero`}
          error.required = true;
        }
      }
    })
    return error

   }

   //Dialog //
   const [openDialog, setOpenDialog] = React.useState(false);
   const [textDialog, setTextDialog] = React.useState('');

   const handleClickOpendDialog = () => {
     setOpenDialog(true);
   };
 
   const handleClosedDialog = () => {
     setOpenDialog(false);
   };
   // =============//

   


   const handleTags = ()=>{
    setCreateProducts(createProducts={...createProducts, tags:['']})
   }


   const submitClick = () => {
     setTextDialog('loading')
     handleClickOpendDialog();
    if(oneOption === 'PRODUCT'){
      let resultado = updateStock[0].stock.map((e:any)=> {
        let filterResults;
        let aux = false;
        colors.forEach((element:any)=> {
          for(let property in element[0]){
            if(e[0][property] !== undefined){
              filterResults = element
              aux = true
            }
          }
          if(aux === false){
            filterResults = e
          }
        })
        return filterResults
      });
      setUpdateStock(updateStock=[{...updateStock[0], stock:resultado}]);
        let objError:any = validation(createProducts);
        setError(error=objError);
        let objStockError:any = validationStock(updateStock);
        setErrorStock(errorStock=objStockError);
  
        if(errorStock.required === false && error.required === false){
          postProduct(createProducts).then((res:any)=>editStock(updateStock[0]))
          .then((response:any)=>setTextDialog('success'))
          .catch((err:any)=>setTextDialog('error'))
        }else{
          setTextDialog('complete')
        }
    }
    if(oneOption === 'STOCK'){
      let resultado = updateStock[0].stock.map((e:any)=> {
        let filterResults;
        let aux = false;
        colors.forEach((element:any)=> {
          for(let property in element[0]){
            if(e[0][property] !== undefined){
              filterResults = element
              aux = true
            }
          }
          if(aux === false){
            filterResults = e
          }
        })
        console.log('filter', filterResults)
        return filterResults
      });
      setUpdateStock(updateStock=[{...updateStock[0], stock:resultado}]);
      let objStockError:any = validationStock(updateStock);
      setErrorStock(errorStock=objStockError);
      if(errorStock.required === false){
        editStock(updateStock[0])
        .then((response:any)=>setTextDialog('success'))
        .catch((err:any)=>setTextDialog('error'))
      }else{
        setTextDialog('complete');
      }
    }
  }

   useMemo(()=>{
    let objError:any = validation(createProducts)
    setError(error=objError);
  },[createProducts])
  return (
    <Grid container width="100%" sx={{ marginTop:{xs:"6rem", md:"9rem"}, display:'flex', alignItems:"center", flexDirection:"column", marginBottom:{xs:"4rem", md:"6rem"}}}>
      <CreateOrRefreshDialog openOptions={openOptions} setOpenOptions={setOpenOptions} setOneOption={setOneOption} />
      <Dialogo handleClosedDialog={handleClosedDialog} openDialog={openDialog} textDialog={textDialog} />
      <Button sx={{width:{xs:'80%', sm:'50%'},textAlign:"center", flexWrap:'nowrap' }}>
      <TittleEfect text="Nuevo Producto" align="center" margin="0px 0px 2rem 0rem" width={'100%'} fontSize={"50px"}/>
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
            label="Stocks"
            name="stock"
            onChange={(e)=>handleChangeInput(e)}
            sx={{width:"100%", color:"white",margin:0,padding:0,"& .MuiOutlinedInput-notchedOutline":{borderColor:"#8B4F00", borderWidth:"2px"}}}
          >
            {
              renderStock.length>0?renderStock.map((stocked:any)=>{
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
            <MenuItem value={"hombre"}>hombre</MenuItem>
            <MenuItem value={"mujer"}>mujer</MenuItem>
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
      <Grid item xs={11} md={3}>
      <Button sx={{zIndex:1000, margin:{xs:'0rem 0px 1.3rem 0px', md:'1rem 0px 1.3rem 0px'}}} fullWidth color='info' variant='contained' onClick={handleTags}>Limpiar Tags</Button>
      </Grid>
      <Grid item xs={12} sx={{margin:"1rem 0.5em 1rem 0.5em"}}>
      <TextField fullWidth label="Descripción" name='description' rows={4} multiline focused onChange={(e)=> handleChangeInput(e)} value={createProducts.description} autoComplete='off' sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, padding:"0px 15px 0px 15px"}}/>
      </Grid>
        <Grid item xs={12} sx={{ margin:'1em 27px 1em 27px'}}>
          <Upload saveImage={saveImage} setSaveImage={setSaveImage} removeFile={removeFile} setUpload={setUpload}/>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent={"flex-start"} flexDirection="column" sx={{margin:{xs:"1.5rem 0px 0px 0px", md:'1.5rem 0px 0px 1.2em'}, padding:{xs:'0px 20px 0px 20px', sm:''}}}>
          {
            error.required === true?(
          <Box sx={{width:{xs:"100%", md:"60%", xl:"40%"}}}>
          <Alert severity="info">
            <AlertTitle>Requerimientos:</AlertTitle>
            <Box display={"flex"} flexDirection="column">
              <span style={{margin:error.name && '10px 0px 10px 0px'}}>{error.name && `-${error.name}`}</span>
              <span style={{margin:error.price && '0px 0px 10px 0px'}}>{error.price && `-${error.price}`}</span>
              <span style={{margin:error.stock && '0px 0px 10px 0px'}}>{error.stock && `-${error.stock}`}</span>
              <span style={{margin:error.tags && '0px 0px 10px 0px'}}>{error.tags && `-${error.tags}`}</span>
              <span style={{margin:error.description && '0px 0px 10px 0px'}}>{error.description && `-${error.description}`}</span>
              <span style={{margin:error.url && '0px 0px 10px 0px'}}>{error.url && `-${error.url}`}</span>
            </Box>
          </Alert>
          </Box>
            ):null
          }
          {
            saveImage.length>1?(
            <Box sx={{ marginTop:'10px',width:{xs:"100%", md:"60%", xl:"40%"}}}>
              <Alert severity="success" color="success" sx={{color:"white"}}>Al menos 1 imagen subida</Alert>
            </Box>
            ):(
              <Box sx={{ marginTop:'10px',width:{xs:"100%", md:"60%", xl:"40%"}}}>
                <Alert severity="warning">Al menos 1 imagen subida</Alert>
              </Box>
            )
          }
          {
            upload?(
              <Box sx={{ marginTop:'10px',width:{xs:"100%", md:"60%", xl:"40%"}}}>
              <Alert severity="success">Imagenes cargadas</Alert>
            </Box>
            ):(
              <Box sx={{  marginTop:'10px',width:{xs:"100%", md:"60%", xl:"40%"}}}>
              <Alert severity="error">No se han cargado imagenes</Alert>
              </Box>
            )
          }

        </Grid>
         <Grid item xs={12} sx={{display:"flex",justifyContent:"end"}}>
                    {
                      loading?(
                        <Box display="flex" margin={"30px 30px 0px 0px"} >
                          <h5 style={{lineHeight:"30px", margin:"0px 10px 0px 0px"}}>Subiendo imagenes</h5>
                          <CircularProgress size={30} color="primary"/>
                        </Box>
                      ):null
                    }
          </Grid>
          <Snackbar open={successUpload} autoHideDuration={6000} onClose={handleClose} sx={{margin:'0px 0px 2em 0px'}}>
            <Alert onClose={handleClose} color="success" severity="success" sx={{ width: '100%' }}>
              Imagenes subidas con exito!
            </Alert>
          </Snackbar>
        <Grid item xs={11} md={11} sx={{display:{xs:'none',md:'flex'}, justifyContent:'start', margin:'2rem 0px 0px 0px'}}>
          <Button style={{zIndex:1000, margin:'2px 0px 2px 0px'}} color='info' variant='contained' onClick={(e)=>uploadImage(saveImage)}>Cargar Imagenes</Button>
        </Grid>

        <Grid item xs={11} md={11} sx={{display:{xs:'flex', md:'none'}, justifyContent:'start', margin:'2rem 0px 0px 0px'}}>
          <Button style={{zIndex:1000, margin:'2px 0px 2px 0px'}} fullWidth color='info' variant='contained' onClick={(e)=>uploadImage(saveImage)}>Cargar Imagenes</Button>
        </Grid>

        <Grid item xs={12} id='refreshStock'>
          <TittleEfect text="Actualizar Stock" align="center" margin="2.4rem 0px 2rem 0rem" width={'100%'} fontSize={"50px"}/>
        </Grid>
        <Grid item xs={12}>
          <RefreshStock renderStock={renderStock} updateStock={updateStock} setUpdateStock={setUpdateStock} errorStock={errorStock} colors={colors} setColors={setColors}newValue={newValue} setNewValue={setNewValue} />
        </Grid>

        <Grid item xs={11} sx={{display:{xs:'none',md:'flex'}, justifyContent:'end'}}>
           <Button style={{zIndex:1000, marginTop:'1.5rem'}} color='info' variant='contained' onClick={(e)=>submitClick()}>{oneOption === 'STOCK'?'ACTUALIZAR STOCK':'SUBIR PRODUCTO'}</Button>
        </Grid>
        <Grid item xs={11} sx={{display:{xs:'flex', md:'none'}, justifyContent:'end'}}>
           <Button style={{zIndex:1000, marginTop:'1.5rem'}} fullWidth color='info' variant='contained' onClick={(e)=>submitClick()}>{oneOption === 'STOCK'?'ACTUALIZAR STOCK':'SUBIR PRODUCTO'}</Button>
        </Grid>
      </Grid>

      </Box>
    </Grid>
  );
}

export default CreateProduct;

