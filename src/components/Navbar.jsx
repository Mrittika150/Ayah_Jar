import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.png';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-6">
              {/* You can replace this with <img src="/icons/logo.png" /> */}
              <img src={logo} alt="Logo" />
                <path d="M12 3L4 9V21H20V9L12 3M12 5.7L18 10.1V19H6V10.1L12 5.7Z"/>
            </div>
            <span className="text-2xl font-bold text-primary">Ayah Jar</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/jar" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              The Jar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;