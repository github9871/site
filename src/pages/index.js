import React from "react";
import Slider from "react-slick";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
          <p>Content for slide 1.</p>
        </div>
        <div>
          <h3>Slide 2</h3>
          <p>Content for slide 2.</p>
        </div>
        <div>
          <h3>Slide 3</h3>
          <p>Content for slide 3.</p>
        </div>
      </Slider>
    </div>
  );
};

export default HomePage;
