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
import FormHelperText from '@mui/material/FormHelperText';

function RefreshStock({ renderStock, updateStock, setUpdateStock }: any) {
  let [colors, setColors] = React.useState(['']);


  const handleChangeStock = (
    el:any
  ) => {
    setUpdateStock(updateStock = renderStock.filter((e:any)=>el.target.value === e._id))
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
    setUpdateStock((prevState:any)=>{

      if(e.target.id === 'code'){
        return [{...prevState[0], stock:
          prevState[0].stock.map((el:any)=>{
            for(let property in el[0]){
              if(property === e.target.name){
                return [{[property]:{...el[0][property], [e.target.id]:e.target.value}}]
              }else{
                return el
              }
            }
          })
        }]
      }else{
        return [{...prevState[0], stock:
          prevState[0].stock.map((el:any)=>{
            for(let property in el[0]){
              if(property === e.target.name){
                return [{[property]:{...el[0][property], [e.target.id]:parseInt(`${e.target.value}`)}}]
              }else{
                return el
              }
            }
          })
        }]
      }
      
    })
  }
  useEffect(()=>{
    console.log("STUCKEADO",updateStock)
  },[updateStock])
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
          <FormControl sx={{ width: "100%", margin: 0, padding: 0 }} error={updateStock[0]._id===''?true:false}>
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
              name=""
              value={updateStock[0]._id}
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
            {
              updateStock[0]._id===''?(
                <FormHelperText sx={{fontSize:'20px'}}>Elegir un modelo</FormHelperText>
              ):null
            }
          </FormControl>
          {updateStock? updateStock[0].stock.map((element:any)=>{
            for(let el in element[0]){
              if(el==='all'){
                return(
              <Grid container width='100%'>
                <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'.5em 0px .5em 0px'}}>
                <TittleEfect text={`${el}:`} align='start' fontSize="25px" width={'100%'}/>
                </Grid>
                <Grid item xs={6} sx={{display:'flex',justifyContent:'center',alignItems:'center', border:'2px solid var(--marron)', borderRadius:'5px', margin:'5px 0px 5px 0px', height:'56px'}}>{element[0][el]}</Grid>
              </Grid>
                )
              }
              return(
            <Grid container width='100%'>
          
              <TittleEfect text={`${el}:`} align='start' fontSize="23px" width={'100%'} margin={"1em 0px 1em 0px"}/>
              
              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'5px 0px 5px 0px'}}>
                <TittleEfect text={`Color:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='text' fullWidth label="xs" onChange={(e)=> handleChangeColor(e)} name={`${el}`} id='code' value={element[0][el].code}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'5px 0px 5px 0px'}}>
                <TittleEfect text={`xs:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="xs" onChange={(e)=> handleChangeColor(e)} name={`${el}`} id='xs' value={element[0][el].xs}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'5px 0px 5px 0px'}}>
                <TittleEfect text={`s:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="s" onChange={(e)=> handleChangeColor(e)} name={`${el}`} id='s' value={element[0][el]?.s}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'5px 0px 5px 0px'}}>
                <TittleEfect text={`m:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="m" onChange={(e)=> handleChangeColor(e)} name={`${el}`} id='m' value={element[0][el]?.m}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'5px 0px 5px 0px'}}>
                <TittleEfect text={`l:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="l" onChange={(e)=> handleChangeColor(e)} name={`${el}`} id='l' value={element[0][el]?.l}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'5px 0px 5px 0px'}}>
                <TittleEfect text={`xl:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="xl" onChange={(e)=> handleChangeColor(e)} name={`${el}`} id='xl' value={element[0][el]?.xl}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
              </Grid>

              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'5px 0px 5px 0px'}}>
                <TittleEfect text={`xxl:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='number' fullWidth label="xxl" onChange={(e)=> handleChangeColor(e)} name={`${el}`} id='xxl' value={element[0][el]?.xxl}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
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