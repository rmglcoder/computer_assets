import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import { ArrowLeftIcon } from '@heroicons/react/outline'; 

import '../css/Navbar.css';

function Navbar() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Side menu icon */}
      <div className="menu-icon" onClick={toggleSideMenu}>
        <MenuIcon className="h-6 w-6" /> 
      </div>
      {/* Search bar (on the right side) */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
      {/* Side menu */}
      {isSideMenuOpen && (
        <div className="side-menu">
          {/* Back button to close side menu */}
          <button onClick={toggleSideMenu} className="back-button">
            <ArrowLeftIcon />
          </button>
          {/* Other content for the side menu */}
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
