import React from "react";
import css from '../Components/CreateProduct/CreateProduct.module.css';
// ========== Import MUI COMPONENTS ============= //
import Grid from "@mui/material/Grid";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import {Button} from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from "@mui/system";
import { alpha, styled } from '@mui/material/styles';

function CreateProduct() {
  let [info, setInfo] = React.useState({url:{}});
  let [render, setRender] = React.useState([1]);
  let [loading, setLoading] = React.useState(false);
  let [tags, setTags] = React.useState('');
  let [renderTags,setRenderTags] = React.useState([''])

  // select tags 
  const handleChange = (event:any | never) => {
    setTags(event.target.value as string);
    if(!renderTags.includes(event.target.value)){
      setRenderTags(renderTags=[...renderTags,event.target.value])
    }
  };
  // ====== // 

  const newImagen = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    if(render.length<=6){
        setRender(render=[...render,render.length+1])
    }
  }
// Conexion clodinary // 
  const uploadImage = async (e: any) => {
    const files: any | null = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "CamperasAltoCuero");
    setLoading(true);
    const res = await fetch(
      "http://api.cloudinary.com/v1_1/morgan22/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log("archivo subido", res);
    setInfo(
      (info = {
        ...info,
        url:{...info.url,[e.target.name]: file.secure_url}
      })
    );
    console.log("imagen", info);
    setLoading(false);
  };
  // =========================// 
  
  // Colores textfield//
  const CssInput = styled(InputLabel)({
    '&.MuiInputLabel-root':{
      color:"white"
    }
  });
  const CssSelect = styled(Select)({
    '&.MuiSelect-select':{
      color:"white"
    },
    '& .MuiOutlinedInput-notchedOutline':{
      borderColor:"#8B4F00"
    },
  })
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#8B4F00',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#8B4F00',
      },
      '&:hover fieldset': {
        borderColor: '#f9ac05',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8B4F00',
      },
    },
    '& .MuiInputLabel-root': {
      color:"white"
    },
    '& .MuiInputBase-input':{
      color:"white"
    }
  });
  return (
    <Grid container width="100%" sx={{ marginTop: "10rem", border: "1px solid white", display:'flex', justifyContent:"center"}}>
      <Box width={{xs:"60%",lg:"70%"}} justifyContent="center">

      <Grid container width={{xs:"100%"}} className={css.containerForm}>
      <Grid item xs={5} sx={{margin:"15px 5px 15px 5px"}}>
        <CssTextField fullWidth label="Nombre" focused/>
      </Grid>
      <Grid item xs={5} sx={{margin:"15px 5px 15px 5px"}}>
        <CssTextField fullWidth label="Precio" focused/>
      </Grid>
      <Grid item xs={1} sx={{margin:"15px 5px 15px 5px"}}>
        <CssTextField label="Stock" focused />
      </Grid>
      <Grid item xs={5} sx={{margin:"15px 5px 15px 5px"}}>
        <FormControl sx={{width:"100%", margin:0,padding:0,}}>
      <CssInput id="demo-simple-select-label" sx={{margin:0,padding:0,}}>Tags</CssInput>
        <CssSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tags}
            label="Tags"
            onChange={handleChange}
            sx={{width:"100%", color:"white",margin:0,padding:0,}}
          >
            <MenuItem value={'hola'}>Ten</MenuItem>
            <MenuItem value={'dos'}>Twenty</MenuItem>
            <MenuItem value={'treh'}>Thirty</MenuItem>
          </CssSelect>
        </FormControl>
      </Grid>
      <Grid item xs={5} sx={{margin:"15px 5px 15px 5px"}} display="flex" justifyContent="center" alignItems={"center"}>
      {renderTags.map((e)=>{
        if(e.length>=2){
        return(
          <span style={{margin:"0px 0px 0px 5px"}}>{"#"+e}</span>
        )}
      })}
      </Grid>
      <Grid item xs={1} sx={{margin:"15px 5px 15px 5px"}}>
      </Grid>
        {render? render.map((e)=>{
            return(
                <>
              <FormGroup
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Label for="exampleFile">
                  File
                </Label>
                <Input
                  id="exampleFile"
                  name={`img${e}`}
                  type="file"
                  placeholder="Imagen 1"
                  onChange={(e) => uploadImage(e)}
                />
                <FormText>
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
                </>
            )
            
        }):null }
        <Button onClick={(e)=>newImagen(e)}>Subir otra imagen</Button>
      </Grid>
      </Box>
    </Grid>
  );
}

export default CreateProduct;

/* 
STOCk = {
  {
  nombre:athenas,
  stock:{
    red:{
      s:1,
      m:5,
      l:19
    },
    yellow:{
      s:5,
      m:0,
      l:1
    }
  }
},{
  nombre:afrodita,
  stock:{
    red:{
      s:1,
      m:5,
      l:19
    },
    yellow:{
      s:5,
      m:0,
      l:1
    }
  }
},

}


*/