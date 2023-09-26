import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Alert = () => {
  const settings = {
    // dots: true,
    infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500, // Transition speed for the slide
  autoplaySpeed: 3000, // Total duration for each slide (2 seconds slide + 2 seconds pause)
  cssEase: "linear",
  pauseOnHover: false,
  }
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      <div
        id="carouselExampleSlidesOnly"

        // Set the interval to 10 seconds (10000 milliseconds)
      >
        <div className="carousel-inner">
          <Slider {...settings}>
            <div className="carousel-item active">
              <img
                src={require("../../component/image/Banner (14)webp.webp")}
                className="d-block w-100"
                alt="Miracle infoserv"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../../component/image/Banner (15)webp.webp")}
                className="d-block w-100"
                alt="Miracle infoserv"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../../component/image/Banner (16)webp.webp")}
                className="d-block w-100"
                alt="Miracle infoserv"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Alert;
