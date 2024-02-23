import { grey, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    type: "default",
    backgroundColor: grey[300],
    textColor: "#000",
    shadowColor: "shadow-gray-500",
    primary: {
      main: grey[700],
      light: grey[400],
      text: "#000",
    },
    secondary: {
      main: "#2E2A26",
      text: red[800],
      buttonText: "#C24700",
      buttonShadow: "#3A352F",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    backgroundColor: grey[800],
    shadowColor: "shadow-gray-900",
    primary: {
      main: grey[900],
      light: orange[400],
      text: "#FFF",
    },
    secondary: {
      main: "#C24700",
      text: grey[200],
      buttonText: "#000",
      buttonShadow: "#666666",
    },
  },
});
