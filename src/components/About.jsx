import React from 'react';

const About = () => {
  return (
    <>
      <div className="about-us" id="about">
        <div className="intro-ab-section">
          <h1 className="cinematic-title">
            This Will <br />
            <span className="fonts-c"> Feel </span> <br />
            Different
          </h1>
        </div>

        <div className="about-us-pictures">
          <p className="cinematic-text">
            <span className="space"></span>
            I don't just build websites I create experiences that people enjoy exploring.
            From the first impression to the smallest interaction, I care about the details
            that make a website feel smooth, memorable, and worth coming back to.
          </p>
        </div>
      </div>

      <div className="facts-figure-container">
        <div className="section-break-fire">
          <img 
            src="https://www.meermohsin.me/assets/fire-mWLvpWRN.gif" 
            alt="fire" 
            loading="lazy" 
            decoding="async" 
          />
        </div>

        <div className="facts-box">
          <h1 className="numbers-facts">10+</h1>
          <p className="para-facts">Each one different. Each one demanding something sharper.</p>
        </div>

        <div className="facts-box">
          <h1 className="numbers-facts">25+</h1>
          <p className="para-facts">Each one pushed beyond the obvious.</p>
        </div>

        <div className="facts-box">
          <h1 className="numbers-facts">6+</h1>
          <p className="para-facts">Learning fast. Moving faster.</p>
        </div>

        <div className="section-break-fire-2">
          <img 
            src="https://www.meermohsin.me/assets/fire-mWLvpWRN.gif" 
            alt="fire" 
            loading="lazy" 
            decoding="async" 
          />
        </div>
      </div>
    </>
  );
};

export default About;
