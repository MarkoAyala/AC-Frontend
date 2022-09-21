import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteProducts } from '../../app/Utils/deleteProduct';
import { Product } from '../../app/Interfaces/interfaceProducts';

interface Props{
    setOpenDialog:any
    openDialog:boolean;
    element:Product|null
    productosExistentes:Array<Product> | null
    setProductosExistentes:any
}

export default function DialogDeleteStock({setOpenDialog , openDialog, element, productosExistentes, setProductosExistentes}:Props) {
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDeleteProduct = ()=>{
    if(element){
        console.log(element)
        deleteProducts({_id:element?._id ,url:element?.url}).then(()=>{
            if(productosExistentes !== null){
                setProductosExistentes((prevState:Array<Product>)=> prevState?.filter((el:Product)=>el?._id !== element._id));
            }
            handleClose();
        });
    }
  }

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Desea eliminar este Producto?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' color='error'>No</Button>
          <Button onClick={handleDeleteProduct} variant='contained' color='info'>
            Si
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}