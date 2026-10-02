import React, { useState } from 'react';

const Work = ({ onOpenProject }) => {
  const [activeStep, setActiveStep] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Call of Duty Experience",
      image: "https://www.meermohsin.me/assets/cod-1-BJJ7YGOj.avif",
      tag: "WebGL / 3D Experience",
      desc: "An immersive 3D digital promotional website with cinematic lighting and custom sound effects."
    },
    {
      id: 2,
      title: "Aura Creative Studio",
      image: "https://www.meermohsin.me/assets/az-1-Db8CDHkk.avif",
      tag: "Creative Direction & Brand",
      desc: "Brand identity design, design system, and multi-platform digital experience for high-growth tech startups."
    },
    {
      id: 3,
      title: "Astral Motion",
      image: "https://www.meermohsin.me/assets/am-1-BIjNy7iY.avif",
      tag: "UI/UX & Interactive Design",
      desc: "Pushing boundaries of micro-animations, physics-based UI, and tactile interactions."
    },
    {
      id: 4,
      title: "Chat Sphere AI",
      image: "https://www.meermohsin.me/assets/chat-1-CghAxhtK.avif",
      tag: "Full-Stack AI Application",
      desc: "Next-generation generative AI workspace with real-time multi-modal streaming."
    },
    {
      id: 5,
      title: "FinTech Digital Bank",
      image: "https://www.meermohsin.me/assets/fi-1-BboASce_.avif",
      tag: "Fintech Platform",
      desc: "High-security banking interface with real-time transactions, card management, and analytics."
    }
  ];

  return (
    <>
      <div className="container" id="work" style={{ height: '120vh' }}>
        <div className="time-steps-slider">
          <div className="circle-steps">
            <svg width="80" height="80">
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="white"
                strokeWidth="1"
                fill="none"
                strokeDasharray="219.91"
                strokeDashoffset="100"
              />
            </svg>
            <h1>0{activeStep + 1}</h1>
          </div>
        </div>

        <div className="text-chnage-on-steps" style={{ position: 'absolute', top: '10%' }}>
          <h1>My work</h1>
          <p>Click cards to view case study</p>
        </div>

        {/* Carousel / Steps Display */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: '80%',
          overflowX: 'auto',
          paddingBottom: '2rem',
          cursor: 'pointer'
        }}>
          {projects.map((proj, idx) => (
            <div 
              key={proj.id}
              onClick={() => {
                setActiveStep(idx);
                if (onOpenProject) onOpenProject(proj);
              }}
              style={{
                flex: '0 0 380px',
                height: '420px',
                background: '#1a1a1a',
                border: activeStep === idx ? '1px solid #990000' : '1px solid #333',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <img 
                src={proj.image} 
                alt={proj.title} 
                style={{ width: '100%', height: '70%', objectFit: 'cover' }} 
              />
              <div style={{ padding: '1.2rem', color: '#fff' }}>
                <span style={{ fontSize: '0.9rem', color: '#990000', textTransform: 'uppercase' }}>{proj.tag}</span>
                <h3 style={{ fontSize: '1.4rem', marginTop: '0.4rem', fontFamily: 'regular-font' }}>{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="step-of-work">
        <div className="boxes-for-step">
          <div className="box-step-main">
            <h1>Discovery</h1>
            <p>Every great story begins with understanding. I explore your vision, audience, and goals to uncover the foundation for an experience that feels authentic and unforgettable.</p>
          </div>
          <div className="box-step-main">
            <h1>Creative Direction</h1>
            <p>Ideas take shape through thoughtful research, wireframes, visual exploration, motion concepts, and design systems. Every decision is intentional, ensuring the experience is both visually compelling and purpose-driven.</p>
          </div>
          <div className="box-step-main moving-out">
            <h1>Digital Craftsmanship</h1>
            <p>With strategy and design in place, I transform concepts into immersive digital experiences. Every interaction, animation, and line of code is crafted for performance, accessibility, and lasting impact.</p>
          </div>
          <div className="box-step-main">
            <h1>Launch & Evolution</h1>
            <p>A successful launch is only the beginning. I monitor performance, refine the experience, and continuously evolve the product to keep it relevant, engaging, and aligned with your business goals.</p>
          </div>
        </div>

        <div className="para-for-stepss">
          Every project is approached with intention, not assumptions. Through strategy, design, and development, each stage is carefully crafted to create digital experiences that are visually striking, technically refined, and built to leave a lasting impression.
        </div>

        <img 
          src="https://www.meermohsin.me/assets/mohsin-standing-CVnvgAtQ.avif" 
          alt="Step Background" 
          loading="lazy" 
          decoding="async" 
        />

        <div className="heading-of-step-work">
          <h1>
            From the First Idea to the Final Frame Every Step Is Crafted to Create an Unforgettable
            <span className="fancy"> Digital Experience.</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Work;
