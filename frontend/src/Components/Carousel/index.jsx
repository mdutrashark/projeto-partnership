import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Carousel = ({ children, ...props }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
