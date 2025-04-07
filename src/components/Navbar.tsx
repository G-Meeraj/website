import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo or Brand Name (optional) */}
          <div className="text-white font-bold text-xl">
            <Link to="/">GMA</Link>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  location.pathname === path
                    ? 'text-white font-semibold'
                    : 'text-gray-400 hover:text-white'
                } transition duration-300`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - visible only on mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - conditionally rendered */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-gray-900 rounded-b-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navigationItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${
                    location.pathname === path
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-white'
                  } transition duration-300 py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
