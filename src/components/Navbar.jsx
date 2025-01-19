import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const NavLinks = ({ mobile }) => {
  const baseClassName = mobile
    ? "block py-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
    : "text-gray-300 hover:text-orange-400 transition-colors duration-300";

  const handleDownload = () => {
    // The PDF file should be in your public folder
    const pdfUrl = '/Eugenia-Salazar-CV-QA.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Eugenia-Salazar-CV-QA.pdf'; // This will be the downloaded file name

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={mobile ? "space-y-2" : "flex items-center space-x-6"}>
      <a href="#about" className={baseClassName}>Sobre mí</a>
      <a href="#skills" className={baseClassName}>Habilidades</a>
      <a href="#experience" className={baseClassName}>Experiencia</a>
      <a href="#education" className={baseClassName}>Educación</a>
      <button
        onClick={handleDownload}
        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-md hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
      >
        <Download size={18} />
        <span>CV PDF</span>
      </button>
    </div>
  );
};


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="text-xl font-bold">
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
            euge.dev
          </span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300 hover:text-orange-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 border-t border-gray-800">
          <NavLinks mobile />
        </div>
      )}
    </div>
  );
};
