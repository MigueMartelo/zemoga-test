import React from 'react';

import './Hero.scss';

const Hero = () => (
  <div className="hero">
    <div className="hero__card-container">
      <div className="hero__card">
        <div className="hero__card-content">
          <small>What's your opinion on</small>
          <h2>Pope Francis?</h2>
          <p>
            He’s talking tough on clergy sexual abuse, but is he just another papal pervert
            protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
          </p>
          <p>
            <i className="fab fa-wikipedia-w"></i>
            <a href="https://wikipedia.com">More Information</a>
          </p>
          <p>
            <strong>What's Your Veredit?</strong>
          </p>
        </div>
        <div className="hero__votes">
          <div className="votes__up">
            <i className="fas fa-thumbs-up"></i>
          </div>
          <div className="votes__down">
            <i className="fas fa-thumbs-down"></i>
          </div>
        </div>
      </div>
    </div>
    <div className="hero__days-remained">
      <p className="closing__p">closing in</p>
      <p className="closing__days">
        22 <span>days</span>
      </p>
    </div>
  </div>
);

export default Hero;
