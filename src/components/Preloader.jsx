import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const preloaderRef = useRef(null);
  const countObj = useRef({ val: 0 });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    gsap.to(countObj.current, {
      val: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        setCount(Math.floor(countObj.current.val));
      },
      onComplete: () => {
        gsap.to('.sound-follow', {
          opacity: 1,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
        });
      },
    });
  }, []);

  const handleActivate = () => {
    if (count < 100) return;
    
    gsap.to(preloaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'power4.inOut',
      onComplete: () => {
        document.body.style.overflow = 'auto';
        if (onComplete) onComplete();
      },
    });
  };

  return (
    <div 
      ref={preloaderRef} 
      className="site-pre-loader" 
      onClick={handleActivate}
      style={{ cursor: 'pointer' }}
    >
      <canvas id="loader-canvas"></canvas>
      <div 
        className="sound-follow" 
        style={{ opacity: count === 100 ? 1 : 0.4, transition: 'opacity 0.3s' }}
      >
        {count === 100 ? 'CLICK ANYWHERE TO ACTIVATE THE EXPERIENCE' : 'LOADING EXPERIENCE'}
      </div>
      <div className="number-count">
        {count.toString().padStart(3, '0')}
      </div>
    </div>
  );
};

export default Preloader;
