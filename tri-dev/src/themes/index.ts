import { createTheme } from "@mui/material/styles";
import "./theme.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0069ff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2bd64e",
      contrastText: "#fff",
    },
    info: {
      main: "#1978ff",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});
