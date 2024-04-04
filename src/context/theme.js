import { grey, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    type: "default",
    backgroundColor: grey[300],
    shadowColor: "shadow-gray-500",
    errorMessage: "red",
    primary: {
      main: "#616161", // dark-grey
      light: grey[400],
      text: "#000",
      buttonShadow: "#9E9E9E", // light-grey,
      hoverShadow: "#757575", // darker-grey
    },
    secondary: {
      main: "#2E2A26", // brown
      text: "#FFF",
      buttonText: "#C24700", // orange
      buttonShadow: "#3A352F", // lighter-brown
      hoverShadow: "#1F1D1A", // darker-brown
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    backgroundColor: grey[800],
    shadowColor: "shadow-gray-900",
    errorMessage: "red",
    primary: {
      main: grey[900],
      light: orange[400],
      text: "#FFF",
      buttonShadow: "#B33300",
      hoverShadow: "#992900",
    },
    secondary: {
      main: "#C24700",
      text: "#000",
      buttonText: "#000",
      buttonShadow: "#666666",
      hoverShadow: "#4D4D4D",
    },
  },
});
