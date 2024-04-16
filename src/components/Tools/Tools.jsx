import React, { useEffect, useContext } from 'react';
import './Tools.css';
import '../Animations.css';
import { useLocation, Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

import ErrorImg from '../../assets/img/backgroundIcons/404.svg';
import BracketImg from '../../assets/img/backgroundIcons/bracket.svg';
import ComputerImg from '../../assets/img/backgroundIcons/computer.svg';
import TagImg from '../../assets/img/backgroundIcons/tag.svg';
import DataImg from '../../assets/img/backgroundIcons/data.svg';
import SemiImg from '../../assets/img/backgroundIcons/semi.svg';

const Tools = () => {
  const location = useLocation();
  const comingFromLeft = ['/'];

  const theme = useContext(ThemeContext);

  useEffect(() => {
    const toolsSlideDirection = !comingFromLeft.includes(
      location.state?.prevLocation
    )
      ? location.state?.prevLocation === '/tools-details'
        ? 'toolsBackgroundImgTop'
        : 'toolsBackgroundImgLeft'
      : 'toolsBackgroundImgRight';

    theme.changeTheme(1, 'rgba(242, 250, 240, 1)');
    theme.changeBackgroundImage(toolsSlideDirection);
    console.log(toolsSlideDirection);
  }, []);

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
      {/* <div className='toolsBackgroundImgContainer'>
        <img className='toolsImg TagImg' src={TagImg} alt="TagImg" />
        <img className='toolsImg ComputerImg' src={ComputerImg} alt="ComputerImg" />
        <img className='toolsImg DataImg' src={DataImg} alt="DataImg" />
        <img className='toolsImg ErrorImg' src={ErrorImg} alt="ErrorImg" />
        <img className='toolsImg SemiImg' src={SemiImg} alt="SemiImg" />
        <img className='toolsImg BracketImg' src={BracketImg} alt="BracketImg" /> 
      </div> */}
    </div>
  );
};

export default Tools;
