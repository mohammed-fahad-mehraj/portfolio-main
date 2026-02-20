import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Fahad Mehraj
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full-Stack Web Developer passionate about building exceptional digital experiences.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
              <p className="text-gray-400 mb-4">
                Available for freelance projects and collaborations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {currentYear} Fahad Mehraj. All Rights Reserved.
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                Built with <Heart className="w-4 h-4 text-pink-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
