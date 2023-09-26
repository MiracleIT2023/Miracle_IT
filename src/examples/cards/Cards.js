import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import { BsFillStarFill } from "react-icons/bs";
import img1 from "../../component/image/courses1.webp";
import img2 from "../../component/image/courses2.webp";
import img3 from "../../component/image/courses3.webp";
import img4 from "../../component/image/courses4.webp";
import img5 from "../../component/image/courses5.webp";
import img6 from "../../component/image/courses6.webp";
import img7 from "../../component/image/courses7.webp";
// import img8 from "../../component/image/courses8.webp";
import img9 from "../../component/image/13webp.webp";
import img10 from "../../component/image/14webp.webp";
import img11 from "../../component/image/5111webp.webp";
import "slick-carousel/slick/slick-theme.css";
import "./card.css";
import { NavLink } from "react-router-dom";
const Cards = () => {
  const cards = [
    {
      title: "Full Stack MERN ",
      imageUrl: img1,
      link: "/maincource3",
    },
    {
      title: " Full Stack MEAN ",
      imageUrl: img2,
      link: "/maincource4",
    },
    {
      title: "Full Stack Java",
      imageUrl: img3,
      link: "maincource5",
    },
    {
      title: "Full Stack Python",
      imageUrl: img4,
      link: "maincource6",
    },
    {
      title: "Data Anlytics",
      imageUrl: img5,
      link: "maincource9",
    },
    {
      title: "Frontend Development",
      imageUrl: img6,
      link: "maincource8",
    },
    {
      title: "Backend Development",
      imageUrl: img7,
      link: "maincource7",
    },
    // {
    //   title: "Mobile App Development",
    //   imageUrl: img8,
    // },
    {
      title: "PGDSE",
      imageUrl: img9,
      link: "maincource",
    },
    {
      title: "PGDFSE",
      imageUrl: img10,
      link: "maincource1",
    },
    {
      title: "PGDIE",
      imageUrl: img11,
      link: "maincource2",
    },
  ];
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1282,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider-container" style={{ margin: "40px" }}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="col-sm-12" key={index}>
            <div
              className="card card11 custom-card  "
              style={{ cursor: "pointer" }}
            >
              <NavLink to={card.link} className="card-link">
                <img
                  src={card.imageUrl}
                  className="card-img-top"
                  style={{ width: "100%", borderRadius: "40px" }}
                  alt={card.title}
                />
              </NavLink>
              <div className="card-body cardcardbody">
                <h4
                  
                >
                  {card.title}
                </h4>
               
              </div>
            </div>
          </div>

          
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
