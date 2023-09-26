import { NavLink } from "react-router-dom";
import "../App.css"
import "../component/home/style.css"
import Logos from "./logos/Logos";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Define the email address parts
    const user = "info";
    const domain = "miracleitindia.com";

    // Construct the email address
    const email = `${user}@${domain}`;

    // Create a mailto link
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;

    // Append the link to the container
    const emailContainer = document.getElementById("emailContainer");
    emailContainer.appendChild(emailLink);

    // Obfuscate the email address using CSS
    emailLink.style.textDecoration = "none";
    emailLink.style.cursor = "pointer";
    emailLink.style.direction = "rtl";
    emailLink.style.unicodeBidi = "bidi-override";
    emailLink.style.fontSize = "0";
  }, []);
  return (
    <>
      <Logos />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <NavLink to="/about">about us</NavLink>
                </li>
                <li>
                  <NavLink to="/">our services</NavLink>
                </li>
                <li>
                  <NavLink to="/">Payment policy</NavLink>
                </li>
                <li>
                  <NavLink to="/">certificate program</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <NavLink to="/">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Helpdesk</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Expert Advice</NavLink>
                </li>
                <li>
                  <NavLink to="/">Terms & Conditions</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4> Our Group</h4>
              <ul>
                <li>
                  <NavLink to="https://miracleinfoserv.com">
                    Miracle Infoserv
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Miracle Infosoft</NavLink>
                </li>
                <li>
                  <NavLink to="https://miracleitskills-poweredbymirac.godaddysites.com/">
                    Miracle IT Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Miracle IT Foundation (CSR)</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links" style={{ marginLeft: "30px" }}>
                <NavLink to="https://www.facebook.com/MiracleITCareerAcademy/">
                  <img
                    src={require("../component/image/Untitled-social (1)webp.webp")}
                    className="socialicon"
                    alt="miracle infosarv"
                  />
                </NavLink>
                <NavLink to="https://www.instagram.com/miracleitcareeracademy/">
                  <img
                    src={require("../component/image/Untitled-social (4)webp.webp")}
                    className="socialicon"
                    alt="miracle infosarv"
                  />
                </NavLink>
                <NavLink to="https://www.linkedin.com/in/miracle-it-career-academy/">
                  <img
                    src={require("../component/image/Untitled-social (5)webp.webp")}
                    className="socialicon"
                    alt="miracle infosarv"
                  />
                </NavLink>

                <NavLink to="/">
                  <img
                    src={require("../component/image/Untitled-social (6)webp.webp")}
                    className="socialicon"
                    alt="miracle infosarv"
                  />
                </NavLink>
              </div>
              <div
                className="social-links imgpart11"
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={require("../component/image/Untitled-1 (1)webp.webp")}
                  className="locationimag"
                  style={{ height: "4vh" }}
                  alt="Miracle location"
                />
                <h5 className="card-title placec113">
                  M.P Nagar Zone-2 Bhopal
                </h5>
              </div>
              <div
                className="social-links imgpart11"
               
              >
                <img
                  src={require("../component/image/Untitled-2 (1)webp.webp")}
                  className="locationimag"
                  style={{ height: "3vh" }}
                  alt="Miracle location"
                />
                <h5
                  className="card-title placec113"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <a href="tel:+917880003127">+91 7880003127</a>
                </h5>
              </div>

              <div
                className="social-links imgpart11"
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={require("../component/image/Untitled-3 (1)webp.webp")}
                  className="locationimag"
                  style={{ height: "3vh" }}
                  alt="Miracle location"
                /> 
                <h5 className="card-title placec113">
                  <a
                  id="emailContainer"
                    href="mailto:info@miracleitindia.com"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      display: "table-footer-group",
                      unicodeBidi: "bidi-override",
                      
                    }}
                  >
                    info@miracleitindia.com
                  </a>
                </h5>
              </div>
              <div
                className="social-links imgpart11"
               
              >
                <img
                  src={require("../component/image/downlodwebp.webp")}
                  className="locationimag"
                  style={{ width: "90%" }}
                  alt="Miracle location"
                />
              </div>
            </div>
          </div>
          <div className="footer-col myfinacce">
            <h4>Finance Partners</h4>
            <div className="social-links" style={{ marginLeft: "30px" }}>
              <img
                src={require("../component/image/Bajajwebp.webp")}
                className="socialicon11"
                alt="miracle infosarv"
              />
              <img
                src={require("../component/image/Varthanawebp.webp")}
                className="socialicon11"
                style={{ backgroundColor: "green" }}
                alt="miracle infosarv"
              />

              <img
                src={require("../component/image/Credencewebp.webp")}
                className="socialicon11"
                alt="miracle infosarv"
              />
            </div>
          </div>
          <div className="finance">
            Copyright ©2023- Developed by Miracle Infosoft. All rights reserved
            with Miracle Group®
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
