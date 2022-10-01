import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useAppSelector } from '../../../app/hooks';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
interface Props{
    openCompra:boolean
    setOpenCompra:Function
}
export default function FormUser({openCompra , setOpenCompra}:Props) {
  const DBUser = useAppSelector((state)=> state.user.dataUser);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleCloseCompra = () => {
    setOpenCompra(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={openCompra}
        onClose={handleCloseCompra}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Ingresa tus datos antes de comprar!"}
        </DialogTitle>
        <DialogContent className="scroll" sx={{width:{xs:'auto', md:'650px'}, "&.MuiDialogContent-root":{margin:0}}}>
      <Grid container spacing={3} sx={{"&.MuiGrid-item":{ margin:0}}}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Nombre"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
    <Typography variant="h6" sx={{margin:'1rem 0.5rem 0rem 1.5rem', fontSize:'18px', width:'100%'}}>
        Codigo de area y numero celular
      </Typography>
        <Grid item xs={4} sx={{"&.MuiGrid-item":{padding:'15px 0px 0px 24px'}}}>
          <TextField
            required
            id="codigo_area"
            name="codigo_area"
            label="Cod"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={8} sx={{"&.MuiGrid-item":{padding:'15px 0px 0px 24px'}}}>
          <TextField
            required
            id="numero_celular"
            name="numero_celular"
            label="Numero celular"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="dni"
            name="dni"
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
            id="provincia"
            name="provincia"
            label="Provincia"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="calle"
            name="calle"
            label="Dirección"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="numero"
            name="numero"
            label="Numero"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="codigo_postal"
            name="codigo_postal"
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
            id="country"
            name="country"
            label={'Mail'}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseCompra}>
            Disagree
          </Button>
          <Button onClick={handleCloseCompra} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}