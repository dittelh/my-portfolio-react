import React, { useEffect, useContext } from 'react';
import '../Animations.css';
import './Projects.css';
import { useLocation, Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const Projects = () => {
  const location = useLocation();
  const comingFromLeft = ['/', '/tools'];

  const theme = useContext(ThemeContext);

  useEffect(() => {
    const projectsSlideDirection = !comingFromLeft.includes(
      location.state?.prevLocation
    )
      ? location.state?.prevLocation === '/projects-details'
        ? 'projectsBackgroundImgTop'
        : 'projectsBackgroundImgLeft'
      : 'projectsBackgroundImgRight';

    theme.changeTheme(2, 'rgba(237, 233, 245, 1)');
    theme.changeBackgroundImage(projectsSlideDirection);
  }, []);

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
      <Link className='linkTag' to={'/projects-details'}>
        <button className="blob blob-purple">
          CLICK TO <br /> READ MORE!
        </button>
      </Link>
    </div>
  );
};

export default Projects;
