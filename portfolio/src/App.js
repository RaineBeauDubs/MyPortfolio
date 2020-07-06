import React from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pBody">
        <Navigation />
        <Introduction />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
