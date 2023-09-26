import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../blog/blog.css'
import "../testomonials/testo.css"
import "./cource.css";
import CourceCard from "../../examples/courcecard/CourceCard";
import { useEffect,useState } from "react";
import EnquiryForm from "../Enqury";
const MainCource6 = () => {
  const [showEnquiryForm,setShowEnquiryForm]= useState(false)
  const toggleEnquiryForm=()=>{
    setShowEnquiryForm(!showEnquiryForm)
  }
  const handleScroll = (className) => {
    const cards = document.querySelectorAll(className);
    cards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect();
      if (cardPosition.top < window.innerHeight) {
        card.classList.add("show-card");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(".cardp"));
    window.addEventListener("scroll", () => handleScroll(".cardpc"));
    window.addEventListener("scroll", () => handleScroll(".mycolm"));
    window.addEventListener("scroll", () => handleScroll(".mycolm1"));
    window.addEventListener("scroll", () => handleScroll(".trands3"));
    window.addEventListener("scroll", () => handleScroll(".cols4a"));
    return () => {
      window.removeEventListener("scroll", () => handleScroll(".cardp"));
      window.removeEventListener("scroll", () => handleScroll(".cardpc"));
      window.removeEventListener("scroll", () => handleScroll(".mycolm"));
      window.removeEventListener("scroll", () => handleScroll(".mycolm1"));
      window.removeEventListener("scroll", () => handleScroll(".trands3"));
      window.removeEventListener("scroll", () => handleScroll(".cols4a"));
    };
  }, []);

  const settings12 = {
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
  const cardData = [
    {
      imageSrc: require("../image/python.png"),
      altText: "MongoDB Image 1",
    },
    {
      imageSrc: require("../image/pytest.png"),
      altText: "MongoDB Image 2",
    },
    {
      imageSrc: require("../image/mongo-db-1.png"),
      altText: "MongoDB Image 1",
    },
    {
      imageSrc: require("../image/javascript.png"),
      altText: "MongoDB Image 4",
    },
    { imageSrc: require("../image/jest.png"), altText: "MongoDB Image 5" },
    {
      imageSrc: require("../image/react-js-1.png"),
      altText: "MongoDB Image 6",
    },
    { imageSrc: require("../image/html-css.png"), altText: "MongoDB Image 7" },
    { imageSrc: require("../image/mysql.png"), altText: "MongoDB Image 8" },
    {
      imageSrc: require("../image/postgresql.png"),
      altText: "MongoDB Image 9",
    },
    {
      imageSrc: require("../image/bootstrap.png"),
      altText: "MongoDB Image 10",
    },
    { imageSrc: require("../image/agile.png"), altText: "MongoDB Image 12" },
    // Add more image data as needed
  ];
  const cardData1 = [
    {
      imageSrc: require("../image/skill-1.png"),
      altText: "MongoDB Image 11",
      titel: "Quantitative Aptitude",
    },
    {
      imageSrc: require("../image/skill-2.png"),
      altText: "MongoDB Image 12",
      titel: "Logical Reasoning",
    },
    {
      imageSrc: require("../image/skill-3.png"),
      altText: "MongoDB Image 13",
      titel: "Articulateness",
    },
    {
      imageSrc: require("../image/skill-4.png"),
      altText: "MongoDB Image 14",
      titel: "Interview Training",
    },
    {
      imageSrc: require("../image/skill-5.png"),
      altText: "MongoDB Image 15",
      titel: "GD Training",
    },
    {
      imageSrc: require("../image/confidence-building-1.png"),
      altText: "MongoDB Image 16",
      titel: "Confidence building",
    },
    {
      imageSrc: require("../image/personality-development.png"),
      altText: "MongoDB Image 17",
      titel: "Personality Development",
    },
  ];
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="blogcontcource">
        <div className="row">
          <div
            className="col-sm-6 mb-3 mb-sm-0 bloghead colsm66"
            style={{ padding: "5%" }}
          >
            <h1
              className="animated-paragraph myparia"
              style={{
                color: "white",
                fontFamily: "initial",
                fontWeight: "800",
                fontSize: "2.3rem",
              }}
            >
              {" "}
              Full Stack Python Training!
            </h1>
            <p className="program11 animated-paragraph">
              {" "}
              To help you become an expert in both fields, our curriculum offers instruction on frontend and backend frameworks like React and Angular as well as backend frameworks like Flask and Django. In order to ensure a thorough approach to development, we also provide education on deployment tools. Additionally, we place a strong emphasis on developing logical thinking, personality, soft skills, and interview preparation from subject matter specialists.

            </p>
            <div className="imagecour" >
              <div class="image-container">
                <img
                  src={require("../image/job-assurance.png")}
                  class="animated-image"
                  alt="imgcour1"
                />
              </div>
              <div class="image-container2">
                <img
                   src={require("../image/money-back-guarantee.png")}
                  class="animated-image2"
                  alt="imgcour1"
                />
              </div>
            
            </div>
          
            <div className="totalcource" style={{ display: "flex" }}>
              <button
                className="show-fees_btn enroll-btn"
                onClick={toggleEnquiryForm}
              >
                {" "}
                Show Course Fees
              </button>
              <button
                className="show-fees_btn enroll-btn"
                onClick={toggleEnquiryForm}
              >
                {" "}
                Enroll Now{" "}
              </button>
              <button className="show-fees_btn enroll-btn">
                <a href="https://wa.me/788003127" style={{textDecoration:"none",color:"white"}}>Talk To Expert</a>
              </button>
            </div>
            {showEnquiryForm&&<EnquiryForm/>}
            
          </div>
        
          <div className="col-sm-6 colsm66" style={{ textAlign: "end", padding: "2%" }}>
            <img
              src={require("../image/Python (1).png")}
              style={{width:"86%"}}
              className="blogs1"
              alt="blogimg"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="header">
          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="feature">
        <h2
          className="featureh1 text-center"
          style={{ fontWeight: "800", marginTop: "16px" }}
        >
          Key Features{" "}
        </h2>
      </div>
      <CourceCard />

      <div
        className="courses-bg-image"
        style={{ padding: "30px", marginTop: "20px" }}
      >
        <div className="row courcerow">
        <div className="col-sm-4" style={{ margin: "auto" }}>
            <img
              src={require("../image/courceadv.png")}
              className="courseadv"
              style={{ width: "100%" }}
              alt="miracle cources"
            />
          </div>

          <div className="col-sm-4 colsm4">
            <div className="cardp card-3">
              <h2 className="teqnic"> Technical Expertise</h2>
              <p className="teqnicp">
                {" "}
                Gain expertise in both, front-end as well as back-end
                frameworks. Also, get an understanding of the working of
                deployment tools in order to lead from the front.
              </p>
            </div>
            <div className="cardp card-1">
              <h2 className="teqnic"> Non-Tech Training</h2>
              <p className="teqnicp">
                Learn certain skills that are needed to be in any company, like
                how to answer wisely to crack an interview, how to operate in a
                team, and how to excel while working in a company.
              </p>
            </div>
          </div>
          <div className="col-sm-4 colsm4">
            <div className="cardp card-2">
              <h2 className="teqnic"> Individual Growth</h2>
              <p className="teqnicp">
                {" "}
                Along with infusing coding skills we will work closely on your
                core development, such as personality, confidence,
                communication, aptitude, and logic building.
              </p>
            </div>
            <div className="cardp card-4">
              <h2 className="teqnic"> Hands-On Experience</h2>
              <p className="teqnicp">
                {" "}
                Get hands-on experience with multiple designs and components
                along with learning how to build dynamic websites using Python
                libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="infusing">
        <h2 className="infusing11a"
          style={{
            textAlign: "center",
          
            fontSize: "35px",
          }}
        >
          The capabilities we will incorporate:
        </h2>

        <div className="infusing1a" style={{ padding: "30px" }}>
          <h2 className="infusing11a"
            style={{
             
              fontSize: "35px",
            }}
          >
            Technical Capabilities
          </h2>

          <div
            className="card-container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {cardData.map((card, index) => (
              <div className="cardpc" key={index}>
                <img
                  src={card.imageSrc}
                  alt={card.altText}
                  className="cardpc-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="infusing1a" style={{ padding: "30px" }}>
          <h2 className="infusing11a"
            style={{
              
              fontSize: "35px",
            }}
          >
           Other Skills
          </h2>

          <div
            className="card-container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {cardData1.map((card, index) => (
              <div className="cardpc cardppm" key={index}>
                <img
                  src={card.imageSrc}
                  alt={card.altText}
                  className="cardpc-image"
                />
                <p className="mycourcecard">{card.titel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="aboutcontant">Tool-Pool</div>
      <div className="myboxcontant" style={{ padding: "20px" }}>
        <Slider {...settings12}>
        <div className="testimonial11 courese111">
            <div className="pic courcespic">
              <img src={require("../image/git.png")} alt="this is frist" />
            </div>
            <p className="description mycource111">
              Version control system for managing code changes.
            </p>
          </div>
          <div className="testimonial11 courese111">
            <div className="pic courcespic">
              <img
                src={require("../image/Visual-studio.png")}
                alt="this is second"
              />
            </div>
            <p className="description mycource111">
              Lightweight and customizable IDE for JavaScript and Node.js.
            </p>
          </div>
          <div className="testimonial11 courese111">
            <div className="pic courcespic">
              <img src={require("../image/postman.png")} alt="this is third" />
            </div>
            <p className="description mycource111">
              API testing and HTTP request
               tool.
            </p>
          </div>
          <div className="testimonial11 courese111">
            <div className="pic courcespic">
              <img src={require("../image/npm.png")} alt="this is fourth" />
            </div>
            <p className="description mycource111">
              Package manager for NodeJS 
              dependencies.
            </p>
          </div>
          <div className="testimonial11 courese111">
            <div className="pic courcespic">
              <img src={require("../image/Eslint.png")} alt="this is five" />
            </div>
            <p className="description mycource111">
              JavaScript linter for identifying and fixing code errors.
            </p>
          </div>
        </Slider>
      </div>
     
      <div className=" mycontener space-around pt-5 pb-5 pl-2">
        <div
          className="outcome text-center"
          style={{ fontSize: "36px", fontWeight: "800", color: "white" }}
        >
          Outcomes of the program?
        </div>
        <div className="row ourcomesrow" style={{ padding: "50px" }}>
          <div className="col-sm-3 colsm66">
            <img
              src={require("../image/program-1.png")}
              style={{ width: "100%" }}
              className="mycolm"
              alt="this is program"
            />
          </div>
          <div className="col-sm-8 mycolm1 colsm66" style={{ marginTop: "50px" }}>
            <h1 className="outcome1">Successful Full Stack Python Developer</h1>
            <h5 className="outcome2">
              Soon after completing this program, you will be a Successful Full
              Stack Python Developer in a reputable IT Company with a very
              decent salary package as per the IT Industry standards.
            </h5>
            <h1 className="outcome1">Job positions</h1>
            <h5 className="outcome2">
              You will acquire the necessary skills and expertise to excel in
              the IT industry and be qualified for various job positions.
            </h5>
            <h1 className="outcome1">Succeed in job interviews</h1>
            <h5 className="outcome2">
              Our program includes a soft skills development component that will
              enhance your abilities to succeed in job interviews and showcase
              your strengths.
            </h5>
          </div>
        </div>
        <div className="row ourcomesrow1" style={{ padding: "50px" }}>
          <div
            className="col-sm-8 mycolm colsm66"
            style={{ marginTop: "50px", textAlign: "right" }}
          >
            <h1 className="outcome1">Live Projects</h1>
            <h5 className="outcome2">
              Through timely assessments and project-based training, you will
              gain proficiency in handling multiple live projects.
            </h5>
            <h1 className="outcome1">Job positions</h1>
            <h5 className="outcome2">
              You will acquire the necessary skills and expertise to excel in
              the IT industry and be qualified for various job positions.
            </h5>
            <h1 className="outcome1">Succeed in job interviews</h1>
            <h5 className="outcome2">
              Our program includes a soft skills development component that will
              enhance your abilities to succeed in job interviews and showcase
              your strengths.
            </h5>
          </div>
          <div className="col-sm-3 mycolm1 colsm66">
            <img
              src={require("../image/program-2.png")}
              style={{ width: "100%" }}
              alt="this is program2"
            />
          </div>
        </div>
      </div>
      <div
        className="intestrytrands"
        style={{ padding: "3%"}}
      >
        <div className="trands2 text-center">Industry Trends</div>
        <div className="trands3" style={{ padding: "2%" }}>
          <div className="row myrow">
            <div className="col-sm-4 text-center ">
              <h5 className="card-title cardtitelhh">Industry Growth</h5>
              <img
                src={require("../image/pythonin.png")}
                alt="this is milion"
              />
              <p className="card-text cardtextpp">
                For a Successful Full Stack Python Developer
                <br /> Annual Growth
              </p>
              <h1 style={{ color: "#ae424d" }}>1 Million</h1>
              <p className="card-text cardtextpp">
                job opportunities every year
              </p>
            </div>
            <div className="col-sm-4 text-center">
              <h5 className="card-title cardtitelhh">Full Stack Developer Annual Salary</h5>
              <img
                src={require("../image/python-graph.png")}
                style={{ width: "100%" }}
                alt="this is graph"
              />
            </div>
            <div className="col-sm-4 text-center">
              <h5 className="card-title cardtitelhh">Hiring Companies</h5>
              <div className="imegesh">
                <img
                  src={require("../image/google.png")}
                  className="myimegecource"
                  alt="googlemy"
                />
                <img
                  src={require("../image/amazon.png")}
                  className="myimegecource"
                  alt="amazonmy"
                />
                <img
                  src={require("../image/ibm.png")}
                  className="myimegecource"
                  alt="ibmmy"
                />
                <img
                  src={require("../image/tcs1.png")}
                  className="myimegecource"
                  alt="tcsmy"
                />
                <img
                  src={require("../image/Infosys.png")}
                  className="myimegecource"
                  alt="infosysmy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="trands2 text-center" style={{ fontFamily: "initial" }}>
          Why this Program?
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-sm-6 mycolm">
            <img
             src={require("../image/itpro5.webp")}
              className="pool-img"
              alt="why-this"
            />
          </div>
          <div className="col-sm-6 mycolm1" style={{ margin: "auto" }}>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item myaccordation">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed mycollapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{ borderRadius: "19px" }}
                  >
                    Understand real-world problems by actually working on them
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body mybody">
                    The capstone projects we will work on have real-world data
                    sets. Also, to give you hands-on experience with every
                    technology we have labs with sufficient tools and support
                    systems.
                  </div>
                </div>
              </div>
              <div className="accordion-item myaccordation">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed mycollapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                    style={{ borderRadius: "19px" }}
                  >
                    Build like an expert with the field experts
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body mybody">
                    We have done all the necessary market research based on
                    which our field experts will introduce you to all the
                    leading technologies and practices of the current industry.
                  </div>
                </div>
              </div>
              <div className="accordion-item myaccordation">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed mycollapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    style={{ borderRadius: "19px" }}
                  >
                    Gain skills for career growth
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body mybody">
                    The curriculum we have designed will give you a command of a
                    few of the most useful tools and technologies which will
                    make you a job-ready complete packaged Successful Full Stack
                    Python Developer
                  </div>
                </div>
              </div>
              <div className="accordion-item myaccordation">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed mycollapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                    style={{ borderRadius: "19px" }}
                  >
                    Well-organized learning eco-system
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body mybody ">
                    The milieu we provide is a package of several things, such
                    as full freedom to access the labs throughout the day,
                    liberty to discuss and execute new ideas, like-minded
                    people, and mentors to guide and solve doubts in-depth.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="trands2 text-center"
          style={{ marginTop: "50px" }}
        >
            100% Job Assurance or Money Back Guarantee!*
        </div>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-sm-4 cols4a" style={{ textAlign: "end" }}>
          <img
              src={require("../image/itpro6.webp")}
              style={{ width: "100%",borderRadius:"50px" }}
              alt="this is job page "
            />
          </div>
          <div className="col-sm-8 mycolm1">
            <div class="containermycou">
              <div
                class="black-boxmy"
                style={{ backgroundColor: "black" }}
              ></div>
              <h4 className="mycourcecontant">Value-based system</h4>
            </div>
            <p className="mycourcecontantp" style={{ marginLeft: "55px" }}>
              Our value-based system ensures your future by providing proper
              placement training and guidance.
            </p>
            <div class="containermycou">
              <div
                class="black-boxmy"
                style={{ backgroundColor: "#c84d6a" }}
              ></div>
              <h4 className="mycourcecontant">Skill-based system</h4>
            </div>
            <p className="mycourcecontantp" style={{ marginLeft: "55px" }}>
              Miracle  offers you a course that combines soft skills,
              personality development, logical thinking ability, confidence
              building, and coding skills. We take on the responsibility to
              bring out the best in you and transform you into an industry-ready
              IT expert.
            </p>
            <div class="containermycou">
              <div
                class="black-boxmy"
                style={{ backgroundColor: "#3e747b" }}
              ></div>
              <h4 className="mycourcecontant">Job-oriented system</h4>
            </div>
            <p className="mycourcecontantp" style={{ marginLeft: "55px" }}>
              We provide everyone with 100% Job Assurance* after the course
              completion. Additionally, we offer a 100% Money Back Guarantee* if
              a job placement is not achieved.
            </p>
          </div>
        </div>
        <div
          className="trands2 text-center"
          style={{ fontFamily: "inherit", marginTop: "50px" }}
        >
          Eligibility Criteria
        </div>
        <div className="eligibility">
          <ul>
            <li className="lilist">
              To start with this Full Stack Python Developer course
              you must have a basic knowledge and understanding of programming.
            </li>
            <li className="lilist">
              You must have a graduate degree (B.Tech./M.Tech./MCA/BCA/any
              Diploma degree holder with basic programming knowledge), even if
              you are a final-year student that would also be considered.
            </li>
            <li className="lilist">
              You must pass our basic admission test to enroll in this Full Stack Python Developer course.
            </li>
          </ul>
        </div>
        <div className="trands2" style={{ marginTop: "50px" }}>
          FAQs
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-sm-12" style={{ margin: "auto" }}>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item myaccordation">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed mycollapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{ borderRadius: "19px" }}
                  >
                    1. How is learning Python beneficial?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body mybody">
                    Learning Python can benefit those aspiring to be data
                    scientists, machine learning engineers, data analysts, or
                    software developers, as it offers a strong foundation of
                    programming skills. Python's versatility has made it a
                    fast-growing language, suitable for various applications
                    like web and game development, scientific computing, data
                    analysis, and machine learning.
                  </div>
                </div>
              </div>
              <div className="accordion-item myaccordation">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed mycollapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                    style={{ borderRadius: "19px" }}
                  >
                    2. Where is the Python programming language used?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body mybody">
                    Python's rapid growth is attributed to its versatility,
                    making it an ideal language for web and game development,
                    data analysis, machine learning, and scientific computing.
                    Whether you aim to become a data scientist, machine learning
                    engineer, data analyst, or software developer, learning
                    Python provides a strong foundation in programming skills.
                  </div>
                </div>
              </div>
              <div className="accordion-item myaccordation">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed mycollapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    style={{ borderRadius: "19px" }}
                  >
                    3. What is the average annual salary of a Full Stack Python
                    developer?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body mybody">
                    The average annual salary of a Full Stack Python developer
                    is approx Rs. 7L and may increase with the years of
                    experience you hold.
                  </div>
                </div>
              </div>
              <div className="accordion-item myaccordation">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed mycollapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                    style={{ borderRadius: "19px" }}
                  >
                    4. Which books would help me to become a Full Stack Python
                    developer?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body mybody ">
                    The Full Stack Python developer training program of Miracle 
                    will give you comprehensive knowledge to become proficient
                    in using this powerful language. For future reference, you
                    can also explore certain Python programming books such as:
                    <ul>
                      <li>
                        {" "}
                        Python Crash Course: Project-Based Introduction to
                        Programming by Eric Matthes
                      </li>
                      <li>
                        {" "}
                        Head First Python: A Brain-Friendly Guide by Paul Barry
                      </li>
                      <li>
                        Learn Python 3 the Hard Way: A Very Simple Introduction
                        to Coding by Zed A. Shaw
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          
            <div className="accordion-item myaccordation">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed mycollapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                  style={{ borderRadius: "19px" }}
                >
                  5. Which course is best suited to become a Full Stack Python
                  developer?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body mybody ">
                  Although various courses are now accessible, research and
                  outcomes have shown that live/offline classes provide more
                  efficient learning than online models. Miracle  follows this
                  approach by offering theoretical and practical training in
                  physical classrooms and labs under the guidance of industry
                  experts. This method helps learners gain authentic industry
                  experience in a transparent and polished manner.
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCource6;
