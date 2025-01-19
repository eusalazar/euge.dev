import React from 'react';

export const Skills = ({ skills }) => (
  <section id="skills" className="mb-12">
    <div className="flex items-center justify-center mb-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text py-1 px-4 border-2 border-blue-600/20 rounded-lg inline-block backdrop-blur-sm bg-gray-900/30">
        Habilidades
      </h2>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300
                     backdrop-blur-sm shadow-lg hover:shadow-orange-500/10 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-pink-500/10 blur-2xl transform translate-x-full translate-y-full group-hover:translate-x-1/2 group-hover:-translate-y-1/2 transition-transform duration-700" />

          {/* Content */}
          <p className="text-gray-300 relative z-10 group-hover:text-white transition-colors duration-300">
            {skill}
          </p>
        </div>
      ))}
    </div>
  </section>
);
