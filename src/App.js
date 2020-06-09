import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Quote from './Components/Quote/Quote';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Quote />
    </div>
  );
}

export default App;
