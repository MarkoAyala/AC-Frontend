import React from 'react';
import css from './Upload.module.css';
// ======== IMPORT MUI COMPONENTS ============ // 
import {Box, Typography} from '@mui/material';
// ========== IMPORT COMPONENTS ============= //
import TittleEfect from '../TitleEffect/TittleEfect'; 
import FileUpload from './FileUpload';
import FileList from './FileList';

function Upload({saveImage, setSaveImage , removeFile, setUpload}:any) {
  return (
    <Box
    sx={{width:{xs:'100%', md:'60%', lg:'50%', xl:'37%'}}}
    >
        <TittleEfect text="Subir imagen:" align="start" margin="0px 0px 1rem 0rem" width={'100%'} fontSize={'30px'}/>
        <FileUpload saveImage={saveImage} setSaveImage={setSaveImage} setUpload={setUpload}/>
        <FileList saveImage={saveImage} removeFile={removeFile}/>
    </Box>
  )
}

export default Upload