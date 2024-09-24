import React, { useState } from "react";
import "./Header.css"; // Importing the CSS file

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle link clicks
  const handleLinkClick = () => {
    setActiveDropdown(null); // Close any active dropdown
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  // Function to toggle dropdown menus
  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="header">
       
      <div className="container">
        <div className="logo">sunnyside</div>
        {/* Desktop menu */}
        <nav className="desktop-menu">
          {/* Page 1 */}
          <div className="menu-item">
            <button className="menu-button">About</button>
          </div>

          {/* Page 2 */}
          <div className="menu-item">
            <button className="menu-button">Services</button>
          </div>

          {/* Page 3 */}
          <div className="menu-item">
            <button className="menu-button">Projects</button>
          </div>

         
          <div className="auth-buttons">
            
            <button className="signup-button" onClick={handleLinkClick}>
              CONTACT
            </button>
          </div>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="hamburger">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hamburger-button"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="hamburger-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <a
            href="#page1"
            onClick={() => {
              handleDropdownToggle("page1");
            }}
            className="mobile-menu-item"
          >
            About
          </a>
      
          <a
            href="#page2"
            onClick={() => {
              handleDropdownToggle("page2");
            }}
            className="mobile-menu-item"
          >
            Services
          </a>
          
          <a
            href="#page3"
            onClick={() => {
              handleDropdownToggle("page3");
            }}
            className="mobile-menu-item"
          >
            Projects
          </a>
          <a href="#signup" className="signup-button mobile-menu-item">
            CONTACT
          </a>
        </nav>
      )}
      <div className="hero">
        <div className="textHero">
          <h1 className="titleHero">WE ARE CREATIVES</h1>
          
        </div>
        
      </div>
    </header>
  );
};

export default Header;
