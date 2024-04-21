import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");



  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );
    console.log("check");

    // Add a delay before starting to observe the elements
    setTimeout(() => {
      const homeElement = document.getElementById("home");
      const aboutElement = document.getElementById("about");
      const servicesElement = document.getElementById("services");
      const portfolioElement = document.getElementById("portfolio");
      const contactElement = document.getElementById("contact");

      if (homeElement) observer.observe(homeElement);
      if (aboutElement) observer.observe(aboutElement);
      if (servicesElement) observer.observe(servicesElement);
      if (portfolioElement) observer.observe(portfolioElement);
      if (contactElement) observer.observe(contactElement);
    }, 1); // Adjust the delay as needed

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
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
      </nav>
    </header>
  );
}

export default Header;
