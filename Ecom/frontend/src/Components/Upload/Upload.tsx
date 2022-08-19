import React from 'react';
// ======== IMPORT MUI COMPONENTS ============ // 
import {Box} from '@mui/material';
// ========== IMPORT COMPONENTS ============= //
import TittleEfect from '../TitleEffect/TittleEfect'; 
import FileUpload from './FileUpload';
import FileList from './FileList';

function Upload({saveImage, setSaveImage , removeFile, setUpload, one}:any) {
  return (
    <Box
    sx={{width:{xs:'100%', md:'60%', lg:'50%', xl:'37%'}}}
    >
        {
          one === undefined? (

            <TittleEfect text="Subir imagen:" align="start" margin="0px 0px 1rem 0rem" width={'100%'} fontSize={'30px'}/>
          ):null
        }
        <FileUpload saveImage={saveImage} setSaveImage={setSaveImage} setUpload={setUpload} one={one}/>
        <FileList saveImage={saveImage} setSaveImage={setSaveImage} removeFile={removeFile}/>
    </Box>
  )
}

export default Upload