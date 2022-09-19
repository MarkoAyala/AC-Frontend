// ============ IMPORT MUI COMPONENTS ============= //
import {Grid, FormControl , TextField , Select, InputLabel} from '@mui/material';
import TittleEfect from '../Components/TitleEffect/TittleEfect';

function DeleteCreateStock(){
    return (
        <Grid container width="100%" sx={{marginTop:'7rem', color:'white', display:'flex', justifyContent:'center'}}>
            <Grid item xs={10}>
                <TittleEfect text='Crear stock' align={'center'} margin='0' width={'100%'} fontSize='30px'/>
                <Grid item xs={6}>
                    <TextField type='text' fullWidth label="xs" id='code'   autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DeleteCreateStock;