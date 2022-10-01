import * as React from 'react';
// ========= IMPORT COMPONENTS ================= //
import CardsFavorites from './CardsFavorites';
// ============== IMPORT MUI COMPONENTS =================== // 
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import DialogContent from '@mui/material/DialogContent';
import { TransitionProps } from '@mui/material/transitions';
import WarningIcon from '@mui/icons-material/Warning';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme:any) => ({
    dialogPaper: {
      backgroundColor:'rgba(0,0,0,0.1) !important',
      backdropFilter:'blur(10px)',
      padding:0,
      margin:0,
    }
  });
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
interface Props {
    openDialogFavorite:boolean
    setOpenDialogFavorite:Function
    classes:any
}
function DialogFavorites({openDialogFavorite , setOpenDialogFavorite , classes}:Props) {
  const handleClose = () => {
    setOpenDialogFavorite(false);
  };

  return (
    <div>
      
      <Dialog
        key='favoritos'
        fullScreen
        open={openDialogFavorite}
        onClose={handleClose}
        scroll={'body'}
        PaperProps={{ classes: {root: classes.dialogPaper } }}
        TransitionComponent={Transition}
      >
       
        <DialogActions sx={{display:'flex', justifyContent:'space-between', flexDirection:'column', position:'fixed', top:'0px', width:'100%', paddingBottom:'20px', zIndex:10}}>
          <Box
          width='100%'
          display={'flex'}
          justifyContent={'end'}
          margin='0.5rem 5rem 1rem 0'
          >
            <Button
              color="primary"
              variant='contained'
              onClick={handleClose}
              sx={{fontWeight:'700', fontSize:'20px'}}
            >
              Cerrar
            </Button>
          </Box>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'end'}}>
                <WarningIcon color='warning'/>
                <Typography sx={{ ml: 2, flex: 1, fontWeight:'700'}} variant="subtitle2" component="div" color='#ffffff'>
                Refrescar la pagina para ver los cambios
                </Typography>
            </Box>
        </DialogActions>
            <Box sx={{width:'100%', height:'100vh', color:'white',backgroundColor:'none', display:'flex', justifyContent:'center', padding:0 , marginTop:'100px'}}>
                <Box sx={{width:{xs:'100%', md:'70%'}}}>
                  <CardsFavorites/>
                </Box>
            </Box>
        
      </Dialog>
    </div>
  );
}

DialogFavorites.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(DialogFavorites);