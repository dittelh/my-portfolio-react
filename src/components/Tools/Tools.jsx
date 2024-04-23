import React, { useEffect, useContext } from 'react';
import './Tools.css';
import '../Animations.css';
import { useLocation, Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

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
      <Link className="linkTag" to={'/tools-details'}>
        <button className="blob blob-green">
          CLICK TO <br /> READ MORE!
        </button>
      </Link>
    </div>
  );
};

export default Tools;
