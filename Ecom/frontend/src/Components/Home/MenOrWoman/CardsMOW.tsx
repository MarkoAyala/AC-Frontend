import React from 'react'
import Tilt from "react-parallax-tilt";
interface Props {
  imagen:string
}

function CardsMOW({imagen}:Props) {
  return (
    <Tilt style={{width:'70%', margin:'0px 13px 0px 13px', cursor:'pointer'}}>
    <div>
      <img src={imagen} alt="noencontroimagen" style={{width:'100%', height:"auto", objectFit:"cover"}}/>
    </div>
    </Tilt>
  )
}

export default CardsMOW