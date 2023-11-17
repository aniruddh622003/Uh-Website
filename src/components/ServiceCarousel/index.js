"use client";
import { services } from "@/resources/services";
import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
};

const ServCarousel = () => {
  const sliderRef = useRef();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="body1" color="secondary.main">
            Serving you Better
          </Typography>
          <Typography variant="h4" color="primary.main">
            Our Top Services
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
        {services.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </Slider>
    </Box>
  );
};

export default ServCarousel;

const Item = ({ item }) => {
  return (
    <Box sx={{ bgcolor: "white.main", m: 1, p: 1 }}>
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", aspectRatio: 1.6, objectFit: "cover" }}
      />
      <Box sx={{ p: 1 }}>
        <Typography variant="h6" color="primary.main" fontWeight={500}>
          {item.title}
        </Typography>
        <Typography variant="body1" color="white.black">
          {item.desc}
        </Typography>
      </Box>
    </Box>
  );
};
