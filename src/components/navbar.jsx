import React from 'react';

const Navbar = ({ opacity }) => {
    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          });
        }
      };
  return (
    <nav 
      className="fixed top-0 left-0 right-0 bg-gray-800 transition-opacity duration-300 shadow-xl backdrop-blur-lg"
      style={{ opacity }}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center z-10">
        <a className="font-bold text-xl text-teal-400" href="#">SP</a>
        <div className="flex space-x-4">
          <button className="text-gray-300 hover:text-white" onClick={() => handleScrollTo('about')}>About</button>
          <button className="text-gray-300 hover:text-white" onClick={() => handleScrollTo('projects')}>Projects</button>
          <button className="text-gray-300 hover:text-white" onClick={() => handleScrollTo('skills')}>Skills</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;