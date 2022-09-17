import { fontSize } from '@mui/system';
import React from 'react'
import css from './TittleEfect.module.css';
import Typography from '@mui/material/Typography';

interface Props {
    width?:any
    height?:string
    text:string
    align?:any
    fontSize?:string
    margin?:string
    lineHeight?:string
}

function TittleEfect({width, height , text, align, fontSize, margin, lineHeight}:Props) {
  return (
    <Typography component={'h4'} variant={'h4'} sx={{textAlign:align?align:"start", width:width?width:'100%' , height:height?height:'auto', color:"white", fontSize:fontSize?fontSize:'', margin:margin?margin:'auto', lineHeight:lineHeight?lineHeight:'auto'}} className={css.font}>{text}</Typography>
  )
}

export default TittleEfect