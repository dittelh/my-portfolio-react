import React, { useEffect } from 'react';
import './Home.css';
import wavingDitte from '../../assets/img/wavingDitte.svg';
import '../Animations.css';
import { useLocation } from 'react-router-dom';
import wavingDitteMP4 from '../../assets/waving-ditte.mp4';
import wavingDitteMoving from '../../assets/waving-ditte-gif.gif';
// import SVGatorComponent from '../waving-ditte';
import ditteWavingSVG from '../../assets/waving-ditte-long.svg';
import DitteWavingSVG from './DitteWavingSVG2';

const Home = () => {
  const location = useLocation();
  const comingFromLeft = ['/'];

  // useEffect(() => {
  //   const videos = document.querySelectorAll('video');

  //   videos.forEach((video) => {
  //     video.addEventListener('mouseover', function () {
  //       this.play();
  //     });

  //     video.addEventListener('mouseout', function () {
  //       this.pause();
  //     });

  //     video.addEventListener('touchstart', function () {
  //       this.play();
  //     });

  //     video.addEventListener('touchend', function () {
  //       this.pause();
  //     });

  //     return () => {
  //       video.removeEventListener('mouseover', handleMouseOver);
  //       video.removeEventListener('mouseout', handleMouseOut);
  //       video.removeEventListener('touchstart', handleTouchStart);
  //       video.removeEventListener('touchend', handleTouchEnd);
  //     };
  //   });
  // }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div
      className={
        !comingFromLeft.includes(location.state?.prevLocation)
          ? 'slideFromLeft'
          : 'slideFromRight'
      }
    >
      <div className="homeContainer">
        <div className="container textHome">
          <h1 className="headline customHeadline">
            // Hello. <br />
            I'm Ditte Lykke Hansen <br />
            and I'm a Fullstack Developer
          </h1>
          <p className="paragraph">
            I am looking forward to use the skills I've learned and contribute
            with my ideas. One of the greatest things about web development is
            that you are never done learning. As a person I'm very curious and
            in a team I'm helpful, positive and ambitious.
          </p>
        </div>
        <object className='wavingDitte' data={ditteWavingSVG} type="image/svg+xml" loop></object>
        {/* <DitteWavingSVG /> */}
        {/* <SVGatorComponent /> */}
        {/* <video className="wavingDitte" src={wavingDitteMP4} loop></video> */}
        {/* <img className="wavingDitte" src={wavingDitte} alt="Waving Ditte" /> */}
        {/* <img className="wavingDitte" src={ditteWavingSVG} alt="Waving Ditte" /> */}
      </div>
    </div>
  );
};

export default Home;
