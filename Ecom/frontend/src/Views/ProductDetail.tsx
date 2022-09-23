import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// ========= IMPORT MUI COMPONENTS ========== //
import { Grid , Box, Skeleton , Button } from '@mui/material';
// ============= IMPORT UTILITIES ======== //
import { Product } from "../app/Interfaces/interfaceProducts";
import { ProductTemplate } from "../app/Utils/postProduct";
import { getProductById } from "../app/Utils/getProductById";
function ProductDetail(){
    let [producto , setProducto] = React.useState<Array<Product>>([ProductTemplate])
    const {_id} = useParams();
    useEffect(()=>{
        if(_id){
            getProductById(_id).then((res)=>setProducto(producto=res))
        }
    },[])
    return (
        <Grid container sx={{width:'100%', display:'flex', justifyContent:'center', marginTop:'2rem'}}>
            <Grid container sx={{width:'80%',marginTop:'8rem', background:'var(--azulOscuro)', color:'white', borderRadius:'10px'}}>

                {/* Container miniaturas */}

                <Grid item xs={1} sx={{display:'flex', flexDirection:'column'}}>
                    {
                        producto && producto[0] && producto[0].name !== ''?(
                                <>
                                {
                                    producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                }
                                {
                                    producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                }
                                {
                                    producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                }
                                {
                                    producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                }
                                {
                                    producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                }
                                {
                                    producto[0].url?.img1?(<img src={producto[0].url.img1} style={{width:"60px", height:'80px', objectFit:'cover', margin:'5px auto',borderRadius:'5px'}}/>):null
                                }
                     
                                </>
                            ):null
                    }
                </Grid>

                {/* Imagen principal */}

                <Grid item xs={11}>
                    <Box sx={{width:'60%',height:'100%', display:'flex', justifyContent:'center', background:'rgba(0,0,0,0.4)'}}>
                        {
                            producto &&producto[0] && producto[0].name !== ''?(
                                <img src={producto[0].url?.img1} alt='noimg' style={{maxWidth:'100%', height:'600px', width:'382px'}} />
                            ):null
                        }
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductDetail