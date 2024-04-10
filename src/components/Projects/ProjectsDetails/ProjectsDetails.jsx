import React, { useContext, useEffect } from 'react';
import './ProjectsDetails.css';
import '../../Animations.css';
import Arrow from '../../../assets/img/arrow.svg';
import { Link, useLocation } from 'react-router-dom';
import Buddys from '../../../assets/img/buddys.png';
import tipsKupon from '../../../assets/img/tipsKupon.svg';
import frogg from '../../../assets/img/frogg.svg';
import todos from '../../../assets/img/todos_3.svg';
import { ThemeContext } from '../../../contexts/ThemeContext';

const ProjectsDetails = () => {
  const location = useLocation();

  const theme = useContext(ThemeContext);
  useEffect(() => {
    theme.changeBackgroundImage('purpleBackground');
  }, []);

  return (
    <>
      <div className="slideFromBottom">
        <h2 className="headline h2-custom h2-details">Projects</h2>
        <div className="projectsContainer paddingBottom">
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
            {/* <img className="projectsImg" src={frogg} alt="Frogg" /> */}
            <p className="title">
              FROGG was made for my multimedia exam. It is build with HTML, CSS
              and JavaScript.
            </p>
            {/* <div className="overlay"></div> */}
              <a
                className="projectBtn"
                target="_blank"
                href="https://frogg.dittelh.dk/"
              >
                Visit
              </a>
          </div>

          <div className="containerProjectImg todosImg">
            {/* <img className="projectsImg" src={todos} alt="Todos" /> */}
            <p className="title">
              It's an online to do list where you can share lists with other
              members and both add and complete tasks.
            </p>
            {/* <div className="overlay"></div> */}
            <a
              className="projectBtn"
              target="_blank"
              href="https://todos.dk/login"
            >
              Visit
            </a>
          </div>
          
        </div>
      </div>
      <Link to={'/projects'} state={{ prevLocation: location.pathname }}>
        <button className="backBtn backBtnPurple">
          <img className="arrow" src={Arrow} alt="Arrow up" />
          UP
        </button>
      </Link>
    </>
  );
};

export default ProjectsDetails;
