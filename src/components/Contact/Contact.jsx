import React from "react";
import "../Animations.css";
import "./Contact.css";
import { useLocation } from "react-router-dom";
import Mail from "../../assets/img/mail.svg";
import LinkedIn from "../../assets/img/linkedin.svg";
import CV from "../../assets/img/cv.svg";
import github from "../../assets/img/github.svg";
import DitteMovingSVG from "../DitteMovingSVG/DitteMovingSVG";

const Contact = () => {
  const location = useLocation();
  const comingFromLeft = ["/", "/tools", "/experience"];
  return (
    <div
      className={
        !comingFromLeft.includes(location.state.prevLocation)
          ? "slideFromLeft"
          : "slideFromRight"
      }
    >
      <h2 className="headline h2-custom lessMargin">Contact</h2>
      <div className="contactContainer">
        <div className="contactImgContainer">
          <a href="mailto:dittehansen143@gmail.com">
            <img
              className="contactImg mail"
              src={Mail}
              alt="Ditte Lykke Hansens mail"
            />
          </a>
          <a href="https://dittelh.dk/CV_DitteLykkeHansen.pdf" target="_blank">
            <img
              className="contactImg CV"
              src={CV}
              alt="Ditte Lykke Hansens CV"
            />
          </a>
          <a href="https://github.com/dittelh" target="_blank">
            <img
              className="contactImg gitHub"
              src={github}
              alt="Ditte Lykke Hansens GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/dittelh/" target="_blank">
            <img
              className="contactImg linkedIn"
              src={LinkedIn}
              alt="Ditte Lykke Hansens LinkedIn"
            />
          </a>
        </div>
        <DitteMovingSVG />
      </div>
    </div>
  );
};

export default Contact;
