import React from "react";
// ========== Import MUI COMPONENTS ============= //
import Grid from "@mui/material/Grid";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import {Button} from '@mui/material'

function CreateProduct() {
  let [info, setInfo] = React.useState({url:{}});
  let [render, setRender] = React.useState([1]);
  let [loading, setLoading] = React.useState(false);

  const newImagen = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    if(render.length<=6){
        setRender(render=[...render,render.length+1])
    }
  }

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
  return (
    <Grid container sx={{ marginTop: "10rem", border: "1px solid white" }}>
      <Grid item xs={8} sx={{ border: "1px solid green" }}>
        {render? render.map((e)=>{
            return(
                <>
              <FormGroup
                style={{
                  background: "white",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Label for="exampleFile" style={{ color: "black" }}>
                  File
                </Label>
                <Input
                  id="exampleFile"
                  name={`img${e}`}
                  type="file"
                  placeholder="Imagen 1"
                  onChange={(e) => uploadImage(e)}
                />
                <FormText style={{ color: "black" }}>
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
                </>
            )
            
        }):null }
        <Button onClick={(e)=>newImagen(e)}>Subir otra imagen</Button>
      </Grid>
    </Grid>
  );
}

export default CreateProduct;
