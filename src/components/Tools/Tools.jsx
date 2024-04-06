import React from 'react';
import './Tools.css';
import '../Animations.css';
import { useLocation, Link } from 'react-router-dom';

const Tools = () => {
  const location = useLocation();
  const comingFromLeft = ['/'];
  

  return (
    <div
      className={
        !comingFromLeft.includes(location.state?.prevLocation)
          ? location.state?.prevLocation === '/tools-details'
            ? 'slideFromTop'
            : 'slideFromLeft'
          : 'slideFromRight'
      }
    >
      <h2 className="headline h2-custom">Tools</h2>
      <Link to={'/tools-details'}>
        <button className="blob blob-green">
          CLICK TO <br /> READ MORE!
        </button>
      </Link>
    </div>
  );
};

export default Tools;
