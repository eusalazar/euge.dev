import React from 'react';

export const Education = ({ items }) => (
  <section id="education" className="mb-12">
    <div className="flex items-center justify-center mb-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text py-1 px-4 border-2 border-blue-600/20 rounded-lg inline-block backdrop-blur-sm bg-gray-900/30">
      Educación & Certificaciones
      </h2>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((edu, index) => (
        <div
          key={index}
          className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300
                     backdrop-blur-sm shadow-lg hover:shadow-orange-500/10 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-pink-500/10 blur-2xl transform translate-x-full translate-y-full group-hover:translate-x-1/2 group-hover:-translate-y-1/2 transition-transform duration-700" />

          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">{edu.title}</h3>
            {edu.description && <p className="text-gray-300 mb-4">{edu.description}</p>}
            {edu.certifications && (
              <div className="mt-4">
                <p className="font-medium text-gray-300 mb-2">Certificaciones:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.certifications.map((cert, certIndex) => (
                    <span
                      key={certIndex}
                      className="bg-gray-800 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/20
                               hover:border-orange-500/50 transition-colors duration-300"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
