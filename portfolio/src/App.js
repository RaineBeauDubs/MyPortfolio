import React from 'react';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Welcome to my portfolio!</h1>
      <Contact />
    </div>
  );
}

export default App;
