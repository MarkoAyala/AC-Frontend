import * as React from 'react';
// ========= IMPORT MUI COMPONENTS ============ // 
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CircularProgress from '@mui/material/CircularProgress';
import InfoIcon from '@mui/icons-material/Info';
import {Typography} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialogo({handleClosedDialog , openDialog , textDialog}:any) {
  return (
    <div>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClosedDialog}
        aria-describedby="alert-dialog-slide-description"
        sx={{padding:0,margin:0,}}
      >
        {
          textDialog==='loading'?(
        <DialogContent sx={{padding:'2.5em 2.5em', border:'3px solid black'}}>
          <DialogContentText id="alert-dialog-slide-description" sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Box>
              <CircularProgress color="primary" size={50}/>
            </Box>
            <Typography variant='subtitle2' style={{padding:'4px 0px 0px 2em', fontWeight:'bold', fontSize:'23px'}}>Subiendo cambios</Typography>
          </DialogContentText>
        </DialogContent>
          ):textDialog==='success'?(
            <>
            <DialogContent dividers sx={{padding:'2.1em 3.5em .5em 3.5em'}}>
            <DialogContentText id="alert-dialog-slide-description" sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
              <Typography variant='subtitle2' style={{padding:'0px 1em 6px 0em', fontWeight:'bold', fontSize:'28px'}}>Hecho!</Typography>
              <Box>
                <CheckCircleIcon color="primary" fontSize={'large'}/>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosedDialog}>Volver</Button>
          </DialogActions>
            </>
          ):textDialog === 'error'?(
            <>
            <DialogContent dividers sx={{padding:'2.1em 1.5em .5em 1.5em'}}>
            <DialogContentText id="alert-dialog-slide-description" sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
              <Box>
                <ErrorIcon color="error" fontSize={'large'}/>
              </Box>
              <Typography variant='subtitle2' style={{padding:'0px 0em 6px 1em', fontWeight:'bold', fontSize:'22px',textAlign:'center'}}>Ocurrio un error</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosedDialog}>Volver</Button>
          </DialogActions>
            </>
          ):textDialog === 'complete'?(
            <>
            <DialogContent dividers sx={{padding:'2.1em 1.5em .5em 1.5em'}}>
            <DialogContentText id="alert-dialog-slide-description" sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
              <Box>
                <InfoIcon color="info" fontSize={'large'}/>
              </Box>
              <Typography variant='subtitle2' style={{padding:'0px 0em 6px 1em', fontWeight:'bold', fontSize:'18px',textAlign:'center'}}>Rellene los campos correctamente</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosedDialog}>Volver</Button>
          </DialogActions>
            </>
          ):null
        }
      </Dialog>
    </div>
  );
}