import React from 'react';

const Services = () => {
  return (
    <>
      <div className="box-section-ups">
        <div className="services-para" id="services">
          <p className="services-text">
            Design attracts attention. Development brings it to life. I combine both to create websites that not only look exceptional but also feel fast, intuitive, and memorable.
          </p>
          <div className="services-heading">
            <div className="breaks" style={{ transform: 'none' }}>LEGACY</div>
          </div>
        </div>
      </div>

      <section className="services-project">
        <div className="svg-strokee">
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
            <g clipPath="url(#clip0_services)">
              <line x1="-56.9661" y1="540.293" x2="1986.12" y2="540.293" stroke="#990000" strokeWidth="0.5" />
              <line x1="959.823" y1="540.177" x2="264.823" y2="-153.822" stroke="#990000" strokeWidth="0.5" />
              <line x1="564.829" y1="540.183" x2="-152.523" y2="-128.776" stroke="#990000" strokeWidth="0.5" />
              <line x1="565.175" y1="541.228" x2="-152.186" y2="1210.18" stroke="#990000" strokeWidth="0.5" />
              <line y1="-0.25" x2="980.867" y2="-0.25" transform="matrix(0.731345 -0.682008 -0.682008 -0.731345 370.648 540)" stroke="#990000" strokeWidth="0.5" />
              <line x1="371.17" y1="540.817" x2="1090.17" y2="1206.81" stroke="#990000" strokeWidth="0.5" />
              <line x1="1544.83" y1="540.183" x2="827.477" y2="-128.776" stroke="#990000" strokeWidth="0.5" />
              <line x1="1545.17" y1="541.228" x2="827.814" y2="1210.18" stroke="#990000" strokeWidth="0.5" />
              <line y1="-0.25" x2="980.867" y2="-0.25" transform="matrix(0.731345 -0.682008 -0.682008 -0.731345 1356.65 540)" stroke="#990000" strokeWidth="0.5" />
              <line y1="-0.25" x2="980.867" y2="-0.25" transform="matrix(0.731354 0.681998 0.681998 -0.731354 1356.64 541.045)" stroke="#990000" strokeWidth="0.5" />
              <line x1="959.823" y1="539.823" x2="1654.18" y2="-154.175" stroke="#990000" strokeWidth="0.5" />
              <line y1="-0.25" x2="981.09" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 959.624 539.626)" stroke="#990000" strokeWidth="0.5" />
              <path d="M959.5 540L406.598 1092.12" stroke="#990000" strokeWidth="0.5" />
              <line x1="959.333" y1="1207.09" x2="959.333" y2="-125.999" stroke="#990000" strokeWidth="0.5" />
              <path d="M1356.75 933.75H565.25V145.749L1356.75 143.25V933.75Z" stroke="#990000" strokeWidth="0.5" />
            </g>
            <defs>
              <clipPath id="clip0_services">
                <rect width="1920" height="1080" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="pictures-services">
          <div className="uiux right1" style={{ clipPath: 'none', top: '15%', right: '15%' }}>
            <img src="https://www.meermohsin.me/assets/SERVICES-1-DNEv9Ogg.avif" alt="Service 1" />
          </div>
          <div className="uiux left1" style={{ clipPath: 'none', top: '20%', left: '15%' }}>
            <img src="https://www.meermohsin.me/assets/SERVICES-2-B2qkzeiI.avif" alt="Service 2" />
          </div>
          <div className="uiux right1" style={{ clipPath: 'none', bottom: '15%', right: '20%' }}>
            <img src="https://www.meermohsin.me/assets/SERVICES-3-D3H0TtUe.avif" alt="Service 3" />
          </div>
          <div className="uiux left1" style={{ clipPath: 'none', bottom: '15%', left: '20%' }}>
            <img src="https://www.meermohsin.me/assets/SERVICES-5-B-pgnAEq.avif" alt="Service 4" />
          </div>
        </div>

        <div className="scroll-downn">
          <div className="services-change-1">
            <div className="word1" style={{ opacity: 1 }}>UI - UX</div>
          </div>
        </div>

        <div className="expertise-wrapper">
          <div className="expertise-set set-1">
            <div className="points">UIUX</div>
            <div className="points">3D Web development</div>
            <div className="points">Problem Solver</div>
            <div className="points">User Research</div>
          </div>

          <div className="expertise-set set-2">
            <div className="points">Frontend Engineering</div>
            <div className="points">Three.js / WebGL</div>
            <div className="points">GSAP Animation</div>
            <div className="points">Performance Optimization</div>
          </div>
        </div>

        <div className="another-fall" style={{ transform: 'none' }}>
          <div className="content-section-fall">
            <div className="heading-fall">
              The fall was always <span className="fonts">part</span> of the path.
            </div>
            <p className="fall-para">
              And from that point, everything began to rebuild with intention.
            </p>
          </div>
          <div className="paper-tear">
            <img src="https://www.meermohsin.me/assets/paper-tore-7VX6INnu.png" alt="Paper Tear" />
          </div>
          <div className="men-fall">
            <img src="https://www.meermohsin.me/assets/falling-BiHYeG99.gif" alt="Falling Men" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
