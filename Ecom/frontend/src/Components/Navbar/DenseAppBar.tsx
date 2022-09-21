import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function DenseAppBar() {
  const [activeStep, setActiveStep] = useState(0);


  const handleStepChange = (step: number) => {
    setTimeout(()=>{

        setActiveStep(step);
    },2000)
  };

  return (
    <Box sx={{ height: "2rem" }}>
      <AppBar position="static" sx={{boxShadow:'none'}}>
        <AutoPlaySwipeableViews
          axis="x-reverse"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          <Toolbar
            variant="dense"
            sx={{
            background:"#a35e04",
              color: "black",
              display: "flex",
              justifyContent: "center",
              minHeight: "2rem",
              boxShadow:'none',
            }}
          >
            <Typography sx={{fontWeight:'600'}}>
              {"Más de 10 años en el rubro 💪"}
            </Typography>
          </Toolbar>
          <Toolbar
            variant="dense"
            sx={{
            background:"#a35e04",
              color: "black",
              display: "flex",
              justifyContent: "center",
              minHeight: "2rem",
              boxShadow:'none',
            }}
          >
            <Typography sx={{fontWeight:'600'}}>
              {"Gracias por confiar en nosotros 🧡"}
            </Typography>
          </Toolbar>
          <Toolbar
            variant="dense"
            sx={{
            background:"#a35e04",
              color: "black",
              display: "flex",
              justifyContent: "center",
              minHeight: "2rem",
            }}
          >
            <Typography sx={{fontWeight:'600'}}>
              {"Pedidos MAYORISTAS por WhatsApp"}
            </Typography>
          </Toolbar>
        </AutoPlaySwipeableViews>
      </AppBar>
    </Box>
  ) /* : (
    <Box sx={{ height: "2rem" }}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{
            backgroundColor: "yellow",
            color: "black",
            display: "flex",
            justifyContent: "center",
            minHeight: "2rem",
          }}
        >
          <Typography>{`Bienvenidxs al foro de Henry🖤`}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  ); */
}