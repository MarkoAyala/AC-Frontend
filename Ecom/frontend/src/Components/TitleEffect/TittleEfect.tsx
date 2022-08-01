import { fontSize } from '@mui/system';
import React from 'react'
import css from './TittleEfect.module.css';

interface Props {
    width?:any
    height?:string
    text:string
    align?:any
    fontSize?:string
    margin?:string
}

function TittleEfect({width, height , text, align, fontSize, margin}:Props) {
  return (
    <h4 style={{textAlign:align?align:"start", width:width?width:'100%' , height:height?height:'auto', color:"white", fontSize:fontSize?fontSize:'', margin:margin?margin:'auto'}} className={css.font}>{text}</h4>
  )
}

export default TittleEfect