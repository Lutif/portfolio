import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Projects from './components/projects/Projects.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'
function App() {
  return (<div>
    <Nav />
    <Main />
    <Projects />
    <Skills />
    <Contact/>
  </div>
  );
}

export default App;
