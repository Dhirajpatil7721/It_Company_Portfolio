import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer id='footer' className="bg-gray-900 text-white py-6 flex flex-col items-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Left Side - Logo */}
        <div className="text-xl font-bold mb-4" id='ftitle'>It Consultancy</div>

        {/* Middle - Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/services" className="hover:text-gray-400">Services</a></li>
          <li><a href="/portfolio" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} It Consultancy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
