import React, { useEffect, useRef } from 'react';
import '../HOME/Home.css';
import Nav from '../NAV/Nav';
import bg from '../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg';
import Typed from 'typed.js';
import About from '../About/About';
import Service from '../Services/Service';
import Portfoilo from '../Portfolio/Portfoilo';
import Contact from '../CONTACT/Contact';
import Footer from '../Footer/Footer';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Scroll page', 'Join with Us'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
    {/* <Nav/> */}
      {/* Hero Section */}
      <div
        id="home"
        className="relative flex items-center justify-center text-white text-center h-screen bg-cover bg-center p-4 md:p-8 lg:p-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50 "></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h1 id='wel' className="text-2xl md:text-4xl lg:text-6xl font-bold">Welcome To Our Company</h1>
          <h2 id='type' ref={typedElement} className="text-lg md:text-2xl lg:text-4xl mt-2"></h2>
        </div>
      </div>

      {/* About Section */}
      <About />
      <Service />
      <Portfoilo />
      <Contact/>
    </div>
  );
}

export default Home;
