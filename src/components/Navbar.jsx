import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const NavLinks = ({ mobile }) => {
  const baseClassName = mobile
    ? "block py-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
    : "text-gray-300 hover:text-orange-400 transition-colors duration-300";

  const handleDownload = () => {
    const pdfUrl = '/Eugenia-Salazar-CV-QA.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Eugenia-Salazar-CV-QA.pdf';
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
        <div className="flex items-center space-x-2">
          {/* Text logo */}
          <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
            euge.dev
          </span>
          {/* Badge */}
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="3e1d11a6-8cc7-4585-8154-0f8e5b34ec06"
            data-share-badge-host="https://www.credly.com"
            className="w-[30px] h-[30px]"
          ></div>
          <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300 hover:text-orange-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 border-t border-gray-800">
          <NavLinks mobile />
        </div>
      )}
    </div>
  );
};
