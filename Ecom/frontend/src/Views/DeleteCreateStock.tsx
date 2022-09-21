import React from 'react';
import css from '../Components/Home/DialogFavorites/CardsFavorites.module.css';
import DialogDeleteStock from '../Components/DeleteCreateStock/dialogDeleteProduct';
// ============= IMPORT UTILITIES ============== //
import { fetchStock } from '../app/Reducers/stockSlice';
import { stockTemplate } from '../app/Utils/stockUtilities';
import { deleteStock } from '../app/Utils/deleteStock';
import { Product } from '../app/Interfaces/interfaceProducts';
import { ProductTemplate } from '../app/Utils/postProduct';
// ============ IMPORT INTERFACE =============== //
import { CreateStock } from '../app/Interfaces/interfaceStock'
import { Stock } from '../app/Interfaces/interfaceStock';
// ============ IMPORT MUI COMPONENTS ============= //
import {Grid, FormControl , TextField , Select, InputLabel, Button, MenuItem, Typography} from '@mui/material';
import TittleEfect from '../Components/TitleEffect/TittleEfect';
import { Box } from '@mui/system';
import { postStock } from '../app/Utils/postStock';
import { useAppDispatch } from '../app/hooks';
import WarningIcon from '@mui/icons-material/Warning';

function DeleteCreateStock(){
    const dispatch = useAppDispatch();
    let [succesCreateStock, setSuccesCreateStock] = React.useState<boolean>(false);
    let [openDialog, setOpenDialog] = React.useState(false);
    let [renderStock , setRenderStock] = React.useState<Array<Stock>>([stockTemplate]);
    let [deleteS , setDeleteS] = React.useState<string>('');
    let [productosExistentes , setProductosExistentes] = React.useState<Array<Product>>([ProductTemplate])
    let [infoDelete , setInfoDelete] = React.useState<Product>(ProductTemplate);
    let [stockEliminado , setStockEliminado] = React.useState<boolean>(false);
    let [createStock, setCreateStock] = React.useState<CreateStock>({
        name:'',
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
      })
      const handleOpenDialog= (element:Product) => {
        setOpenDialog(true);
        setInfoDelete(infoDelete = element)
      };

      React.useEffect(()=>{
        dispatch(fetchStock()).then((res)=>{
            setRenderStock(renderStock=res.payload);
        })
      },[])
      const createStockHandle = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setCreateStock(createStock = {...createStock , name:event.target.value})
      }
      const handleCreateStock = ()=> {
        postStock(createStock).then(()=>{
            setCreateStock(createStock = {...createStock , name:''})
            setSuccesCreateStock(true);
            setTimeout(()=>setSuccesCreateStock(false), 3000)
        });
      }
      const handleDeleteStock = ()=> {
        deleteStock(deleteS).then((res)=>{
          if(res.eliminado === false){
            setProductosExistentes(productosExistentes=res.productos);
          }
          if(res.eliminado === true){
            setStockEliminado(true);
            setTimeout(()=>setStockEliminado(false), 3000);
          }
        })

        setDeleteS('')
      }


    return (
        <Grid container width="100%" sx={{marginTop:'7rem', color:'white', display:'flex', justifyContent:'center'}}>
          <Box sx={{width:'90%' ,display:'flex', alignItems:'center', justifyContent:'start', margin:'0px 0px 2rem 0px'}}>
                <WarningIcon color='primary' fontSize='large'/>
                <Typography sx={{ ml: 2, flex: 1, fontWeight:'800', textAlign:'start'}} variant="subtitle2" component="div" color='primary'>
                Refrescar la pagina para ver los cambios
                </Typography>
            </Box>
            <Grid item xs={10}  display='flex' alignItems='center' flexDirection={'column'}>
                <TittleEfect text='Crear stock' align={'center'} margin='0' width={'100%'} fontSize='30px'/>
                <Grid item xs={6} width='100%'  display='flex' alignItems='center' flexDirection={'column'} sx={{margin:'0 0 3rem 0'}}>
                    <TextField type='text' fullWidth label="Nombre" id='code' autoComplete='off'
                onChange={(event)=> createStockHandle(event)} value={createStock.name} focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
                    <Button variant='contained' color='primary' onClick={handleCreateStock} >Crear stock</Button>
                    {succesCreateStock?<p style={{color:'green'}}>Creado con exito</p>:null}
                </Grid>
                <Grid item xs={10} width='100%'  display='flex' alignItems='center' flexDirection={'column'}>
                <TittleEfect text='Eliminar stock' align={'center'} margin='0' width={'100%'} fontSize='30px'/>
                <Grid item xs={6} width='100%'  display='flex' alignItems='center' flexDirection={'column'}>
                    <FormControl
                     sx={{ width: "100%", margin:'0.5em 0 0 0', padding: 0 }}
                    >
                        <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                          margin: 0,
                          padding: 0,
                          "&.MuiInputLabel-root": { color: "white" },
                        }}>
                            Nombre
                        </InputLabel>
                        <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Nombre"
              value={deleteS}
              onChange={(e)=>setDeleteS(e.target.value)}
              name="Nombre"
              sx={{
                width: "100%",
                color: "white",
                margin: '0 0 0.5rem 0',
                padding: 0,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#8B4F00",
                  borderWidth: "2px",
                },
              }}
            >
                      {
              renderStock && renderStock.length>0?renderStock.map((stocked:any)=>{
                return(
                  <MenuItem key={stocked._id} value={stocked._id}>{stocked.name}</MenuItem>
                )
              }):null
            }
            </Select>
                    </FormControl>
                    <Button onClick={handleDeleteStock} variant='contained' color='primary'>Eliminar stock</Button>
                </Grid>
            </Grid>
            {stockEliminado?<p style={{color:'green'}}>Eliminado con exito</p>:null}
            <DialogDeleteStock openDialog={openDialog} setOpenDialog={setOpenDialog} element={infoDelete} productosExistentes={productosExistentes?productosExistentes:null} setProductosExistentes={setProductosExistentes}/>
            {productosExistentes && productosExistentes[0] && productosExistentes[0]._id?(<p style={{color:'red', textAlign:'center', margin:'15px 0px 8px 0px'}}>No ha sido posible eliminar el stock ya que existen los siguientes productos con este stock.</p>):null}
            </Grid>
            <Grid item xs={10}>
              {productosExistentes && productosExistentes[0] && productosExistentes[0]._id?productosExistentes.map((element:Product, index:number)=>{
                return (
                  <Grid key={index+Math.random()} item xs={12} sm={10} md={10} lg={9} className={css.container} sx={{width:'100% !important'}}>
                            <Box sx={{display:'flex', alignItems:'center', height:'auto',width:'155px', margin:'0px 0.5rem 0px 0.5rem'}}>
                                <img src={element.url.img1}  style={{height:'157px',maxHeight:'180px',maxWidth:'100%',width:'104px', objectFit:'cover', borderRadius:'7px'}}/>
                            </Box>
                            <Box sx={{display:{xs:'none',sm:'flex'}, flexDirection:'column',width:'100%', margin:'2rem 0 0 0', justifyContent:'space-between'}}>
                                <TittleEfect text={element.name} align="start" margin='0px' width={'100%'} fontSize='32px'/>
                            <Box display={'flex'}>
                                <Box sx={{flex:1}}>
                                    <TittleEfect text={`Precio:`} align="start" margin='20px 0px' width={'100%'} fontSize='23px'/>

                                </Box>
                                <Box sx={{flex:1, display:'flex', alignItems:'center', justifyContent:'end', marginRight:'1em', zIndex:2}}>
                                    <Button variant='contained' color='error' onClick={(event)=>handleOpenDialog(element)} >Borrar</Button>
                                </Box>
                            </Box>
                            </Box>
                            <Box sx={{display:{xs:'flex',sm:'none'}, flexDirection:'column',width:'100%', margin:'2rem 0 0 0', justifyContent:'space-between'}}>
                                <TittleEfect text={element.name} align="start" margin='0px' width={'100%'} fontSize='20px'/>
                            <Box display={'flex'}>
                                <Box sx={{flex:1, display:'flex', alignItems:'center', justifyContent:'end', margin:'0 1rem 1rem 0', zIndex:2}}>
                                    <Button variant='contained' color='error' onClick={(event)=>handleOpenDialog(element)}>Borrar</Button>
                                </Box>
                            </Box>
                            </Box>
                          </Grid>
                )
              }):null
              
            }
            </Grid>
        </Grid>
    )
}

export default DeleteCreateStock;