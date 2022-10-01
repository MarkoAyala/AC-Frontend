import React from 'react'
import Tilt from "react-parallax-tilt";
import css from './CardsMOW.module.css';
interface Props {
  imagen:string
  setFilter:any
  name:string
}

function CardsMOW({imagen, setFilter , name}:Props) {
  const handleClick = ()=>{
    if(name==='man'){
      setFilter((prevState:any)=>{
        return {...prevState, tags:'hombre'}
      })
    }
    if(name ==='woman'){
      setFilter((prevState:any)=>{
        return {...prevState, tags:'mujer'}
      })
    }
  }
  return (
    <Tilt className={css.cardsMOW}>
    <div onClick={handleClick}>
      <img src={imagen} alt="noencontroimagen" className='noSelect' style={{width:'100%', height:"auto", objectFit:"cover"}}/>
    </div>
    </Tilt>
  )
}

export default CardsMOW