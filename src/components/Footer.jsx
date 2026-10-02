import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Footer = ({ onOpenContact }) => {
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
    <>
      <div className="before-footer-cta" id="contact">
        <h1 className="cta-title">
          Every Great Story Needs A Powerful
          <span className="fonts"> Ending.</span>
        </h1>
        <div 
          className="cta-footer" 
          onClick={onOpenContact} 
          style={{ cursor: 'pointer' }}
        >
          <div className="ring-circle">
            <img src="https://www.meermohsin.me/assets/ring-BuaafO6K.avif" alt="" />
          </div>
          LET'S BE <span className="fonts">CREATIVE</span>
        </div>
      </div>

      <footer className="footer-hit" id="footer">
        <div id="awwwards" style={{ position: 'absolute', zIndex: 999, transform: 'translateY(-50%)', top: '50%', right: 0 }}>
          <a href="https://www.awwwards.com" target="_blank" rel="noreferrer">
            <svg width="53.08" height="171.358">
              <path fill="#E73C37" d="M0 0h53.08v171.358H0z"></path>
              <g fill="#fff">
                <text 
                  x="20" 
                  y="85" 
                  fill="#fff" 
                  transform="rotate(90 20,85)" 
                  fontSize="12" 
                  letterSpacing="4" 
                  fontFamily="sans-serif" 
                  fontWeight="bold"
                >
                  AWWWARDS
                </text>
              </g>
            </svg>
          </a>
        </div>

        <div className="scrolling-text">
          <div className="rail" ref={railRef}>
            <h4 className="fonts-change" style={{ transform: 'none' }}>It Was Always Going to Be This Way.</h4>
            <h4 className="fonts-change" style={{ transform: 'none' }}>It Was Always Going to Be This Way.</h4>
            <h4 className="fonts-change" style={{ transform: 'none' }}>It Was Always Going to Be This Way.</h4>
            <h4 className="fonts-change" style={{ transform: 'none' }}>It Was Always Going to Be This Way.</h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
