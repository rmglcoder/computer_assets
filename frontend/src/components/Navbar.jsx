import React, { useState } from 'react';
// import { HomeIcon, ShoppingCartIcon, UsersIcon, LogoutIcon } from "@heroicons/react/outline";
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
        <MenuIcon className="h-6 w-6 text-gray-500" />
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
            <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
          </button>
          {/* Menu content */}
          <ul>
            <li>
              <a href="/dashboard" className="menu-item">
                <HomeIcon className="icon" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="/inventory" className="menu-item">
                <InventoryIcon className="icon" />
                Inventory
              </a>
            </li>
            <li>
              <a href="/employees" className="menu-item">
                <EmployeesIcon className="icon" />
                Employees
              </a>
            </li>
            <li>
              <a href="#" className="menu-item" onClick={handleSignOut}>
                <LogoutIcon className="icon" />
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
