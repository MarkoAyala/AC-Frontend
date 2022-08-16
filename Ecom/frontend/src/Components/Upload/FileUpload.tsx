import React from "react";
import css from "./Upload.module.css";
// ======== IMPORT MUI COMPONENTS ============ //
import { Box, Button, Input, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function FileUpload({saveImage,setSaveImage, setUpload}:any) {
  const UploadHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    let file;
    if(event.target.files){
        file = event.target.files[0];
    }
    if(saveImage.length<7){
        setSaveImage(saveImage=[...saveImage, file])
        setUpload(false)
    }
  }
  return (
    <Box>
      <Box className={css.fileCard}>
        <Box className={css.fileInputs}>
          <input type="file" className={css.input} onChange={(e)=>UploadHandler(e)}/>
          <Button
          sx={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
            zIndex:1,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'#fff',
            backgroundColor:'var(--azulOscuro) !important',
            fontSize:'1.1rem !important',
            cursor:'pointer',
            borderRadius:'4px !important',
            border:'none !important',
            outline:'none !important',
            boxShadow:'0px 8px 24px rgba(0,0,0,0.5) !important'
          }}
          variant="outlined" startIcon={<AddCircleIcon/>}>
            Agregar
          </Button>
        </Box>
        <Typography component='p'>Soporta archivos:</Typography>
        <Typography component='p'>PNG , JPG</Typography>

      </Box>
    </Box>
  );
}

export default FileUpload;
