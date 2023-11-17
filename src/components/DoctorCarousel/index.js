"use client";
import { doctors } from "@/resources/doctors";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
};

const DocCar = () => {
  const sliderRef = useRef();
  return (
    <Box sx={{ bgcolor: "white.dark", py: 5 }}>
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="body1" color="secondary.main">
              Professionals
            </Typography>
            <Typography variant="h4" color="primary.main">
              Our Doctors
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => sliderRef.current.slickPrev()}
              variant="outlined"
              color="secondary"
              sx={{ minWidth: 0, borderRadius: 0 }}
            >
              <FaArrowLeftLong />
            </Button>
            <Button
              onClick={() => sliderRef.current.slickNext()}
              variant="outlined"
              color="secondary"
              sx={{ minWidth: 0, borderRadius: 0 }}
            >
              <FaArrowRightLong />
            </Button>
          </Box>
        </Box>
        <Slider {...sliderSettings} ref={sliderRef}>
          {doctors.map((item) => (
            <Item key={item.name} item={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

const Item = ({ item }) => {
  return (
    <Box m={1} bgcolor="white.main" boxShadow={2}>
      <img
        src={item.img}
        alt={item.name}
        style={{ width: "100%", aspectRatio: 1, objectFit: "cover" }}
      />
      <Box sx={{ p: 2, border: "1px solid", borderColor: "secondary.main" }}>
        <Typography variant="h5" fontWeight={600}>
          {item.name}
        </Typography>
        <Typography variant="body1">{item.title}</Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          border: "1px solid",
          borderColor: "secondary.main",
          borderTop: 0,
        }}
      >
        <Typography variant="body2">{item.desc}</Typography>
      </Box>
    </Box>
  );
};

export default DocCar;
