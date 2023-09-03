import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const HeadBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>Upadhyay Hospital</Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default HeadBar;
