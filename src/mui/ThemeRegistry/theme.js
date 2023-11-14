import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3a853d",
      contrastThreshold: 1,
    },
    secondary: {
      main: "#1f2937",
      contrastText: "#fff",
      subText: "#6b7280",
    },
    white: {
      main: "#fff",
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
