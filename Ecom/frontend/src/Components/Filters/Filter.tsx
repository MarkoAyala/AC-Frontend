import * as React from 'react';
import css from './Filter.module.css'
// ====== IMPORT MUI COMPONENTS =========== //
import { Grid } from '@mui/material';
// ================================= // 

interface Props {
  filter:any
  setFilter:any
}
export default function Filter({filter , setFilter}:Props) {
  const handleSelectChange = (event:any)=>{
      setFilter(filter={...filter,[event.target.name]:event.target.value});
    }
  
  return (
    <Grid container sx={{width:'100%', '&.MuiGrid-item':{padding:0}, display:'flex', justifyContent:'center', margin:'1.5em 0 0 0'}}>
      <Grid item xs={5} sm={5} md={5} xl={3} lg={2} sx={{margin:'0 10px 0 0'}}>
        <div className={css.boxSelect}>
          <select name={'color'} onChange={handleSelectChange}>
            <option value='colores_largos' selected style={{display:'none'}}>Color</option>
            <option value={'red'}>Rojo</option>
            <option value={'board'}>Bordo</option>
            <option value={'blue'}>Azul</option>
            <option value={'black'}>Negro</option>
            <option value={'white'}>Blanco</option>
            <option value={'beige'}>Beige</option>
            <option value={'gray'}>Gris</option>
            <option value={'french_blue'}>Azul francia</option>
            <option value={'navy_blue'}>Azul marino</option>
            <option value={'silver'}>Plata</option>
            <option value={'chalk'}>Tiza</option>
            <option value={'yellow'}>Amarillo</option>
            <option value={'copper'}>Cobre</option>
            <option value={'golden'}>Dorado</option>
            <option value={'brown'}>Marrón</option>
            <option value={'havana_brown'}>Marrón habana</option>
            <option value={'brown_sole'}>Marrón suela</option>
            <option value={'coffe_brown'}>Marrón cafe</option>
            <option value={'green'}>Verde</option>
            <option value={'dark_green'}>Verde oscuro</option>
            <option value={'light_green'}>Verde claro</option>
            <option value={'mint_green'}>Verde menta</option>
            <option value={'olive_green'}>Verde oliva</option>
            <option value={'cherry'}>Cereza</option>
            <option value={'fuchsia'}>Fucsia</option>
            <option value={'camel'}>Camel</option>
            <option value={'turquoise'}>Turquesa</option>
          </select>
        </div>
      </Grid>
      <Grid item xs={5} sm={5} md={5} xl={3} lg={2} sx={{margin:'0 0 0 10px'}}>
        <div className={css.boxSelect}>
          <select name={'size'}  onChange={handleSelectChange}>
            <option value='colores_largos' selected style={{display:'none'}}>Size</option>
            <option value={'xs'}>XS</option>
            <option value={'s'}>S</option>
            <option value={'m'}>M</option>
            <option value={'l'}>L</option>
            <option value={'xl'}>XL</option>
            <option value={'xxl'}>XXL</option>
          </select>
        </div>
      </Grid>
    </Grid>
  );
}