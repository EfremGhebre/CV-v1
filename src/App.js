import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import CV from './Components/CV';
import AboutMe from './Components/About';
import Footer from './Components/Footer';
import Kontakt from './Components/Kontakt';
import EasterEgg from './Components/EasterEgg';
import Portfolio from './Components/Projects';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='nav'>
          <Link to="/" className="logo">Efrem</Link>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>Start</NavLink>
            </li>
            <li>
              <NavLink to="/cv" className={({ isActive }) => (isActive ? 'active' : undefined)}>CV</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>Om mig</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" className={({ isActive }) => (isActive ? 'active' : undefined)}>Kontakt</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>Projekt</NavLink>
            </li>
            <li>
              <NavLink to="/litemer" className={({ isActive }) => (isActive ? 'active' : undefined)}>Lite mer</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/litemer" element={<EasterEgg />} />
        </Routes> 
      </div>
      <footer>
      <Footer/>
    </footer>
    </Router>
   
  );
}

export default App;
