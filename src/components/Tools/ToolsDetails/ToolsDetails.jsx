import React, { useEffect, useContext } from 'react';
import '../../Animations.css';
import './ToolsDetails.css';
import { Link, useLocation } from 'react-router-dom';
import Arrow from '../../../assets/img/arrow.svg';
import { ThemeContext } from '../../../contexts/ThemeContext';

const ToolsDetails = () => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    theme.changeBackgroundImage('greenBackground');
  },[])

  const location = useLocation();

  return (
    <div className="slideFromBottom">
      <h2 className="headline h2-custom h2-details">Tools</h2>
      <div className='marginBottom toolsDiv'>
        <div>
          <h3 className='h3-custom'>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Ionic</li>
            <li>HTML, CSS & JS</li>
            <li>Wordpress</li>
            <li>Bootstrap & Tailwind</li>
          </ul>
        </div>
        <div>
          <h3 className='h3-custom'>Backend</h3>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3 className='h3-custom'>Graphic Design</h3>
          <ul>
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Xd</li>
            <li>Adobe inDesign</li>
            <li>Adobe After Effects</li>
          </ul>
        </div>
      </div>
      <Link to={'/tools'} state={{ prevLocation: location.pathname }}>
        <button className="backBtn backBtnGreen">
          <img className="arrow" src={Arrow} alt="Arrow up" />
          UP
        </button>
      </Link>
    </div>
  );
};

export default ToolsDetails;
