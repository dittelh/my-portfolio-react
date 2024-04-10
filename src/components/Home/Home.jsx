import React from 'react';
import './Home.css';
import wavingDitte from '../../assets/img/wavingDitte.svg';
import '../Animations.css';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const comingFromLeft = ['/'];

  return (
    <div
      className={
        !comingFromLeft.includes(location.state?.prevLocation)
          ? 'slideFromLeft'
          : 'slideFromRight'
      }
    >
      <div className='homeContainer'>
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
        <img className="wavingDitte" src={wavingDitte} alt="Waving Ditte" />
      </div>
    </div>
  );
};

export default Home;
