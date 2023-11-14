import React from "react";
import styles from "./index.module.css";
import { Box, Typography } from "@mui/material";

const TwoImgSplashAngled = ({ bgsrc, heading, sub }) => {
  return (
    <Box sx={{ width: "100%" }} className={styles.cont}>
      <div className={styles.left}>
        <img src={bgsrc} style={{ height: "100%" }} />
      </div>
      <div className={styles.right}>
        <Box
          color={"secondary"}
          sx={{
            backgroundColor: "secondary.main",
            width: "100%",
            height: "100%",
            padding: "20%",
            pr: "10%",
            textAlign: "right",
          }}
        >
          <Typography variant="h2" color={"secondary.contrastText"}>
            {heading}
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "secondary.contrastText",
              my: "20px",
            }}
          />
          <Typography variant="h5" color={"secondary.subText"}>
            {sub}
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default TwoImgSplashAngled;
