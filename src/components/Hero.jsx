import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const railRef = useRef(null);

  useEffect(() => {
    if (railRef.current) {
      gsap.to(railRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 18,
        ease: 'none',
      });
    }
  }, []);

  return (
    <div className="hero-section-home" id="home">
      <div className="expertise-text">
        <span>VISUAL STORYTELLER</span>
        <span>UI/UX DESIGNER</span>
        <span>3D WEB DEVELOPER</span>
      </div>

      <div className="para-introduce-hero">
        I create digital experiences that aren't just seen they're felt.
        From the first impression to the smallest interaction, <br />
        I focus on making every experience clear, immersive, and memorable.
      </div>

      <div className="my-face-animate">
        <img 
          className="face-image" 
          src="https://www.meermohsin.me/assets/Meer-mohsin-BIdMWGjW.avif" 
          alt="Agency Portrait" 
          loading="lazy" 
          decoding="async" 
        />
        <div className="shade">
          <img 
            src="https://www.meermohsin.me/assets/shade-BqXoo-Hs-CzAjxAPx.webp" 
            alt="shade" 
            loading="lazy" 
            decoding="async" 
          />
        </div>
      </div>

      <div className="scrolling-text">
        <div className="rail" ref={railRef}>
          <h4 style={{ transform: 'none' }}>It Was Always Going to Be This Way.</h4>
          <h4 style={{ transform: 'none' }}>It Was Always Going to Be This Way.</h4>
          <h4 style={{ transform: 'none' }}>It Was Always Going to Be This Way.</h4>
          <h4 style={{ transform: 'none' }}>It Was Always Going to Be This Way.</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
