import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./logo.css";
const Logos = () => {
  const settings = {
    
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="miraclegroup111 text-center" style={{ color: "#275f9a" }}>
        {" "}
        Miracle Group of Companies{" "}
      </div>
      <div class="row miraclegroup" style={{ marginTop: "20px" }}>
        {/* <div class="col-sm-2 ">
          <img
            src={require("../component/image/logo.1.1.png")}
            className="miraclegroup1"
           
          />
        </div> */}
        <Slider {...settings}>
          <div class="col-sm-2 mymiracle" style={{borderLeft:"1px solid gray"}}>
            <img
              src={require("../image/logo.2webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.3webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.4webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.5webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.6webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.2webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.3webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.4webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.5webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
          <div class="col-sm-2 mymiracle">
            <img
              src={require("../image/logo.6webp.webp")}
              className="miraclegroup1"
              alt="miracle infosarv"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Logos;
