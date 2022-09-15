import * as React from 'react';
import TittleEfect from '../../TitleEffect/TittleEfect';
import css from './CardsFavorites.module.css';
// ====== IMPORT MUI COMPONENTS =========== //
import { Button, Grid } from '@mui/material';
import { Box } from '@material-ui/core';
// ======= IMPORT UTILITIES ===== //
import { useAuth0 } from '@auth0/auth0-react';
import { useAppSelector } from '../../../app/hooks'; 


interface Props {

}
export default function CardsFavorites({}:Props) {
const {user , isAuthenticated, isLoading , logout} = useAuth0();
const DBUser = useAppSelector((state)=> state.user.dataUser);
React.useEffect(()=> console.log('user', DBUser),[DBUser]);
if(isAuthenticated){
    return (
        <Grid container sx={{width:'100%', '&.MuiGrid-item':{width:'100% !important',padding:0, margin:0}, display:'flex', justifyContent:'center'}}>
      {
                  DBUser.favorites.map((element:any)=>{
                    let price = element.price.toString().split("")
                    let aux = price.splice(2,0,'.');
                    let final = price.join('');
                    return(
                          <Grid item xs={12} sm={10} md={10} lg={9} className={css.container} sx={{width:'100% !important'}}>
                            <Box sx={{display:'flex', alignItems:'center', height:'100%',width:'155px', margin:'0px 0.5rem 0px 0.5rem'}}>
                                <img src={element.url.img1}  style={{height:'auto',maxHeight:'180px',maxWidth:'100%',width:'auto', objectFit:'cover', borderRadius:'7px'}}/>
                            </Box>
                            <Box sx={{display:{xs:'none',sm:'flex'}, flexDirection:'column',width:'100%', margin:'2rem 0 0 0', justifyContent:'space-between'}}>
                                <TittleEfect text={element.name} align="start" margin='0px' width={'100%'} fontSize='32px'/>
                            <Box display={'flex'}>
                                <Box sx={{flex:1}}>
                                    <TittleEfect text={`Precio: $${final}`} align="start" margin='20px 0px' width={'100%'} fontSize='23px'/>

                                </Box>
                                <Box sx={{flex:1, display:'flex', alignItems:'center', justifyContent:'end', marginRight:'1em'}}>
                                    <Button variant='contained' color='info'>Ver producto</Button>
                                </Box>
                            </Box>
                            </Box>
                            <Box sx={{display:{xs:'flex',sm:'none'}, flexDirection:'column',width:'100%', margin:'2rem 0 0 0', justifyContent:'space-between'}}>
                                <TittleEfect text={element.name} align="start" margin='0px' width={'100%'} fontSize='25px'/>
                            <Box display={'flex'}>
                                <Box sx={{flex:1}}>
                                    <TittleEfect text={`Precio: $${final}`} align="start" margin='20px 0px' width={'100%'} fontSize='20px'/>

                                </Box>
                                <Box sx={{flex:1, display:'flex', alignItems:'center', justifyContent:'end', marginRight:'1em'}}>
                                    <Button variant='contained' color='info'>Ver</Button>
                                </Box>
                            </Box>
                            </Box>
                          </Grid>
                  )
                  })
              
      }
       </Grid>
    );
}else{
    return null
}
}