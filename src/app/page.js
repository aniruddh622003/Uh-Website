import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import HeadBar from "@/components/HeadBar";
import TwoImgSplashAngled from "@/components/TwoImgSplashAngled";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import { FaUserDoctor } from "react-icons/fa6";
import DeptBox from "@/components/DepartmentsBox";
import ServCarousel from "@/components/ServiceCarousel";
import DocCar from "@/components/DoctorCarousel";

export default function Home() {
  return (
    <Box>
      <TwoImgSplashAngled
        bgsrc={"./bg-3.jpg"}
        heading={"Medical services that you can trust"}
        sub={"Your health is our priority"}
      />
      <Contact />
      <Container fixed sx={{ py: 4 }}>
        <Typography variant="h3" color="primary.light">
          We are always Committed to You.
        </Typography>
        <Typography variant="h5" color="primary.main">
          Upadhyay Hospital aims to be the Quickest to Relieve you of your Pain
        </Typography>
        <Grid container spacing={4} sx={{ my: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" py={2}>
              <FaUserDoctor fontSize="3rem" />
            </Typography>
            <Typography variant="h5" color="secondary" pb={1}>
              Medical Treatment
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.1 }}>
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" py={2}>
              <FaUserDoctor fontSize="3rem" />
            </Typography>
            <Typography variant="h5" color="secondary" pb={1}>
              Medical Treatment
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.1 }}>
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" py={2}>
              <FaUserDoctor fontSize="3rem" />
            </Typography>
            <Typography variant="h5" color="secondary" pb={1}>
              Medical Treatment
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.1 }}>
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" py={2}>
              <FaUserDoctor fontSize="3rem" />
            </Typography>
            <Typography variant="h5" color="secondary" pb={1}>
              Medical Treatment
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.1 }}>
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: "white.dark" }}>
        <Container fixed sx={{ py: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <DeptBox />
            </Grid>
            <Grid item xs={12} md={9}>
              <ServCarousel />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Stats />
      <Testimonials />
      <DocCar />
    </Box>
  );
}
