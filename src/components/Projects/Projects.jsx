import React from 'react';
import '../Animations.css';
import { useLocation, Link } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();
  const comingFromLeft = ['/', '/tools'];

  return (
    <div
      className={
        !comingFromLeft.includes(location.state?.prevLocation)
          ? location.state?.prevLocation === '/projects-details'
            ? 'slideFromTop'
            : 'slideFromLeft'
          : 'slideFromRight'
      }
    >
      <h2 className="headline h2-custom">Projects</h2>
      <Link to={'/projects-details'}>
        <button className="blob blob-purple">
          CLICK TO <br /> READ MORE!
        </button>
      </Link>
    </div>
  );
};

export default Projects;
