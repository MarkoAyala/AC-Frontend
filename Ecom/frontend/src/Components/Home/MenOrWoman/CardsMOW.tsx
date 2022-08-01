import React from 'react'
import Tilt from "react-parallax-tilt";
import css from './CardsMOW.module.css';
interface Props {
  imagen:string
}

function CardsMOW({imagen}:Props) {
  return (
    <Tilt className={css.cardsMOW}>
    <div>
      <img src={imagen} alt="noencontroimagen" style={{width:'100%', height:"auto", objectFit:"cover"}}/>
    </div>
    </Tilt>
  )
}

export default CardsMOW