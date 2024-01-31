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
      hover: orange[200],
      text: red[800],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    backgroundColor: grey[800],
    shadowColor: "shadow-gray-900",
    divider: "",
    primary: {
      main: grey[900],
      light: orange[400],
      text: "#FFF",
    },
    secondary: {
      main: "#8A613A",
      hover: orange[200],
      text: grey[900],
    },
  },
});
