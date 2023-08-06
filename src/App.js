// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './App.css';
import Home from './components/HomePage';
import Services from './components/ServicesPage';
import HappyClients from './components/HappyClientsPage';
import Blog from './components/BlogPage';
import About from './components/AboutPage';
import Contact from './components/ContactPage';

// Components for different pages
const Portfolio = () => <div className="container">Portfolio Page</div>;
const Subscribe = () => <div className="container">Subscribe Page</div>;
const Search = () => <div className="container">Search Page</div>;

const servicesList = [
  "Domain Registration",
  "Website Design",
  "Website Hosting",
  "Corporate Email Solutions",
  "SSL Certificates",
  "Social Media Marketing",
  "Google and Youtube Ads",
  "Mass Mailing",
  "Online Back Up",
  "Graphic Design",
  "Computer Support and Maintenance",
];

const ServicesTooltip = () => (
  <Tooltip id="services-tooltip">
    {servicesList.map((service) => (
      <div key={service}>{service}</div>
    ))}
  </Tooltip>
);

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Glowbox</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
              <OverlayTrigger
                placement="right"
                overlay={<ServicesTooltip />}
                trigger={['hover', 'focus']} // Tooltip will appear on hover and focus
              >
                <NavLink to="/services" className="nav-link">
                  Services 🔽
                </NavLink>
              </OverlayTrigger>
              <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
              <NavLink to="/happy-clients" className="nav-link">Happy Clients</NavLink>
              <NavLink to="/blog" className="nav-link">Blog</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
              <NavLink to="/subscribe" className="nav-link">Subscribe</NavLink>
              <NavLink to="/search" className="nav-link">🔍</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/happy-clients" element={<HappyClients />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <footer>
          <div className="container">
            © {new Date().getFullYear()} Glowbox - All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
