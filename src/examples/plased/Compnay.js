import React from "react";
import "./plays.css";
import { useEffect } from "react";
import Alert from "../alert/Alert";
const Compnay = () => {
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
    window.addEventListener("scroll", () => handleScroll(".backsid"));
    return () => {
      window.removeEventListener("scroll", () => handleScroll(".backsid"));
    };
  }, []);

  return (
    <>
    <Alert/>
      <h1 className="mostemployguest"
      
      >
       Most Valuable Employers 
      </h1>
      <div className="compnaysour">
        <div className="backsid">
          <img
            src={require("../../component/image/Amazon2webp.webp")}
            className="mycompines heightmy" style={{height:"11vh"}}
            alt=" Miracle infosarv 1"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/Deloitewebp.webp")}
            className="mycompines heightmy"style={{height:"11vh"}}
            alt="Miracle infosarv 2"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/Impetuswebp.webp")}
            className="mycompines heightmy"style={{height:"11vh"}}
            alt="Miracle infosarv 3"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/Intelwebp.webp")}
            className="mycompines heightmy"
            alt="Miracle infosarv 5"
          />
        </div>

        <div className="backsid">
          <img
            src={require("../../component/image/Yashwebp.webp")}
            className="mycompines heightmy" style={{height:"11vh"}}
            alt="Miracle infosarv 7"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/capegemini-1webp.webp")}
            className="mycompines"
            alt="Miracle infosarv 5"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/eywebp.webp")}
            className="mycompines heightmy"
            alt="Miracle infosarv 6"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/Netlinkwebp.webp")}
            className="mycompines heightmy"
            alt="Miracle infosarv 7"
          />
        </div>
        <div className="backsid">
          <img
            src={require("../../component/image/mphasiswebp.webp")}
            className="mycompines"
            alt="Miracle infosarv 9"
          />
          </div>
          <div className="backsid">
          <img
            src={require("../../component/image/redhatwebp.webp")}
            className="mycompines"
            alt="Miracle infosarv 8"
          />
          </div>
          <div className="backsid">
          <img
            src={require("../../component/image/tcs1 (1)webp.webp")}
            className="mycompines heightmy"
            alt="Miracle infosarv 4"
          />
          </div>
          <div className="backsid">
          <img
            src={require("../../component/image/accenturewebp.webp")}
            className="mycompines"
            alt="Miracle infosarv 11"
          />
          </div>
         
      </div>

      
    </>
  );
};

export default Compnay;
