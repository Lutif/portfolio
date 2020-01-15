import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Projects from './components/projects/Projects.js'


function App() {
  return (<div>
    <Nav />
    <Main />
    <Projects/>
  </div>
  );
}

export default App;
