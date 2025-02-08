import React, { useState } from 'react';
import '../NAV/Nav.css';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div id='name' className="text-white text-2xl font-bold">It Consultancy</div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a id='a' href="/" className="text-white hover:text-gray-200">Home</a></li>
          <li><a id='a' href="/about" className="text-white hover:text-gray-200">About Us</a></li>
          <li><a id='a' href="/services" className="text-white hover:text-gray-200">Services</a></li>
          <li><a id='a' href="/portfolio" className="text-white hover:text-gray-200">Portfolio</a></li>
          <li><a id='a' href="/contact" className="text-white hover:text-gray-200">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu (Sliding Animation) */}
      <ul className={`md:hidden flex flex-col  p-4 space-y-2 rounded-md transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <li><a href="/" className="text-white hover:text-gray-300 block">Home</a></li>
        <li><a href="/about" className="text-white hover:text-gray-300 block">About Us</a></li>
        <li><a href="/services" className="text-white hover:text-gray-300 block">Services</a></li>
        <li><a href="/portfolio" className="text-white hover:text-gray-300 block">Portfolio</a></li>
        <li><a href="/contact" className="text-white hover:text-gray-300 block">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
