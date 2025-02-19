import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <span>Te</span>ddy.
      </a>
      <img
        id="menu-icon"
        src="icons/menu.png"
        alt="menu-icon"
        onClick={toggleMenu}
      />
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" className={activePage === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activePage === "about" ? "active" : ""}>
          About
        </a>
        <a
          href="#services"
          className={activePage === "services" ? "active" : ""}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={activePage === "portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a href="#contact" className={activePage === "contact" ? "active" : ""}>
          Contact
        </a>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
