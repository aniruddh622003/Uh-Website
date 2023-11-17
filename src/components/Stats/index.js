import { stats } from "@/resources/stats";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Stats = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", p: 2, py: 4 }}>
      <Container fixed>
        <Grid container spacing={2}>
          {stats.map((stat) => (
            <Grid
              key={`stat-${stat.bottom}`}
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
                {stat.top}
              </Typography>
              <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
                {stat.bottom}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
