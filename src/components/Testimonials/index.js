import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { testimonials } from "../../resources/testtimonials";

const Testimonials = () => {
  return (
    <Box
      sx={{
        background: "url(/bg-1.jpg)",
        minHeight: "400px",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
          }}
        >
          <Typography variant="h6" color="secondary.main">
            Testimonials
          </Typography>
          <Typography variant="h4" color="white.main">
            What Our Patients Say
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ pb: 2 }}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={`testi-${testimonial.name}`}>
              <Box sx={{ bgcolor: "white.main" }}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "secondary.main",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="h6" color="secondary.contrastText">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="subtitle1" color="secondary.light">
                      {testimonial.title}
                    </Typography>
                  </Box>
                  <img src={testimonial.image} alt={testimonial.name} />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1" color="primary.main">
                    <Typography
                      sx={{
                        fontSize: "2rem",
                        mr: 2,
                        lineHeight: "1",
                        fontFamily: "fantasy",
                      }}
                      component="span"
                    >
                      "
                    </Typography>
                    <b>{testimonial.text}</b>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
