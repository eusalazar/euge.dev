import React from 'react';

const Span = ({ label }) => {
  return (
    <span
      className="bg-gray-800 text-orange-400 px-2 py-1 rounded-full text-sm border border-orange-500/20
              hover:border-orange-500/50 transition-colors duration-300 mx-1"
    >
      {label}
    </span>
  );
};

export const About = ({ content }) => (
  <section id="about" className="mb-12">
    <div className="flex items-center justify-center mb-6">
      <h2 className="text-2xl font-bold text-orange-400">
        Perfil Profesional
      </h2>
    </div>
    <div className="bg-gray-900/30 rounded-lg border border-gray-800 p-6">
      <p className="text-gray-300 leading-loose text-base">
        Profesional en Quality Assurance con experiencia en automatización de pruebas utilizando herramientas como{' '}
        <Span label="Selenium" />, <Span label="Cypress" />, <Span label="Playwright" />, y <Span label="Postman" />. 
        Certificada en <Span label="AWS Cloud Computing" />, con conocimientos en integración de flujos de trabajo en la nube
        y fundamentos de computación en la nube. Manejo de desarrollo backend con <Span label="Python/Django" /> y frontend con{' '}
        <Span label="React" />.
      </p>
      <p className="text-gray-300 leading-loose text-base text-center mt-4">
        Cuento con experiencia en bases de datos <Span label="PostgreSQL" />.
      </p>
    </div>
  </section>
);
