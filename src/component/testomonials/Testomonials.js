import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testo.css";
const TestimonialSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <>
      <div className="containertesto">
        <h3 className="testomoliaheadimg text-center">Testomonials</h3>
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-slider" className="owl-carousel">
              <Slider {...settings}>
                <div className="testimonial11">
                  <div className="pic">
                    <img
                        src={require("../image/img1webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  Just I say there team is available for every doubt, problems.
                  I'm so happy to learn without any doubts.
                  </p>
                  <div className="testimonial-profile">
                    <h3 className="title">Vishal-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
                <div className="testimonial11">
                  <div className="pic">
                    <img
                      src={require("../image/img2webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  I had a great time during the full stack course .I look
                  forward to recommend this course to my friends.
                  </p>
                  <div className="testimonial-profile">
                    <h3 className="title">Ankita-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
                <div className="testimonial11">
                  <div className="pic">
                    <img
                      src={require("../image/img3webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  My all over experience is very good there faculties are very
                  helpful to me during training thank you. Thanks Miracle IT
                  Career Academy
                  </p>
                  <div className="testimonial-profile">
                    <h3 className="title">Nilu-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
                <div className="testimonial11">
                  <div className="pic">
                    <img
                      src={require("../image/img4webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  My all over experience is very good there faculties are very
                  helpful to me during training thank you. Thanks Miracle IT
                  Career Academy
                  </p>
                  <div className="testimonial-profile">
                    <h3 className="title">Veer-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
                <div className="testimonial11">
                  <div className="pic">
                    <img
                      src={require("../image/img5webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  Miracle IT Career Academy is an amazing institute for learning
                  coding and preparing for your career
                  </p>
                  <div className="testimonial-profile ">
                    <h3 className="title">Vinod-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
                <div className="testimonial11">

                  <div className="pic">
                    <img
                      src={require("../image/img6webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  I liked there service was so amazing 😊..I really happy to see
                  there service was superb Miracle Infoserv was best🤩
                  </p>
                  <div className="testimonial-profile">
                    <h3 className="title">Shikha-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
                <div className="testimonial11">
                  <div className="pic">
                    <img
                      src={require("../image/img7webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  It's one of the best institute in MP for getting professional
                  knowledge in IT field
                  </p>
                  <div className="testimonial-profile">
                    <h3 className="title">Mohit-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
                <div className="testimonial11">
                  <div className="pic">
                    <img
                      src={require("../image/img8webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  Learning from the best IT trainers and looking forward to be like them. Miracle Academy is really helpful for me.
                  </p>
                  <div className="testimonial-profile">
                    <h3 className="title">Kajal-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
                <div className="testimonial11">
                  <div className="pic">
                    <img
                      src={require("../image/img9webp.webp")}
                      alt="miracle infosarv"
                    />
                  </div>
                  <p className="description">
                  Best decision of my career to be with Miracle IT Career Academy.
                  </p>
                  <div className="testimonial-profile">
                    <h3 className="title">Sumit-</h3>
                    <span className="post">Student</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
