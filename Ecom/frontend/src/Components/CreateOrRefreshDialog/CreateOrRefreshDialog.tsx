import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-scroll';


export default function CreateOrRefreshDialog({setOpenOptions , openOptions, setOneOption}:any) {
  const handleClose = (text:string) => {
      if(text === 'STOCK'){
          setOneOption('STOCK');
        }
        if(text === 'PRODUCT'){
            setOneOption('PRODUCT');
        }
        setOpenOptions(false);
  };
  return (
    <div>

      <Dialog
        open={openOptions}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{fontSize:'23px'}}>
          {"Que acción desea realizar?"}
        </DialogTitle>
        <DialogActions sx={{justifyContent:'space-around'}}>
            <Link spy={true} to='refreshStock' smooth={true} > 
          <Button onClick={(e)=>handleClose('STOCK')} variant='contained' color='info' >Actualizar stock</Button>
            </Link>
          <Button onClick={(e)=>handleClose('PRODUCT')} variant='contained' color='info' sx={{margin:'0 0 0 20px'}}>
            Crear un nuevo producto
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}