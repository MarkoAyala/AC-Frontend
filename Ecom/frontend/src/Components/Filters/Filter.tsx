import * as React from 'react';
import css from './Filter.module.css'
// ====== IMPORT MUI COMPONENTS =========== //
import { Grid } from '@mui/material';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';
// ================================= // 

interface Props {
  filter:any
  setFilter:any
}
export default function Filter({filter , setFilter}:Props) {
  const handleSelectChange = (event:any)=>{
    if(filter[event.target.name][0] === ''){
      setFilter(filter={...filter,[event.target.name]:[event.target.value]})
    }else{
      setFilter(filter={...filter,[event.target.name]:[...filter[event.target.name],event.target.value]})
    }
    console.log('filter',filter)
  }
  return (
    <Grid container sx={{width:'100%', '&.MuiGrid-item':{padding:0}, display:'flex', justifyContent:'center', margin:'1.5em 0 0 0'}}>
      <Grid item xs={5} sm={5} md={5} xl={3} lg={2} sx={{margin:'0 10px 0 0'}}>
        <div className={css.boxSelect}>
          <select name={'color'} onChange={handleSelectChange}>
            <option value='colores_largos' selected style={{display:'none'}}>Color</option>
            <option value={'red'}>Red</option>
            <option value={'blue'}>Blue</option>
            <option value={'black'}>Black</option>
            <option value={'white'}>White</option>
          </select>
        </div>
      </Grid>
      <Grid item xs={5} sm={5} md={5} xl={3} lg={2} sx={{margin:'0 0 0 10px'}}>
        <div className={css.boxSelect}>
          <select name={'tags'}  onChange={handleSelectChange}>
            <option value='colores_largos' selected style={{display:'none'}}>Size</option>
            <option value={'xs'}>XS</option>
            <option value={'s'}>S</option>
            <option value={'m'}>M</option>
            <option value={'l'}>L</option>
          </select>
        </div>
      </Grid>
    </Grid>
  );
}