import React from "react";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";

import Slider from "react-slick";

export default function CarouselCustom({ children }) {
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        infinite: true,
      },
    },
  ];

  return (
    <div className="App">
      <Slider
        dots={true}
        slidesToShow={5}
        slidesToScroll={4}
        responsive={responsive}
        infinite={false}
        nextArrow={<ChevronRightOutlinedIcon />}
        prevArrow={<ChevronLeftOutlinedIcon />}
      >
        {children}
      </Slider>
    </div>
  );
}
