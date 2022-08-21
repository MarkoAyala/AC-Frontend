import React, { useEffect, useMemo } from 'react'
// =============== IMPORT MUI COMPONENTS ================ // 
import css from './ProductsCards.module.css'
import { Grid , Box } from '@mui/material'

interface Productos {
  description:string
  name:string
  stock:{
    id:string
    name:string
    stock:any
    __v:number
    _id:string
  }
  price:number
  url:{
    img1:string
    img2?:string
    img3?:string
    img4?:string
    img5?:string
    img6?:string
  }
  _id:string
}
interface Props {
  fetchProductos:Array<Productos>
}

function ProductsCards({fetchProductos}:Props) {
  let [images , setImages] = React.useState<any>([{default:''}]);

  const handleChangeImage = (img : string | undefined , i : number) => {
    setImages(images=images.map((el:any, index:number)=>{
      if(index === i){
        return {...el, default:img}
      } else{
        return {...el}
      }
    }))
  }
  useMemo(()=>{
    if(fetchProductos.length>1){
      setImages(images=fetchProductos.map((e)=>{
        return {...e.url, default:e.url.img1}
      }))
    }
  },[fetchProductos])
  return (
    <Grid container width={'100%'} sx={{backgroundColor:'var(--azulOscuro)', margin:'0px 5px 1em 5px', padding:'5px 0px 5px 0px'}}>
        {fetchProductos[0]?.name?(
          fetchProductos.map((e , i)=>{
            let price = e.price.toString().split("")
            let aux = price.splice(2,0,'.');
            let final = price.join('')

            if(images[i]?.default !== ''){
            return (
            <Grid key={i} item xs={6} sx={{border:'1px solid #2b2b2b', padding:'8px 0px 8px 0px'}}>
                  <Box display={'flex'} justifyContent={'center'}>
                    <img src={images[i]?.default} alt="" className={css.image} style={{height:'auto',maxHeight:'250px',maxWidth:'100%',width:'auto', objectFit:'cover', borderRadius:'7px'}} />
                  </Box>
              <Box sx={{padding:'16px 12px', display:'flex', flexDirection:'column'}} className={css.tittle}>
                <Box display={'flex'} justifyContent={'start'}>
                  {
                    e.url.img1 && 
                    (<img src={e.url.img1} alt='noImage' className={e.url.img1 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img1 , i)} style={{height:'auto', maxHeight:'55px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img1 === images[i]?.default?'3px solid green':''}} />)
                  }
                  {
                    e.url.img2 && 
                    (<img src={e.url.img2} alt='noImage' className={e.url.img2 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img2 , i)} style={{height:'auto', maxHeight:'55px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img2 === images[i]?.default?'3px solid green':''}} />)
                  }
                  {
                    e.url.img3 && 
                    (<img src={e.url.img3} alt='noImage' className={e.url.img3 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img3 , i)} style={{height:'auto', maxHeight:'55px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img3 === images[i]?.default?'3px solid green':''}} />)
                  }
                  {
                    e.url.img4 && 
                    (<img src={e.url.img4} alt='noImage' className={e.url.img4 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img4 , i)} style={{height:'auto', maxHeight:'55px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img4 === images[i]?.default?'3px solid green':''}} />)
                  }
                  
                </Box>
                {
                  i<2?(
                    <div style={{marginBottom:'12px'}}>
                      <span className={css.bestSeller}>MÁS VENDIDO</span>
                    </div>
                  ):null
                }
                <h2 style={{fontSize:'15px'}}>{e.name} o mejor dicho de mujer</h2>
                <span style={{fontWeight:'100', margin:'15px 0px 0px 0px', fontSize:'20px'}}>$ {final}</span>
                <span style={{fontWeight:'100', margin:'4px 0px', fontSize:'20px'}}>100 USD</span>
              </Box>
            </Grid>)
            }
          })
        ):null }
    </Grid>
  )
}

export default ProductsCards