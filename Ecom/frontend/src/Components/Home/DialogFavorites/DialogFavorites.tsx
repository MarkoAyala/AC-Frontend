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
      backgroundColor:'rgba(0,0,0,0.7) !important',
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
        fullScreen
        open={openDialogFavorite}
        onClose={handleClose}
        scroll={'body'}
        PaperProps={{ classes: {root: classes.dialogPaper } }}
        TransitionComponent={Transition}
      >
       
        <DialogActions sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
            <Button
              color="primary"
              onClick={handleClose}
              sx={{fontWeight:'800', fontSize:'20px'}}
            >
              Cerrar
            </Button>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'end'}}>
                <WarningIcon color='primary'/>
                <Typography sx={{ ml: 2, flex: 1, fontWeight:'800'}} variant="subtitle2" component="div" color='primary'>
                Refrescar la pagina para ver los cambios
                </Typography>
            </Box>
        </DialogActions>
            <Box sx={{width:'100%', height:'100vh', color:'white',backgroundColor:'none', display:'flex', justifyContent:'center', padding:0}}>
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