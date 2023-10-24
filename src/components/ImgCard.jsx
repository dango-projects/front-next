import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "next/image";

const photos = [
  {
    id: 1,
    img: "/image/test.png",
  },
  {
    id: 2,
    img: "/image/test.png",
  },
  {
    id: 3,
    img: "/image/test.png",
  },
  {
    id: 4,
    img: "/image/test.png",
  },
];

import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
      }}
    >
      <Slider {...settings}>
        {photos.map((photo) => (
          <Box
            key={photo.id}
            sx={{
              width: "100%",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={photo.img}
              sx={{
                width: "100%",
                justifyContent: "center",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SimpleSlider;
