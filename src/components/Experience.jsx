import React from 'react';

export const Experience = ({ experiences }) => (
  <section id="experience" className="mb-12">
    <div className="flex items-center justify-center mb-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text py-1 px-4 border-2 border-blue-600/20 rounded-lg inline-block backdrop-blur-sm bg-gray-900/30">
        Experiencia
      </h2>
    </div>
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500/50 to-pink-500/50 transform -translate-x-1/2"></div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className={`relative flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline dot with pulse effect */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full z-10" />
              <div className="absolute w-8 h-8 bg-orange-500/20 rounded-full animate-ping" />
            </div>

            {/* Content */}
            <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
              <div className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300
                            backdrop-blur-sm shadow-lg hover:shadow-orange-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <h3 className="text-xl font-semibold text-orange-400">{exp.company}</h3>
                <p className="text-gray-300 font-medium">{exp.position}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-300 relative z-10">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
