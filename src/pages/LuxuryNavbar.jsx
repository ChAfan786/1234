import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCrown, FaHome, FaInfoCircle, FaBriefcase, FaPhoneAlt } from 'react-icons/fa';
import { FaServicestack } from 'react-icons/fa6';

const LuxuryNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHome className="mr-2" /> },
    { to: '/about', label: 'About', icon: <FaInfoCircle className="mr-2" /> },
    { to: '/projects', label: 'Portfolio', icon: <FaBriefcase className="mr-2" /> },
    { to: '/services', label: 'Services', icon: <FaServicestack className="mr-2" /> },
    { to: '/contact', label: 'Contact', icon: <FaPhoneAlt className="mr-2" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-2 shadow-xl' : 'bg-black py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaCrown className="text-amber-400 text-2xl animate-pulse" />
            <span className="text-white font-serif text-2xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="flex items-center text-white hover:text-amber-300 transition-colors duration-300 font-medium text-sm uppercase tracking-wider group relative py-2"
              >
                {link.icon}
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-300 focus:outline-none p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 z-40 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ backdropFilter: 'blur(5px)' }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <FaCrown className="text-amber-400 text-2xl animate-pulse" />
              <span className="text-white font-serif text-2xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-300 p-2 transition-colors duration-200"
              aria-label="Close menu"
            >
              <FiX className="text-2xl" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="flex items-center py-3 px-4 text-white hover:text-amber-300 text-lg font-medium uppercase tracking-wider transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LuxuryNavbar;