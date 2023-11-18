import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const BookApp = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        p: 4,
        px: 5,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h5">Book an Appointment</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Your Name"
            variant="standard"
            color="white"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Your Phone"
            variant="standard"
            color="white"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label="Your Email"
            variant="standard"
            color="white"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            multiline
            fullWidth
            minRows={2}
            label="Describe Your Issue"
            variant="standard"
            color="white"
          />
        </Grid>
      </Grid>
      <Button sx={{ mt: 3 }} variant="contained" color="secondary">
        Book an Appointment
      </Button>
    </Box>
  );
};

export default BookApp;
