import Cards from "../../examples/cards/Cards";
import "./style.css";
import Compnay from "../../examples/plased/Compnay";
import TestimonialSlider from "../testomonials/Testomonials";
import { useEffect, useState } from "react";
import GurantyCard from "../gurantycard/GurantyCard";
import Footer from "../Footer";
const HomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const targetNumbers = [90, 12, 25, 240, 94];
  const countingDifferences = [6, 1, 2, 13, 6];
  const [currentNumbers, setCurrentNumbers] = useState([1, 1, 1, 1, 1]);

  useEffect(() => {
    const updateNumbers = () => {
      setCurrentNumbers((prevNumbers) => {
        const newNumbers = prevNumbers.map((currentNumber, index) =>
          currentNumber < targetNumbers[index]
            ? currentNumber + countingDifferences[index]
            : currentNumber
        );
        return newNumbers;
      });
    };

    const interval = setInterval(updateNumbers, 150); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  });
  useEffect(() => {
    // Delay the button display by 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="blogcont">
        <video autoPlay loop muted className="background-video">
          <source src={require("../image/itmirecal.mp4")} type="video/mp4" />
        </video>
        <div className="row">
          <div
            className="col-sm-12 mb-3 mb-sm-0 bloghead"
            style={{ padding: "10%", alignItems: "center" }}
          >
            <h1 className=" myparia1">100% Job Guarantee</h1>
            <div className="mydiv1">
              {showButton && (
                <button
                  className="button-24"
                  type="button"
                  onClick={() => {
                    window.location.href =
                      "https://forms.gle/mfvpGvMPZsAH5DSD6";
                    window.history.pushState({}, "", "/");
                  }}
                >
                  Build Your Resume for Free
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="containtercompany">
        <div className="containtercompany1">
          <div className="containtercompany2">
            <h1 className="placed1"> {currentNumbers[0]}%</h1>
            <p className="placed2"> Placed within 8 months of graduation </p>
          </div>
          <div className="containtercompany2">
            {" "}
            <h1 className="placed1">{currentNumbers[1]}LPA</h1>
            <p className="placed2"> Average dream job CTC</p>
          </div>
          <div className="containtercompany2">
            {" "}
            <h1 className="placed1">{currentNumbers[2]}LPA</h1>
            <p className="placed2">
              {" "}
              Average dream job CTC of trained aspirants{" "}
            </p>
          </div>
          <div className="containtercompany2">
            {" "}
            <h1 className="placed1">{currentNumbers[3]}+</h1>
            <p className="placed2"> Hiring partners </p>
          </div>
          <div className="containtercompany2">
            {" "}
            <h1 className="placed1">{currentNumbers[4]}%</h1>
            <p className="placed2">
              {" "}
              Placed and satisfied candidates in IT industry
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#0a1737" }}>
        <div className="monyback">
          <div className="mytext text-center mytextdiv">
            <h1>100% Job Assurance or Money Back Guarantee!*</h1>
          </div>

          <GurantyCard />
        </div>
        <div className="mytext text-center" style={{ marginTop: "20px" }}>
          <h1 className="join1">Our Courses</h1>
        </div>
        <Cards />
        <h3 className="joine2 whyjoin">
          Why do you need MIRACLE? (Students Search Miracle IT Career Acedmy For
          Best Full Stack Development Training)
        </h3>
        <div className="mytext text-center text11div">
          <h5 className="joine3 joindiv">
            When you carefully consider the reasons listed below and give them
            some thought, you will find that there are numerous benefits of
            choosing Miracle IT Career Academy over other IT training
            facilities. The advantages are below, so let's look at them!
          </h5>
          <div className="row myhomeboxrow" style={{ marginTop: "40px" }}>
            <div className="col-sm-6 mb-3 mb-sm-0 myhomepagea1">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <span className="num">1.</span> 100% Placement Assurance
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body accordionbody">
                      You can use the concepts to the most extent while applying
                      to our placement partners thanks to the cutting-edge
                      learning approaches we deliver.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed  myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <span className="num">2.</span> Project-based learning
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      In contrast to other platforms, we are not interested in
                      enrolling a large number of students at once and giving
                      them the curriculum incessantly. In order to provide
                      students with the most beneficial experience, we adhere to
                      a certain teaching methodology.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      <span className="num">3.</span> Core development
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      As an added benefit, we will closely focus on your
                      fundamental development, such as personality, confidence,
                      communication, aptitude, and logic building for improved
                      interview conversion, in addition to infusing coding
                      skills.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      <span className="num">4.</span> Practical approach
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      Online courses, project-based training, and labs provide
                      individualized learning for each student. It will assist
                      you in better comprehending each step—from writing code to
                      developing systems and carrying them out
                      successfully—practically and concisely.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      <span className="num">5.</span> Well-furnished
                      infrastructure
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      Our infrastructure is well-equipped to facilitate the
                      training and learning processes of students. In addition,
                      we offer a wide range of complimentary basic amenities,
                      including mineral water, Wi-Fi access for the entire day,
                      and more.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 myhomepage">
              <img
                className="myhomepageimgmain"
                src={require("../image/Home1.1webp.webp")}
                alt="img1"
              />
            </div>
          </div>
          <div
            className="row myhomeboxrow mydiraction"
            style={{ marginTop: "40px" }}
          >
            <div className="col-sm-6 myhomepage">
              <img
                className="myhomepageimgmain"
                src={require("../image/home2webp.webp")}
                alt="img1"
              />
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0 myhomepagea1">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSix"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSix"
                    >
                      <span className="num">6.</span> Competently designed study
                      material
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSix"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      The selection of modules that we offer was painstakingly
                      put together by our team of subject matter experts, who
                      have years of expertise in the IT industry. Consequently,
                      the program tools we have developed are simple to use and
                      comprehend.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSeven"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSeven"
                    >
                      <span className="num">7.</span> Impactful teaching
                      methodology
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSeven"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      We believe that engaging, innovative programs could change
                      the way you learn and increase your academic success.
                      Real-world lessons that engage students and make a
                      significant impact are prioritized over traditional
                      classroom models because they are more effective.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseEight"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseEight"
                    >
                      <span className="num">8.</span> Opportunities to connect
                      with IT professionals
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseEight"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      The opportunities for students to interact with
                      professionals from many industries are abundant at our
                      training facility. This might broaden their network and
                      give them information about potential job paths.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseNine"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseNine"
                    >
                      <span className="num">9.</span> Experienced and
                      knowledgeable instructors
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseNine"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      Our training center features a group of skilled, educated
                      professors who have experience in the field, giving pupils
                      instruction and direction of the highest caliber. These
                      professors are well-versed in the most recent information
                      and techniques, ensuring that students receive instruction
                      that is both current and pertinent.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed myaccordionbutton"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTen"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTen"
                    >
                      <span className="num">10.</span> Best Value for Money
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTen"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body accordionbody">
                      You will find that the courses offer absolutely the best
                      value for your money, and you will achieve the best
                      learning results.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Compnay />
        <TestimonialSlider />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
