import React from 'react'
import css from "./Upload.module.css";
// ======== IMPORT MUI COMPONENTS ============ //
import { Box, Button, Input, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';

function FileList({saveImage, removeFile}:any) {
  return (
    <ul className={css.fileList}>
        {
            saveImage &&
            saveImage.map((f:any) =>{
                if(f.name !== '')
                return (
                    <Box key={f.name}>
                        <li className={css.listItem}>
                            <DescriptionIcon color='secondary' fontSize='large' sx={{marginRight:'0.8em'}}/>
                            <p style={{flex:"1", fontSize:'0.9em'}}>{f.name}</p>
                            <Box className={css.actions}>
                                <DeleteIcon color='secondary' fontSize='large' onClick={(e)=>removeFile(f.name)} />
                            </Box>
                        </li>
                    </Box>
                )
            })
        }

    </ul>
  )
}

export default FileList