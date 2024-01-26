import { indigo, yellow, blue, grey, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    type: "default",
    backgroundColor: grey[300],
    textColor: "#000",
    shadowColor: "shadow-gray-500",
    primary: {
      main: indigo[800],
      light: blue[400],
      text: "#000",
    },
    secondary: {
      main: yellow[400],
      hover: yellow[200],
      text: indigo[800],
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
      light: purple[400],
      text: "#FFF",
    },
    secondary: {
      main: yellow[500],
      hover: yellow[200],
      text: grey[900],
    },
  },
});
