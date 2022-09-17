import React, { useEffect, useMemo } from 'react'
// =============== IMPORT MUI COMPONENTS ================ // 
import IconButton from '@mui/material/IconButton';
import TittleEfect from '../../TitleEffect/TittleEfect';
import { useAuth0 } from '@auth0/auth0-react';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import css from './ProductsCards.module.css';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid , Box, Skeleton , Button } from '@mui/material';

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
  tags:Array<String>
  _id:string
}
interface Props {
  fetchProductos:Array<Productos>
  loading:boolean
  handleFavorite:Function
  starProducts:any
  setStarProducts:Function
  images:any
  setImages:any
  filter:any
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border:'none',
  color:'#fff',
  '&:not(:last-child)': {
    border:'none',
  },
  '&:before': {
    display: 'none',
    border:'none'
  },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:'#151f28',
  flexDirection: 'row',
  border:'none',
  padding:'0px',
  minHeight:'50px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    overflow:'hidden'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft:theme.spacing(0),
  backgroundColor:'#151f28',
  border:'none',
  display:'flex',
  flexWrap:'wrap',
}));



function ProductsCards({fetchProductos, loading, handleFavorite , starProducts , setStarProducts , images, setImages, filter}:Props) {
  const DBUser = useAppSelector((state)=> state.user.dataUser);
  const dispatch = useAppDispatch()
  const {user , isAuthenticated, isLoading , logout} = useAuth0();
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
    if(filter.color === undefined && filter.size === undefined && filter.tags === undefined){
      if(DBUser.email && fetchProductos[0]?._id && DBUser.nickname !== 'undefined'){
        fetchProductos.forEach((e, i)=> {
          DBUser.favorites.forEach((el:any, index:number)=>{
            if(el._id === e._id){
              setStarProducts(starProducts=starProducts.map((a:any,a2:number)=>{
                if(a.id === el._id){
                  return {favorite:true , id:a.id,producto:e}
                }else{
                  return a
                }
                
              }))
            }
          })
        })
      }

    }
  },[DBUser , fetchProductos])
  return (
    <Grid container width={'100%'} sx={{backgroundColor:'var(--azulOscuro)', margin:'0px 5px 1em 5px', padding:'5px 0px 5px 0px',display:{md:'flex'}, justifyContent:{md:'center'}}}>
        {
        loading?(
          <>
          <Grid key={'242'} item xs={6} sx={{border:'1px solid #2b2b2b', padding:'8px 7px 8px 7px', display:{xs:'block', md:'none'}}}>
            <Skeleton variant="rectangular" width={'100%'} height={'570px'} sx={{bgcolor:'#222'}} animation="wave"/>
          </Grid>
          <Grid key={'2425'} item xs={6} sx={{border:'1px solid #2b2b2b', padding:'8px 7px 8px 7px', display:{xs:'block', md:'none'}}}>
          <Skeleton variant="rectangular" width={'100%'} height={'570px'} sx={{bgcolor:'#222'}} animation="wave"/>
        </Grid>
        <Box key={'24222'} sx={{border:'1px solid #2b2b2b', padding:'8px 7px 8px 7px', display:{xs:'none', md:'flex'}}}>
            <Skeleton variant="rectangular" width={'284px'} height={'570px'} sx={{bgcolor:'#222'}} animation="wave"/>
          </Box>
          <Box key={'242522'} sx={{border:'1px solid #2b2b2b', padding:'8px 7px 8px 7px', display:{xs:'none', md:'flex'}}}>
          <Skeleton variant="rectangular" width={'284px'} height={'570px'} sx={{bgcolor:'#222'}} animation="wave"/>
        </Box>
        <Box key={'242222'} sx={{border:'1px solid #2b2b2b', padding:'8px 7px 8px 7px', display:{xs:'none', md:'flex'}}}>
            <Skeleton variant="rectangular" width={'284px'} height={'570px'} sx={{bgcolor:'#222'}} animation="wave"/>
          </Box>
          <Box key={'2425222'} sx={{border:'1px solid #2b2b2b', padding:'8px 7px 8px 7px', display:{xs:'none', md:'flex'}}}>
          <Skeleton variant="rectangular" width={'284px'} height={'570px'} sx={{bgcolor:'#222'}} animation="wave"/>
        </Box>
        {
          window.visualViewport?(window.visualViewport.width<1212 && window.visualViewport.width !== null)?(
            <>
          <Box key={'242222'} sx={{border:'1px solid #2b2b2b', padding:'8px 7px 8px 7px', display:{xs:'none', md:'flex'}}}>
            <Skeleton variant="rectangular" width={'284px'} height={'570px'} sx={{bgcolor:'#222'}} animation="wave"/>
          </Box>
          <Box key={'2425222'} sx={{border:'1px solid #2b2b2b', padding:'8px 7px 8px 7px', display:{xs:'none', md:'flex'}}}>
          <Skeleton variant="rectangular" width={'284px'} height={'570px'} sx={{bgcolor:'#222'}} animation="wave"/>
        </Box>
            </>
          ):null:null
        }
          </>
        ):fetchProductos[0]?.name?(
          fetchProductos.map((e , i)=>{
            let price = e.price.toString().split("")
            let aux = price.splice(2,0,'.');
            let final = price.join('');
            if(images[i]?.default !== ''){
            return (
              <>
            <Grid key={i+Math.random()} item xs={6} sx={{border:'1px solid #2b2b2b', padding:'8px 0px 8px 0px', display:{xs:'block', md:'none'}}}>
                  <Box display={'flex'} position='relative' justifyContent={'center'} sx={{maxWidth:'176px'}}>
                    <img src={images[i]?.default} alt="" className={css.image} style={{height:'auto',maxHeight:'250px',maxWidth:'100%',width:'auto', objectFit:'cover', borderRadius:'7px'}} />
                    {
                      isAuthenticated === true?(
                      starProducts[i]?.favorite === false?(
                      <IconButton aria-label="delete" size="large" className={css.mobile} color='warning' onClick={(es)=>handleFavorite('fav', i, e._id)}>
                        <StarBorderIcon fontSize="large" />
                      </IconButton>
                      ): (<IconButton aria-label="delete" size="large" color='warning' className={css.mobile} onClick={(es)=>handleFavorite('unfav', i, e._id)}>
                      <StarRateIcon fontSize="large" />
                    </IconButton>)
                      ):null
                    }
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
                <h2 style={{fontSize:'15px'}}>{e.name}</h2>
                <span style={{fontWeight:'100', margin:'15px 0px 0px 0px', fontSize:'20px'}}>$ {final}</span>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color='primary' fontSize='large' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Colores:</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'5px 0px 10px 0px'}}>
                  {
                    e.stock?.stock.map((el:any,index:number)=>{
                      for(let property in el[0]){
                        if((el[0][property].xs>0 || el[0][property].s>0 || el[0][property].m>0 || el[0][property].l>0 || el[0][property].xl>0 || el[0][property].xxl>0) && property !== 'all' ){
                          let color = el[0][property].code
                          return (
                            <div key={index+1222} style={{width:'14px', height:'14px', borderRadius:'4px', background:color, margin:'2px 2px 2px 2px'}}></div>
                          )
                        }
                      }
                    })
                  }
                  </AccordionDetails>
              </Accordion>
              </Box>
            </Grid>

            <Box key={i+ Math.random()} className={css.motion} sx={{border:'1px solid #2b2b2b', padding:'8px 0px 8px 0px', display:{xs:'none', md:'block'}, margin:'1em 1.2em',height:'auto', minHeight:'500px', width:'284px'}}>
                  <Box display={'flex'} position={'relative'} justifyContent={'center'} width={'100%'}>
                    <img src={images[i]?.default} alt="" className={css.image} style={{height:'auto',maxHeight:'390px',maxWidth:'100%',width:'auto', objectFit:'cover', borderRadius:'7px'}} />
                    {
                      isAuthenticated === true?(
                      starProducts[i]?.favorite === false?(
                      <IconButton aria-label="delete" size="large" className={css.pc} color='warning' onClick={(es)=>handleFavorite('fav', i, e._id)}>
                        <StarBorderIcon fontSize="large" />
                      </IconButton>
                      ): (<IconButton aria-label="delete" size="large" color='warning' className={css.pc} onClick={(es)=>handleFavorite('unfav', i, e._id)}>
                      <StarRateIcon fontSize="large" />
                    </IconButton>)
                      ):null
                    }
                  </Box>
                  <Box sx={{padding:'16px 12px', display:'flex', flexDirection:'column'}} className={css.tittle}>
                  <Box display={'flex'} justifyContent={e.url.img5?'center':'start'} sx={{margin:i>=2?'0em 0px 0.9em 0px':''}}>
                  {
                    e.url.img1 && 
                    (<img src={e.url.img1} alt='noImage' className={e.url.img1 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img1 , i)} style={{height:'auto', maxHeight:'70px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img1 === images[i]?.default?'3px solid green':''}} />)
                  }
                  {
                    e.url.img2 && 
                    (<img src={e.url.img2} alt='noImage' className={e.url.img2 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img2 , i)} style={{height:'auto', maxHeight:'70px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img2 === images[i]?.default?'3px solid green':''}} />)
                  }
                  {
                    e.url.img3 && 
                    (<img src={e.url.img3} alt='noImage' className={e.url.img3 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img3 , i)} style={{height:'auto', maxHeight:'70px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img3 === images[i]?.default?'3px solid green':''}} />)
                  }
                  {
                    e.url.img4 && 
                    (<img src={e.url.img4} alt='noImage' className={e.url.img4 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img4 , i)} style={{height:'auto', maxHeight:'70px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img4 === images[i]?.default?'3px solid green':''}} />)
                  }
                  {
                    e.url.img5 && 
                    (<img src={e.url.img5} alt='noImage' className={e.url.img5 === images[i]?.default?css.image:''} onClick={(el)=>handleChangeImage(e.url.img5 , i)} style={{height:'auto', maxHeight:'70px', maxWidth:'100%', width:'auto', objectFit:'cover', margin:'0px 2px 10px 2px', borderBottom:e.url.img5 === images[i]?.default?'3px solid green':''}} />)
                  }
                </Box>
                  {
                  i<2?(
                    <div style={{margin:'1em 0px'}}>
                      <span className={css.bestSeller}>MÁS VENDIDO</span>
                    </div>
                  ):null
                }
                <h2 style={{fontSize:'15px'}}>{e.name.toUpperCase()}</h2>
                <span style={{fontWeight:'100', margin:'15px 0px 0px 0px', fontSize:'20px'}}>$ {final}</span>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color='primary' fontSize='large' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Colores disponibles:</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  {
                    e.stock?.stock.map((el:any, index:number)=>{
                      for(let property in el[0]){
                        if((el[0][property].xs>0 || el[0][property].s>0 || el[0][property].m>0 || el[0][property].l>0 || el[0][property].xl>0 || el[0][property].xxl>0) && property !== 'all' ){
                          let color = el[0][property].code
                          return (
                            <div key={index+1333} style={{width:'14px', height:'14px', borderRadius:'4px', background:color, margin:'3px 3px 3px 3px'}}></div>
                          )
                        }
                      }
                    })
                  }
                  </AccordionDetails>
              </Accordion>
                  </Box>
            </Box>

              </>
          )}
          })
        ):(
          <Grid item xs={12} lg={8} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <TittleEfect text={`No contamos con stock ${filter.color?"para el color "+ filter.color.toUpperCase():""}${filter.size?" talle "+filter.size.toUpperCase():""}`} align='center' margin='1rem 0 1rem 0' width={'100%'} fontSize='25px'/>
            <Box
            width='100%'
            display='flex'
            justifyContent={'center'}
            >
              <TittleEfect text="Pedidos por WhatsApp" align={'center'} margin="0" width={'auto'} fontSize='22px' lineHeight='70px'/>
           
              <a href="https://api.whatsapp.com/send?phone=541170995410" target='_blank'>
                        <IconButton aria-label="delete" color='primary' size='large' sx={{minWidth:'30px', minHeight:'70px'}}>
                            <WhatsAppIcon fontSize="large" sx={{transition:'0.2s'}}/>
                        </IconButton>
              </a>
            </Box>
            <TittleEfect text="Tu consulta no molesta! 😄" align={'center'} margin="0" width={'auto'} fontSize='22px' lineHeight='70px'/>
          </Grid>
        ) }
    </Grid>
  )
}

export default ProductsCards