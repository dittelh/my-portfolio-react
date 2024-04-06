import React from 'react';
import './ProjectsDetails.css';
import '../../Animations.css';
import Arrow from '../../../assets/img/arrow.svg';
import { Link, useLocation } from 'react-router-dom';

const ProjectsDetails = () => {
  const location = useLocation();

  return (
    <div className="slideFromBottom">
      <h2 className="headline h2-custom h2-details">Projects details</h2>
      <Link to={'/projects'} state={{ prevLocation: location.pathname }}>
        <button className="backBtn backBtnGreen">
          <img className="arrow" src={Arrow} alt="Arrow up" />
          UP
        </button>
      </Link>
    </div>
  );
};

export default ProjectsDetails;
