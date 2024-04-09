import { createTheme } from "@mui/material/styles";

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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          background: "#68E1FD",
        },
      },
    },
  },
});
