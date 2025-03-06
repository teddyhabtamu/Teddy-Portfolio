function Footer() {
  const currentYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; {currentYear} by Tewodros Habtamu | All Rights Rreserved </p>
        </div>
        <div className="footer-icon-top">
          <a href="#home">
            <img src="icons/up-arrow.png" alt="" />
          </a>
        </div>
      </footer>
    );
}

export default Footer;