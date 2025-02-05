import React, { useContext, useEffect } from "react";
import "./ProjectsDetails.css";
import "../../Animations.css";
import Arrow from "../../../assets/img/arrow.svg";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";

const ProjectsDetails = () => {
  const location = useLocation();

  return (
    <>
      <div className="slideFromBottom">
        <h2 className="headline h2-custom h2-details">Projects</h2>
        <div className="projectsContainer paddingBottom">
          <div className="containerProjectImg tipsKuponImg">
            <p className="title">
              An online tipsmanager for football euro 2024 with an admin panel
              to manage coupons and matches.
            </p>

            <a
              className="projectBtn"
              target="_blank"
              href="https://tips.thch.dk/"
            >
              Visit
            </a>
          </div>

          <div className="containerProjectImg froggImg">
            <p className="title">
              FROGG was made for my multimedia exam. It is build with HTML, CSS
              and JavaScript.
            </p>
            <a
              className="projectBtn"
              target="_blank"
              href="https://frogg.dittelh.dk/"
            >
              Visit
            </a>
          </div>

          <div className="containerProjectImg todosImg">
            <p className="title">
              It's an online to do list where you can share lists with other
              members and both add and complete tasks.
            </p>
            <a
              className="projectBtn"
              target="_blank"
              href="https://todos.dk/login"
            >
              Visit
            </a>
          </div>

          <div className="containerProjectImg buddysImg">
            <p className="title">
              Buddys was a project made for school. It is build with Angular,
              Ionic and Firestore.
            </p>
            <a
              className="projectBtn"
              target="_blank"
              href="https://buddys.dittelh.dk/login"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
      <Link to={"/experience"} state={{ prevLocation: location.pathname }}>
        <button className="backBtn backBtnPurple">
          <img className="arrow" src={Arrow} alt="Arrow up" />
          UP
        </button>
      </Link>
    </>
  );
};

export default ProjectsDetails;
