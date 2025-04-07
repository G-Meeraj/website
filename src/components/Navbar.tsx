import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-20">
          {/* Centered Desktop Navigation */}
          <div className="flex space-x-8">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;