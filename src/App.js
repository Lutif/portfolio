import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'
import SocialBar from './components/SocialBar'
import Projects from './components/projects/Projects.js'


function App() {
  return (<div>
    <SocialBar/>
    <Main />
    <Projects />
    <Skills />
    <Contact/>
  </div>
  );
}

export default App;
