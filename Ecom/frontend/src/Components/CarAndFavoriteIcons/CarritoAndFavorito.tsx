import * as React from 'react';
import css from './CarritoAndFavorito.module.css';
// ====== IMPORT MUI COMPONENTS ======= // 
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';
// ====================== // 

export default function CarritoAndFavorito() {
  return (
    <Box position={'fixed'} className={css.boxCarrito} >
      <Box className={css.boxIcons} >

        <IconButton aria-label="cart" className={css.buttons}>
          <Badge badgeContent={4} color="warning">
            <ShoppingCartIcon fontSize='large' sx={{color:"white"}}/>
          </Badge>
        </IconButton>
        <IconButton aria-label="cart" className={css.buttons}>
          <Badge badgeContent={4} color="warning">
            <StarRateIcon fontSize='large' sx={{color:"white"}}/>
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
}