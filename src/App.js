import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Projects from './components/projects/Projects.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'
import SocialBar from './components/SocialBar'
import ProjectTable from './components/projects/ProjectTable'

function App() {
  return (<div>
    <SocialBar/>
    <Main />
    <ProjectTable />
    <Skills />
    <Contact/>
  </div>
  );
}

export default App;
