import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Payment } from '../../../app/Utils/paymentUtils';
import DialogContent from '@mui/material/DialogContent';
import { useNavigate } from "react-router-dom";
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Compra, ErrorCompra } from '../../../app/Interfaces/interfaceRandoms';
import { useAppSelector } from '../../../app/hooks';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
interface Props{
    openCompra:boolean
    setOpenCompra:Function
    compra:Compra
    handleChangeCompra:Function
    errorCompra:ErrorCompra
    setErrorCompra:Function
    buyValidation:Function
}
export default function FormUser({openCompra , setOpenCompra , compra , handleChangeCompra, errorCompra, setErrorCompra, buyValidation}:Props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const DBUser = useAppSelector((state)=> state.user.dataUser);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseCompra = () => {
    setOpenCompra(false);
  };
  const compraRealizada = ()=>{
    if(compra.nombre_comprador === '' || compra.email_comprador === '' || compra.celular === '' || compra.codigo_de_area === '' || compra.dni === '' || compra.calle === '' || compra.provincia === '' || compra.numeracion === '' || compra.codigo_postal === ''){
      setErrorCompra(errorCompra = {...errorCompra , required:true});
      console.log('entre a error');
    }
    if(errorCompra.required === false){
      console.log('entre a compra');
      handleOpen();
      Payment(compra).then((res:any)=>{
        window.location.href = res.init_point;
      })
    }
  }

  return (
    <div>
      <Dialog
        key='compra'
        fullScreen={fullScreen}
        open={openCompra}
        onClose={handleCloseCompra}
      >
        <DialogTitle id="responsive-dialog-title-compra">
          {"Ingresa tus datos antes de comprar!"}
        </DialogTitle>
        <DialogContent className="scroll" sx={{width:{xs:'auto', md:'650px'}, "&.MuiDialogContent-root":{margin:0}}}>
      <Grid container spacing={3} sx={{"&.MuiGrid-item":{ margin:0}}}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="nombre_comprador"
            error={errorCompra.nombre_comprador !== ''?true:false}
            onChange={(e)=>handleChangeCompra(e)}
            label="Nombre"
            fullWidth
            autoComplete="off"
            variant="standard"
            helperText={errorCompra.nombre_comprador !==''?errorCompra.nombre_comprador:''}
          />
        </Grid>
    <Typography variant="h6" sx={{margin:'1rem 0.5rem 0rem 1.5rem', fontSize:'18px', width:'100%'}}>
        Codigo de area y numero celular
      </Typography>
        <Grid item xs={4} sx={{"&.MuiGrid-item":{padding:'15px 0px 0px 24px'}}}>
          <TextField
            required
            error={errorCompra.codigo_de_area !==''?true:false}
            helperText={errorCompra.codigo_de_area !==''?errorCompra.codigo_de_area:''}
            id="codigo_area"
            name="codigo_de_area"
            onChange={(e)=>handleChangeCompra(e)}
            label="Cod"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={8} sx={{"&.MuiGrid-item":{padding:'15px 0px 0px 24px'}}}>
          <TextField
            required
            error={errorCompra.celular !==''?true:false}
            helperText={errorCompra.celular !==''?errorCompra.celular:''}
            id="numero_celular"
            name="celular"
            onChange={(e)=>handleChangeCompra(e)}
            label="Numero celular"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={errorCompra.dni !==''?true:false}
            helperText={errorCompra.dni !==''?errorCompra.dni:''}
            id="dni"
            name="dni"
            onChange={(e)=>handleChangeCompra(e)}
            label="DNI"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Typography variant="h6" sx={{margin:'1rem 0.5rem 0rem 1.5rem', fontSize:'18px'}}>
        Detalles de envio:
        </Typography>
        <Grid item xs={12} sx={{"&.MuiGrid-item":{padding:'15px 0px 0px 24px'}}}>
          <TextField
            required
            error={errorCompra.provincia !==''?true:false}
            helperText={errorCompra.provincia !==''?errorCompra.provincia:''}
            id="provincia"
            name="provincia"
            label="Provincia"
            onChange={(e)=>handleChangeCompra(e)}
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="calle"
            error={errorCompra.calle !==''?true:false}
            helperText={errorCompra.calle !==''?errorCompra.calle:''}
            name="calle"
            onChange={(e)=>handleChangeCompra(e)}
            label="Dirección"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            error={errorCompra.numeracion !==''?true:false}
            helperText={errorCompra.numeracion !==''?errorCompra.numeracion:''}
            id="numero"
            name="numeracion"
            onChange={(e)=>handleChangeCompra(e)}
            label="Numero"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            error={errorCompra.codigo_postal !==''?true:false}
            helperText={errorCompra.codigo_postal !==''?errorCompra.codigo_postal:''}
            id="codigo_postal"
            name="codigo_postal"
            onChange={(e)=>handleChangeCompra(e)}
            label="Cod. Postal"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Typography variant="h6" sx={{margin:'1.5rem 0.5rem 0rem 1.5rem', fontSize:'18px'}}>
            A este mail recibiras detalles de nuestro contacto
        </Typography>
        <Grid item xs={12} sx={{"&.MuiGrid-item":{padding:'15px 0px 0px 24px'}}}>
          <TextField
            required
            id="email"
            error={errorCompra.email_comprador !==''?true:false}
            helperText={errorCompra.email_comprador !==''?errorCompra.email_comprador:''}
            name="email_comprador"
            value={compra.email_comprador}
            onChange={(e)=>handleChangeCompra(e)}
            label={'Mail'}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
          <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCompra} variant='contained' color='error'>
            Cancelar
          </Button>
          <Button onClick={compraRealizada} variant='contained' color='success'>
            Comprar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}