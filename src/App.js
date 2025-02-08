import './App.css';
import Home from "./Pagese/HOME/Home.jsx";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import About from "./Pagese/About/About.jsx";
import Service from "./Pagese/Services/Service.jsx";
import Portfolio from "./Pagese/Portfolio/Portfoilo.jsx";
import Contact from "./Pagese/CONTACT/Contact.jsx";
import Nav from "./Pagese/NAV/Nav.jsx";
import Footer from './Pagese/Footer/Footer.jsx';
import ChatBot from './Pagese/CHAT BOT/ChatBpot.jsx';


function App() {
  return (
    <Router>
      <Nav /> 
      <ChatBot/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    // <div className="App">

    //  <Home/>
    // </div>
  );
}

export default App;
