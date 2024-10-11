import React, { useState, useEffect }  from 'react'
import Terminal from './components/terminal'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Assume each scroll is about 100px and we want the terminal to disappear after 2-3 scrolls
  const scrollThreshold = 500; // Adjust this value to fine-tune when the terminal disappears
  const terminalOpacity = Math.max(0, 1 - scrollPosition / scrollThreshold);
  const navbarOpacity = Math.min(1, scrollPosition / (scrollThreshold*0.5));
  const terminalZIndex = terminalOpacity > 0 ? 0 : -1;
  // const aboutOpacity = Math.min(1, scrollPosition / scrollThreshold);

  return (
    <div className="bg-background text-white min-h-screen">
      <div style={{
            zIndex: terminalZIndex,
          }} className="relative h-screen">
        <Terminal opacity={terminalOpacity} />
      </div>
      
      {/* <div id="about" className="transition-opacity duration-300 z-20"> */}
        <About />
      {/* </div> */}
      <Navbar opacity={navbarOpacity} />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
