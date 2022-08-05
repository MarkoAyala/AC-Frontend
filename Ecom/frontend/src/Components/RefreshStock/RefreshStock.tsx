import React, { useEffect, useMemo } from "react";
import TittleEfect from "../TitleEffect/TittleEfect";
// ========= IMPORT MUI COMPONENTS ============== //
import { Box } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

function RefreshStock({ renderStock, updateStock, setUpdateStock }: any) {
  let [colors, setColors] = React.useState(['']);


  const handleChangeStock = (
    el:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    setUpdateStock(renderStock.filter((e:any)=>el.target.value === e._id))
  };

  useEffect(() => console.log("stock",updateStock), [updateStock]);
  useMemo(()=>{
    if(updateStock.name !== ''){
      for(const property in updateStock[0].stock){
          if(property !=='all'){
            setColors(colors=[...colors, property])
          }
      }
    }
    setColors(colors.filter(e=>e!== ''))
  },[updateStock])

  const handleChangeColor = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

  }
  return (
    <Grid
      container
      width="100%"
      sx={{
        border: "1px solid white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      key={'ahreloco'}
    >
      <Box width={{ xs: "93%", sm: "80%", lg: "70%" }} justifyContent="center">
        <Grid item xs={12}>
          <FormControl sx={{ width: "100%", margin: 0, padding: 0 }}>
            <InputLabel
              sx={{
                margin: 0,
                padding: 0,
                "&.MuiInputLabel-root": { color: "white" },
              }}
            >
              Stock
            </InputLabel>
            <Select
              labelId="demo-simple-select-labelss"
              id="demo-simple-selectss"
              label="refresh-stock"
              name="stock"
              value={updateStock[0]?.name}
              onChange={handleChangeStock}
              sx={{
                width: "100%",
                color: "white",
                margin: 0,
                padding: 0,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#8B4F00",
                  borderWidth: "2px",
                },
              }}
            >
              {renderStock.length > 1
                ? renderStock.map((stocked: any) => {
                    return (
                      <MenuItem value={stocked._id}>{stocked.name}</MenuItem>
                    );
                  })
                : null}
            </Select>
          </FormControl>
          {updateStock[0]? updateStock[0].stock.map((element:any)=>{
            for(let el in element[0]){
              console.log("element",element[0])
              if(el==='all'){
                return(
              <Grid container width='100%'>
                <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <TittleEfect text={`${el}:`} align='start' fontSize="25px" width={'100%'}/>
                </Grid>
                <Grid item xs={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>{element[0][el]}</Grid>
              </Grid>
                )
              }
              return(
            <Grid container width='100%'>
              <TittleEfect text={`${el}:`} align='start' fontSize="23px" width={'100%'}/>
              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <TittleEfect text={`xs:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="red" onChange={(e)=> handleChangeColor(e)} name='red' value={element[0][el]?.xs}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <TittleEfect text={`s:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="red" onChange={(e)=> handleChangeColor(e)} name='red' value={element[0][el]?.s}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <TittleEfect text={`m:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="red" onChange={(e)=> handleChangeColor(e)} name='red' value={element[0][el]?.m}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <TittleEfect text={`l:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="red" onChange={(e)=> handleChangeColor(e)} name='red' value={element[0][el]?.l}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <TittleEfect text={`xl:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="red" onChange={(e)=> handleChangeColor(e)} name='red' value={element[0][el]?.xl}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <TittleEfect text={`xxl:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="red" onChange={(e)=> handleChangeColor(e)} name='red' value={element[0][el]?.xxl}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}}}/>
              </Grid>

            </Grid>
              )
            }

          }) 
           : null}
        </Grid>
      </Box>
    </Grid>
  );
}

export default RefreshStock;

/* 
{
  name:'',
  _id:'',
  stock:{
    red:{
      code:'000',
      stock_red:0,
      xs:0,
      s:0,
      m:0,
      l:0,
      xl:0,
      xxl:0
    },
    yellow:{
      code:'000',
      stock_yellow:0,
      xs:0,
      s:0,
      m:0,
      l:0,
      xl:0,
      xxl:0
    },
    all:0
  }

  stock:{
    talles:{

    }
  }


} */