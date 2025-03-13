import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header with Developer's Name and Navigation Links */}
        <header className="App-header">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a new and passionate developer. Here's a little about myself:</p>
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink 
                  to="/about" 
                  activeClassName="active-link" 
                  exact
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  activeClassName="active-link"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/skills" 
                  activeClassName="active-link"
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  activeClassName="active-link"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* Switch to handle different routes */}
        <Routes>
          {/* About Me Section */}
          <Route path="/about" element={
            <section id="about" className="section">
              <h2>About Me</h2>
              <img src="/images/FB_IMG_1741559114070.jpg" alt="Avatar" className="avatar" />
              <p>
                I am new to software development and plan to grow as I go throughout my time. I have worked with and have some experience in building web applications using technologies like React, Node.js, and MongoDB.
              </p>
            </section>
          } />

          {/* Portfolio Section */}
          <Route path="/projects" element={
            <section id="projects" className="section">
              <h2>My Projects</h2>
              <ul>
                <li><strong>Wicked WX:</strong> A weather app that allows you to track current weather in your area.</li>
                <li><strong>Engine-Base:</strong> An app designed for car enthusiasts, allowing you to research the car of your dreams.</li>
                <li><strong>Hire-Me-Please:</strong> An app that caters to the tech-savvy person looking for tech industry jobs!</li>
              </ul>
            </section>
          } />

          {/* Skills Section */}
          <Route path="/skills" element={
            <section id="skills" className="section">
              <h2>Skills</h2>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>JavaScript</li>
              </ul>
            </section>
          } />

          {/* Contact Section */}
          <Route path="/contact" element={
            <section id="contact" className="section">
              <h2>Contact</h2>
              <p>Feel free to reach out to me at <a href="mailto:matt.franklin1990.mf@gmail.com">matt.franklin1990.mf@gmail.com</a></p>
            </section>
          } />

          {/* Default Route to About Me */}
          <Route path="/" element={
            <section id="about" className="section">
              <h2>About Me</h2>
              <p>
                I am new to software development and plan to grow as I go throughout my time. I have worked with and have some experience in building web applications using technologies like React, Node.js, and MongoDB.
              </p>
            </section>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
