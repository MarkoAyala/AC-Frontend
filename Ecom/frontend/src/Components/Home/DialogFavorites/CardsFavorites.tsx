import * as React from 'react';
import TittleEfect from '../../TitleEffect/TittleEfect';
import css from './CardsFavorites.module.css';
// ====== IMPORT MUI COMPONENTS =========== //
import { Grid } from '@mui/material';
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
        <Grid container sx={{width:'100%', '&.MuiGrid-item':{padding:0}, display:'flex', justifyContent:'center'}}>
      {
                  DBUser.favorites.map((element:any)=>{
                    let price = element.price.toString().split("")
                    let aux = price.splice(2,0,'.');
                    let final = price.join('');
                    return(
                          <Grid item xs={8} className={css.container}>
                            <Box sx={{display:'flex', alignItems:'center', height:'100%',width:'155px', margin:'0px 0.5rem 0px 0.5rem'}}>
                                <img src={element.url.img1}  style={{height:'auto',maxHeight:'180px',maxWidth:'100%',width:'auto', objectFit:'cover', borderRadius:'7px'}}/>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column',width:'100%', margin:'2rem 0 0 0', justifyContent:'space-between'}}>
                                <TittleEfect text={element.name} align="start" margin='0px' width={'100%'} fontSize='32px'/>
                                <TittleEfect text={`Precio: $${final}`} align="start" margin='20px 0px' width={'100%'} fontSize='23px'/>
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