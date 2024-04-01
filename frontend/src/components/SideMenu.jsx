import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function SideMenu({ isOpen }) {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
}

export default SideMenu;