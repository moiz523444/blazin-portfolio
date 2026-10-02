import React from 'react';

const Modals = ({
  isContactOpen,
  onCloseContact,
  selectedProject,
  onCloseProject,
  isMenuOpen,
  onCloseMenu
}) => {
  return (
    <>
      {/* Contact Drawer Modal */}
      <div 
        className="modal-contact-us" 
        style={{
          clipPath: isContactOpen ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
          transition: 'clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
          pointerEvents: isContactOpen ? 'auto' : 'none',
        }}
      >
        <div 
          className="close-sidebar-contact" 
          onClick={onCloseContact}
          style={{ cursor: 'pointer' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path
              d="M1.29074 23L0 21.7093L10.2093 11.5L0 1.29074L1.29074 0L11.5 10.2093L21.7093 0L23 1.29074L12.7907 11.5L23 21.7093L21.7093 23L11.5 12.7907L1.29074 23Z"
              fill="#E6E6E6"
            />
          </svg>
        </div>

        <h1>GET IN <span className="fancy">TOUCH</span></h1>
        <img 
          src="https://www.meermohsin.me/assets/contact-us-bg-_S1DUN49.webp" 
          alt="contact-us-bg" 
          loading="lazy" 
          decoding="async" 
        />
        
        <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been received.'); onCloseContact(); }}>
          <input type="text" name="name" placeholder="Your Good Name" required />
          <input type="tel" name="phone" placeholder="Your Number" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" className="textarea" placeholder="Please type your concern here!" required rows={3}></textarea>
          <button type="submit" className="cta-submit" style={{ cursor: 'pointer', background: 'transparent' }}>
            Submit
          </button>
        </form>
      </div>

      {/* Case Study Sidebar Drawer */}
      <div 
        className="case-study-side-bar" 
        style={{
          clipPath: selectedProject ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
          transition: 'clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
          pointerEvents: selectedProject ? 'auto' : 'none',
        }}
      >
        <div 
          className="close-sidebar" 
          onClick={onCloseProject}
          style={{ cursor: 'pointer', position: 'fixed', top: '2rem', right: '2rem', zIndex: 3000 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path
              d="M1.29074 23L0 21.7093L10.2093 11.5L0 1.29074L1.29074 0L11.5 10.2093L21.7093 0L23 1.29074L12.7907 11.5L23 21.7093L21.7093 23L11.5 12.7907L1.29074 23Z"
              fill="#E6E6E6"
            />
          </svg>
        </div>

        {selectedProject && (
          <div style={{ padding: '2rem 1rem' }}>
            <div className="image-hero-side">
              <img src={selectedProject.image} alt={selectedProject.title} style={{ clipPath: 'none' }} />
            </div>

            <div className="date-about-project" style={{ marginTop: '2rem' }}>
              <p className="sidebar-date">{selectedProject.tag}</p>
            </div>

            <h1 className="sidebar-h1" style={{ marginTop: '1rem' }}>{selectedProject.title}</h1>
            <p className="sidebar-p" style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
              {selectedProject.desc}
            </p>

            <div className="project-tags">
              <span>Three.js</span>
              <span>GSAP</span>
              <span>React</span>
              <span>Creative UI</span>
            </div>

            <section className="project-role">
              <div className="section-heading">
                <span>Contribution</span>
              </div>
              <ul className="role-list">
                <li>Art Direction &amp; Concept</li>
                <li>Interactive 3D Engineering</li>
                <li>Performance Tuning (60 FPS)</li>
              </ul>
            </section>
          </div>
        )}
      </div>

      {/* Fullscreen Mobile Navigation Menu */}
      <div 
        className="navigation-menu" 
        style={{
          display: isMenuOpen ? 'block' : 'none',
          visibility: isMenuOpen ? 'visible' : 'hidden',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
      >
        <div className="bars-overlays">
          <div className="bar-bgs" style={{ transform: isMenuOpen ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <div className="bar-bgs" style={{ transform: isMenuOpen ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <div className="bar-bgs" style={{ transform: isMenuOpen ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <div className="bar-bgs" style={{ transform: isMenuOpen ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <div className="bar-bgs" style={{ transform: isMenuOpen ? 'scaleX(1)' : 'scaleX(0)' }}></div>
        </div>

        <div 
          onClick={onCloseMenu}
          style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 200 }}
        >
          ✕
        </div>

        <div className="menu-navigate-scroll">
          <a href="#home" onClick={onCloseMenu}>HOME</a>
          <a href="#about" onClick={onCloseMenu}>ABOUT</a>
          <a href="#services" onClick={onCloseMenu}>SERVICES</a>
          <a href="#work" onClick={onCloseMenu}>WORK</a>
          <a href="#blog" onClick={onCloseMenu}>BLOG</a>
          <a href="#contact" onClick={() => { onCloseMenu(); isContactOpen(); }}>CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Modals;
