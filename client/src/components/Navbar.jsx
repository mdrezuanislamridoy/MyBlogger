import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 ">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <Link to="/">Blogger</Link>
        </div>

        {/* Menu for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/profile"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Profile
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/blog"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
