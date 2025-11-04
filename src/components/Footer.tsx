import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  copyright: string;
  tagline: string;
  links: FooterLink[];
}

export default function Footer({ copyright, tagline, links }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              Calafold
            </h3>
            <p className="text-gray-400 text-sm">
              {tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col space-y-2 items-center md:items-end">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {copyright}</p>
        </div>
      </div>
    </footer>
  );
}
