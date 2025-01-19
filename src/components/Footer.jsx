import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-8">
          <a
            href="mailto:eugeniasalazar745@gmail.com"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 p-2"
            title="Email"
          >
            <Mail size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/eugeniadev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 p-2"
            title="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="tel:+5493816582895"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 p-2"
            title="Phone"
          >
            <Phone size={32} />
          </a>
        </div>
        <div className="text-gray-500 text-sm">
          &copy; 2025 euge.dev
        </div>
      </div>
    </div>
  </footer>
);
