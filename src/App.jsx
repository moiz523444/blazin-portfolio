import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Blog from './components/Blog';
import Recognitions from './components/Recognitions';
import Footer from './components/Footer';
import Modals from './components/Modals';

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="body-container-of-site">
      <CustomCursor />
      
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      <Navigation 
        onOpenContact={() => setIsContactOpen(true)}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      <main>
        <Hero />
        <About />
        <Services />
        <Work onOpenProject={(proj) => setSelectedProject(proj)} />
        <Blog />
        <Recognitions />
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Modals 
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
        isMenuOpen={isMenuOpen}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
    </div>
  );
}

export default App;
