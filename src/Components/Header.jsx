function Header(){

  return (
    <header class="header">
      <a href="#" class="logo">
        <span>Te</span>ddy.
      </a>
      <i class="fa-solid fa-bars" id="menu-icon"></i>
      <nav class="navbar">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;