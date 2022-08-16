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

function RefreshStock({ renderStock, updateStock, setUpdateStock, errorStock, colors, setColors, newValue, setNewValue}: any) {

  let [stock, setStock] = React.useState<any>([{
    name:'',
    _id:'',
    stock:[
      [{
        black:{
          code:'#000000',
          stock_black:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        white:{
          code:'#000000',
          stock_white:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        beige:{
          code:'#000000',
          stock_beige:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        gray:{
          code:'#000000',
          stock_gray:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        french_blue:{
          code:'#000000',
          stock_french_blue:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        navy_blue:{
          code:'#000000',
          stock_navy_blue:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        blue:{
          code:'#000000',
          stock_blue:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        silver:{
          code:'#000000',
          stock_silver:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        chalk:{
          code:'#000000',
          stock_chalk:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        yellow:{
          code:'#000000',
          stock_yellow:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        golden:{
          code:'#000000',
          stock_golden:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        brown:{
          code:'#000000',
          stock_brown:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        havana_brown:{
          code:'#000000',
          stock_havana_brown:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        brown_sole:{
          code:'#000000',
          stock_brown_sole:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        coffee_brown:{
          code:'#000000',
          stock_coffee_brown:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        board:{
          code:'#000000',
          stock_board:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        red:{
          code:'#000000',
          stock_red:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        green:{
          code:'#000000',
          stock_green:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        dark_green:{
          code:'#000000',
          stock_dark_green:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        light_green:{
          code:'#000000',
          stock_light_green:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        mint_green:{
          code:'#000000',
          stock_mint_green:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        olive_green:{
          code:'#000000',
          stock_olive_green:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        cherry:{
          code:'#000000',
          stock_cherry:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        fuchsia:{
          code:'#000000',
          stock_fuchsia:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        purple:{
          code:'#000000',
          stock_purple:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        copper:{
          code:'#000000',
          stock_copper:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        camel:{
          code:'#000000',
          stock_camel:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        turquoise:{
          code:'#000000',
          stock_turquoise:0,
          xs:0,
          s:0,
          m:0,
          l:0,
          xl:0,
          xxl:0
        },
      }],
      [{
        all:0
      }]
    ]
  }])
  

  function handleChangeNewValue(e:any){
    setNewValue(e.target.value)
    let posteo = false;
    let add = true;
    colors.forEach((eme:any)=>{
      for(let i in eme[0]){
        if(i === e.target.value){
          posteo = true;
        }
      }
    })
    if(!posteo){
      if(updateStock.name !== ''){
        updateStock[0].stock.map((el:any)=>{
          for(const property in el[0]){
              if(property !=='all' && e.target.value === property){
                setColors(colors=[...colors, el])
                add=false;
              }
          }
        })
      }
      if(add){
        stock[0].stock.map((el:any)=>{
          for(const property in el[0]){
              if(property !=='all' && e.target.value === property){
                setColors(colors=[...colors, el])
                add=false;
              }
          }
        })
      }
    }
  }

  const handleChangeStock = (
    el:any
  ) => {
    setUpdateStock(updateStock = renderStock.filter((e:any)=>el.target.value === e._id))
  };

  useMemo(()=>{

    setColors(colors.filter((e:any)=>e!== ''))
    console.log('colors',colors)
  },[])


  const handleChangeColor = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

    
  /*   setUpdateStock((prevState:any)=>{

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
    }) */

    setColors((prevState:any)=>{
      return prevState.map((ele:any)=>{
        for(let property in ele[0]){
          if(property === e.target.name){
            return [{[property]:{...ele[0][property], [e.target.id]:e.target.id === 'code'?e.target.value:parseInt(`${e.target.value}`)}}]
          }else{
            return ele
          }
        }
      })
    })

  }
  return (
    <Grid
      container
      width="100%"
      sx={{
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
              labelId="demo-simple-select-labelsss"
              id="demo-simple-selectss"
              label="Stock"
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

          <FormControl sx={{ width: "100%", margin:'2em 0 0 0', padding: 0 }} error={!colors[0]?true:false}>
            <InputLabel
            id="demo-simple-select-label"
              sx={{
                margin: 0,
                padding: 0,
                "&.MuiInputLabel-root": { color: "white" },
              }}
            >
              Color
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Color"
              name="Color"
              value={newValue}
              onChange={handleChangeNewValue}
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
              {stock[0].stock
                ? stock[0].stock.map((stocked: any) => {
                  for(let property in stocked[0]){
                    return (
                      <MenuItem value={property}>{property}</MenuItem>
                    );
                  }
                  })
                : null}
            </Select>
            {
              !colors[0]?(
                <FormHelperText sx={{fontSize:'20px'}}>Elegir un color</FormHelperText>
              ):null
            }
          </FormControl>
          {colors[0]? colors.map((element:any, i:number)=>{
            for(let el in element[0]){

              if(el==='all'){
                return(
              <Grid container width='100%' key={i}>
                <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'.5em 0px .5em 0px'}}>
                <TittleEfect text={`${el}:`} align='start' fontSize="25px" width={'100%'}/>
                </Grid>
                <Grid item xs={6} sx={{display:'flex',justifyContent:'center',alignItems:'center', border:'2px solid var(--marron)', borderRadius:'5px', margin:'5px 0px 5px 0px', height:'56px'}}>{element[0][el]}</Grid>
              </Grid>
                )
              }
              return(
            <Grid container width='100%' key={i}>
          
              <TittleEfect text={`${el}:`} align='start' fontSize="23px" width={'100%'} margin={"1em 0px 1em 0px"}/>
              
              <Grid item xs={4} sx={{alignItems:'center', display:'flex', justifyContent:'center', margin:'5px 0px 5px 0px'}}>
                <TittleEfect text={`Color:`} align='center' fontSize="20px" width={'100%'}/>
              </Grid>
              <Grid item xs={6}>
              <TextField type='text' error={errorStock.code?true:false} fullWidth label="xs" onChange={(e)=> handleChangeColor(e)} name={`${el}`} id='code' value={element[0][el].code}  autoComplete='off' focused sx={{"& .MuiInputBase-root":{color:"white"}, "& label.Mui-focused":{color:"white"}, "& .MuiSelect-select":{color:"white"}, margin:'7px 0px 7px 0px'}}/>
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