import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const config = {
  tel: "+919827127945",
  email: "uh_email",
  address:
    "Hirapur Roadd, Sarvodaya Nagar, Mohba Bazar, Raipur, Chhattisgarh, 492099",
};

const Contact = () => {
  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "primary.main",
              width: "100%",
              minHeight: "10px",
              p: 2,
              py: 4,
              color: "primary.contrastText",
            }}
          >
            <Typography variant="h4" sx={{ pb: 2 }}>
              24-HR Emergency Services
            </Typography>

            <Typography variant="body1">
              When you or a loved one is in need of immediate medical attention,
              our 24-hour emergency services team is here to help. We are are
              trained to provide emergency care for a wide range of medical
              conditions to provide the best possible care for our patients.
            </Typography>
            <Button color="white" variant="contained" sx={{ mt: 3 }}>
              Call for Emergency
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "secondary.main",
              width: "100%",
              minHeight: "10px",
              p: 2,
              py: 4,
              color: "secondary.contrastText",
              height: "100%",
            }}
          >
            <Typography variant="h4" sx={{ pb: 5 }}>
              OPD hours
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                py: 2,
                borderBottom: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <Typography variant="body2">Monday - Friday</Typography>
              <Typography variant="body1">9:00 AM - 5:00 PM</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                py: 2,
                borderBottom: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <Typography variant="body2">Saturday</Typography>
              <Typography variant="body1">11:00 AM - 5:00 PM</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                py: 2,
                borderBottom: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <Typography variant="body2">Sunday</Typography>
              <Typography variant="body1">
                <b>Closed</b>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "secondary.light",
              width: "100%",
              height: "100%",
              minHeight: "10px",
              p: 2,
              py: 4,
              color: "secondary.contrastText",
            }}
          >
            <Typography variant="h4" sx={{ pb: 2 }}>
              Contact Us
            </Typography>
            <Link href={"tel:" + config.tel}>
              <Box
                sx={{
                  p: 1,
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <Typography variant="caption">Call Us</Typography>
                <Typography variant="h5">{config.tel}</Typography>
              </Box>
            </Link>
            <Link href={"mailto:" + config.email}>
              <Box
                sx={{
                  p: 1,
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <Typography variant="caption">Send us a message</Typography>
                <Typography variant="h5">uh_email</Typography>
              </Box>
            </Link>
            <Link
              href={"https://maps.app.goo.gl/bHNE8Zxvr7qNM6i66"}
              target="_blank"
            >
              <Box
                sx={{
                  p: 1,
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <Typography variant="caption">Visit Us</Typography>
                <Typography variant="body1">
                  Hirapur Roadd, Sarvodaya Nagar, Mohba Bazar, Raipur,
                  Chhattisgarh, 492099
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
