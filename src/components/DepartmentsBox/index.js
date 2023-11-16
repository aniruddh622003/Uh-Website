import { departments } from "@/resources/departments";
import { Box, Typography } from "@mui/material";
import React from "react";

const DeptBox = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        p: 3,
        py: 2,
      }}
    >
      <Typography variant="h5" color="primary.contrastText" mb={2}>
        Departments
      </Typography>
      {departments.map((dept) => (
        <Typography
          key={`dept-${dept.name}`}
          variant="body1"
          color="primary.subText"
        >
          {dept.name}
        </Typography>
      ))}
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" color="primary.contrastText">
          More to come...
        </Typography>
      </Box>
    </Box>
  );
};

export default DeptBox;
