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
    if(event.target.value ==='Todos'){
      setFilter(filter={...filter,[event.target.name]:undefined});
    }else{
      setFilter(filter={...filter,[event.target.name]:event.target.value});
    }
    }
  
  return (
    <Grid container sx={{width:'100%', '&.MuiGrid-item':{padding:0}, display:'flex', justifyContent:'center', margin:'1.5em 0 0 0'}}>
      <Grid item xs={5} sm={5} md={5} xl={3} lg={2} sx={{margin:'0 10px 0 0'}}>
        <div className={css.boxSelect}>
          <select name={'color'} onChange={handleSelectChange} value={filter.color === undefined?'Todos':filter.color}>
            <option value={undefined}>Todos</option>
            <option value={'rojo'}>Rojo</option>
            <option value={'bordo'}>Bordo</option>
            <option value={'azul'}>Azul</option>
            <option value={'negro'}>Negro</option>
            <option value={'blanco'}>Blanco</option>
            <option value={'beige'}>Beige</option>
            <option value={'gris'}>Gris</option>
            <option value={'azul_francia'}>Azul francia</option>
            <option value={'azul_marino'}>Azul marino</option>
            <option value={'plata'}>Plata</option>
            <option value={'tiza'}>Tiza</option>
            <option value={'amarillo'}>Amarillo</option>
            <option value={'cobre'}>Cobre</option>
            <option value={'dorado'}>Dorado</option>
            <option value={'marron'}>Marrón</option>
            <option value={'marron-havana'}>Marrón havana</option>
            <option value={'marron-suela'}>Marrón suela</option>
            <option value={'marron-cafe'}>Marrón cafe</option>
            <option value={'verde'}>Verde</option>
            <option value={'verde-oscuro'}>Verde oscuro</option>
            <option value={'verde-claro'}>Verde claro</option>
            <option value={'verde-menta'}>Verde menta</option>
            <option value={'verde-oliva'}>Verde oliva</option>
            <option value={'cereza'}>Cereza</option>
            <option value={'fucsia'}>Fucsia</option>
            <option value={'camel'}>Camel</option>
            <option value={'turquesa'}>Turquesa</option>
          </select>
        </div>
      </Grid>
      <Grid item xs={5} sm={5} md={5} xl={3} lg={2} sx={{margin:'0 0 0 10px'}}>
        <div className={css.boxSelect}>
          <select name={'size'}  onChange={handleSelectChange} value={filter.size === undefined?'Todos':filter.size}>
            <option value={undefined}>Todos</option>
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