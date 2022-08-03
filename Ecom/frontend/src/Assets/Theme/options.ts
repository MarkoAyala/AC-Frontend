import { PaletteMode } from "@mui/material";

export const createOptions = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...togglePalette(mode),
    },
  };
};

const togglePalette = (mode: string): object => {
  if (mode === "light") {
    return {
      backModal: {
        main: "#f3e5f5",
      },
      dialogButt: {
        main: "#2c387e",
      },
      comen: {
        main: "black",
      },
      title: {
        main: "black",
      },
      primary: {
        main: "#8B4F00", 
      },
      secondary: {
        main: "#151f28", //grey
      },
      warning: {
        main: "#ef6c00", // orange
      },
      info: {
        main: "#313182", //black
      },
      error: {
        main: "#A10702", //red
      },
      success: {
        main: "#239037", //green
      },
      background: {
        main: "whitesmoke", //blanco humo
      },
      border: {
        main: "black", //dorde div
      },
    };
  } else {
    return {
      backModal: {
        main: "#121212",
      },
      dialogButt: {
        main: "yellow",
      },
      comen: {
        main: "white",
      },
      title: {
        main: "yellow",
      },
      primary: {
        main: "#ffd700",
      },
      secondary: {
        main: "#808080",
      },
      warning: {
        main: "#ef6c00",
      },
      info: {
        main: "#000000",
      },
      error: {
        main: "#E61D16",
      },
      success: {
        main: "#00CC66",
      },
      background: {
        main: "#121212",
      },
      border: {
        main: "yellow", //borde div
      },
    };
  }
};