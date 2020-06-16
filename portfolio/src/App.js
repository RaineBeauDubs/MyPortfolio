import React from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pBody">
        <Navigation />
        <Introduction />
        <Contact />
      </div>
    </div>
  );
}

export default App;
