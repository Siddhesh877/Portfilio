import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Projects</h2>
        {/* Add your projects here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Project A</h3>
            <p className="text-gray-300">Description of Project A</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Project B</h3>
            <p className="text-gray-300">Description of Project B</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Project C</h3>
            <p className="text-gray-300">Description of Project C</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;