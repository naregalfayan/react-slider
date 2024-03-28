import React, { useState } from "react";
import slide1 from "./../assets/img_slide/slide1.jpg";
import slide2 from "./../assets/img_slide/slide2.jpg";
import slide3 from "./../assets/img_slide/slide3.jpg";
import slide4 from "./../assets/img_slide/slide4.jpg";
import slide5 from "./../assets/img_slide/slide5.jpg";
import slide6 from "./../assets/img_slide/slide6.jpg";
import "./slider.css";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);

  const handleSlideNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handleSlidePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container">
      <div className="slider_image_container">
        <button className="button" onClick={handleSlidePrev}>
          {"<"}
        </button>
        <div className="slider_image_wrapper">
          <img
            className="slider_image_left"
            src={slides[(currentIndex + slides.length - 1) % slides.length]}
            alt="slide1"
          />
          <img
            className="slider_image_main"
            src={slides[currentIndex]}
            alt="slide2"
          />
          <img
            className="slider_image_right"
            src={slides[(currentIndex + 1) % slides.length]}
            alt="slide3"
          />
        </div>
        <button className="button" onClick={handleSlideNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
