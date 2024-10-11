import React from 'react';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git', 'Responsive Design', 'UI/UX'];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;