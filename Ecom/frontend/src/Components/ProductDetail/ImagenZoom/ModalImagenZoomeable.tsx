import * as React from 'react';
import css from './ModalImagen.module.css';
// ========= IMPORT COMPONENTS ================= //
// ============== IMPORT MUI COMPONENTS =================== // 
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
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
      backgroundColor:'rgba(0,0,0,0.3) !important',
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
    openDialogZoom:boolean
    setOpenDialogZoom:Function
    classes:any
    currentZoom:any
}
function ModalImagenZoomeable({openDialogZoom , setOpenDialogZoom , classes, currentZoom}:Props) {
  const handleClose = () => {
    setOpenDialogZoom(false);
  };

  return (
    <div>
      
      <Dialog
        fullScreen
        key='imageZoom'
        open={openDialogZoom}
        onClose={handleClose}
        scroll={'body'}
        PaperProps={{ classes: {root: classes.dialogPaper } }}
        TransitionComponent={Transition}
      >
       
        <DialogActions sx={{display:'flex', justifyContent:'space-between', flexDirection:'column', position:'fixed', top:'0px', width:'100%', paddingBottom:'10', zIndex:10}}>
          <Box
          width='100%'
          display={'flex'}
          justifyContent={'end'}
          margin='0.5rem 5rem 0rem 0'
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
        </DialogActions>
            <Box sx={{width:{xs:'100%',xl:'30%'},color:'white',backgroundColor:'none', display:'flex', justifyContent:'center', padding:0 , margin:'80px auto 0px auto'}}>
                <TransformWrapper>
                  <TransformComponent>
                      <img src={currentZoom} className={css.imagen} style={{width:'auto', maxWidth:'100%', objectFit:'cover', borderRadius:'10px'}} alt='noimg'/>
                  </TransformComponent>
                </TransformWrapper>
            </Box>
        
      </Dialog>
    </div>
  );
}

ModalImagenZoomeable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(ModalImagenZoomeable);