import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3a853d",
      light: "#81d484",
      dark: "#005700",
      contrastText: "#fff",
      subText: "#a8e3ab",
    },
    secondary: {
      main: "#1f2937",
      light: "#60a5fa",
      contrastText: "#fff",
      subText: "#6b7280",
    },
    white: {
      main: "#fff",
      dark: "#f1f4f7",
      contrastText: "#3a853d",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
