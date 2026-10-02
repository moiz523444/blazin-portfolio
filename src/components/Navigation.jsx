import React, { useState } from 'react';

const Navigation = ({ onOpenContact, onToggleMenu }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic');
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const plusSvg = (
    <img 
      src="data:image/svg+xml,%3csvg%20width='21'%20height='22'%20viewBox='0%200%2021%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2011.8077V10.1923H9.69231V0.5H11.3077V10.1923H21V11.8077H11.3077V21.5H9.69231V11.8077H0Z'%20fill='white'/%3e%3c/svg%3e" 
      alt="icon" 
    />
  );

  return (
    <>
      {/* 3D Spinning Logo */}
      <div className="logo-3d" style={{ opacity: 1 }}>
        <div className="logo-card">
          <img className="front" src="https://www.meermohsin.me/assets/logo-m-D6UUDeXR.png" alt="logo" />
          <img className="back" src="https://www.meermohsin.me/assets/logo-m-D6UUDeXR.png" alt="logo" />
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="menu-2-bar" onClick={onToggleMenu} style={{ opacity: 1, pointerEvents: 'auto', cursor: 'pointer' }}>
        <div className="line-m line-1"></div>
        <div className="line-m line-2"></div>
      </div>

      {/* Desktop Navigation */}
      <nav>
        <ul>
          <li>
            <a className="active-animate" href="#home">HOME</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
          <li>
            <a className="active-animate" href="#about">ABOUT</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
          <li>
            <a className="active-animate" href="#services">SERVICES</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
          <li>
            <a className="active-animate" href="#work">WORK</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
          <li>
            <a className="active-animate" href="#blog">BLOG</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
          <li>
            <a className="active-animate" href="#contact" onClick={(e) => { e.preventDefault(); onOpenContact(); }}>CONTACT US</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
        </ul>
        <ul>
          <li>
            <a className="active-animate" href="https://tiktok.com" target="_blank" rel="noreferrer">TIKTOK</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
          <li>
            <a className="active-animate" href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
          <li>
            <a className="active-animate" href="https://behance.net" target="_blank" rel="noreferrer">BEHANCE</a>
            <div className="plus-for-hover">{plusSvg}</div>
          </li>
        </ul>
      </nav>

      {/* Audio player */}
      <audio id="bgMusic" loop>
        <source src="https://www.meermohsin.me/assets/bg-music--PxsalNb.mp3" type="audio/mpeg" />
      </audio>

      {/* Sound wave visualizer toggle */}
      <div 
        className={`sound-wave ${isPlaying ? 'on' : 'off'}`} 
        onClick={toggleMusic}
        style={{ cursor: 'pointer', zIndex: 1000 }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Fixed bottom ticker */}
      <div className="fixed-bar-ledger">
        <div className="plus-rotate" style={{ transform: 'rotate(0deg) scale(1)' }}>{plusSvg}</div>
        <p className="Name-plus scale-up">TENSION</p>
        <div className="plus-rotate" style={{ transform: 'rotate(0deg) scale(1)' }}>{plusSvg}</div>
        <p className="Name-plus scale-up">IMMERSION</p>
        <div className="plus-rotate" style={{ transform: 'rotate(0deg) scale(1)' }}>{plusSvg}</div>
        <p className="Name-plus scale-up">IMPACT</p>
        <div className="plus-rotate scale-up" style={{ transform: 'rotate(0deg) scale(1)' }}>{plusSvg}</div>
      </div>

      {/* Bottom Right Live Connect Status Bubble */}
      <div 
        className="cta-connect" 
        onClick={onOpenContact}
        style={{ opacity: 1, cursor: 'pointer' }}
      >
        <div className="icon">
          <img src="https://www.meermohsin.me/assets/Meer-mohsin-BIdMWGjW.avif" alt="Agency avatar" />
        </div>
        <div className="text-mask">
          <div className="live">
            <div className="dots"></div>
            ONLINE
          </div>
          <div className="text-mask">
            <div className="live-2">Let's Connect</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
