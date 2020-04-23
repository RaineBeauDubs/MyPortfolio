import React from 'react';
import { NavLink } from 'react-router-dom';
import './componentCSS/navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink className="navLink" to="/">
        <h3>Introduction</h3>
      </NavLink>
      <NavLink className="navLink" to="/">
        <h3>Experience</h3>
      </NavLink>
      <NavLink className="navLink" to="/">
        <h3>Projects</h3>
      </NavLink>
      <NavLink className="navLink" to="/">
        <h3>Contact</h3>
      </NavLink>
    </div>
  )
}

export default Navigation;