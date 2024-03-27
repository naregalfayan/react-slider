import React, { useState } from "react";
import "./slider.css";
import slide1 from "./../assets/img_slide/slide1.jpg";
import slide2 from "./../assets/img_slide/slide2.jpg";
import slide3 from "./../assets/img_slide/slide3.jpg";

const slides = [slide1, slide2, slide3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideNext = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSlidePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container">
      <button onClick={handleSlidePrev}>Prev</button>
      <div className="slider_image_container">
        <img className="slider_image" src={slides[currentIndex]} alt="slide1" />
      </div>

      <button onClick={handleSlideNext}>Next</button>
    </div>
  );
};

export default Slider;
