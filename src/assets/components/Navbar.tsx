import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
          >
            Fahad<span className="text-purple-400">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-slate-800">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
