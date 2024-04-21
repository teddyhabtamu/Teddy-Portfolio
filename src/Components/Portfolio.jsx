function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <div className="portfolio-img">
            <img src="images/portfolio1.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Meme Generator Web-App</h4>
              <img src="images/memeGenerator.png" alt="Project 1" className="portfolio-img" />
              <a
                href="https://github.com/teddyhabtamu/Meme-Generator-Web-App"
                target="_blank"
                className="externalLink-container"
              >
                <img
                  className="icon-externalLink"
                  src="icons/external-link.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-img">
            <img src="images/portfolio2.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Tic Tac Toe Web game</h4>
              <img src="images/Tic-Tac-Toe.png" alt="" className="portfolio-img" />
              <a
                href="https://github.com/teddyhabtamu/Prodigy_WD_03"
                className="externalLink-container"
              >
                <img
                  className="icon-externalLink"
                  src="icons/external-link.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-img">
            <img src="images/portfolio3.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>To-Do Web App</h4>
              <img src="images/To-doList.png" alt="" className="portfolio-img" />
              <a
                href="https://www.google.com"
                className="externalLink-container"
              >
                <img
                  className="icon-externalLink"
                  src="icons/external-link.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-img">
            <img src="images/portfolio4.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Digital Clock Web app</h4>
              <img src="images/DigitalClock.png" alt="" className="portfolio-img" />
              <a
                href="https://github.com/teddyhabtamu/Digital-Clock-Using-React"
                className="externalLink-container"
              >
                <img
                  className="icon-externalLink"
                  src="icons/external-link.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-img">
            <img src="images/portfolio5.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Airbnb Website Clone</h4>
              <img className="portfolio-img" src="images/airbnb.png" alt="project-1" />
              <a
                href="https://github.com/teddyhabtamu/AirBnb-Website-Clone"
                className="externalLink-container"
              >
                <img
                  className="icon-externalLink"
                  src="icons/external-link.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-img">
            <img src="images/portfolio6.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Stopwatch Web app</h4>
              <img src="images/Stopwatch.png" alt="" className="portfolio-img" />
              <a
                href="https://github.com/teddyhabtamu/Prodigy_WD_02"
                className="externalLink-container"
              >
                <img
                  className="icon-externalLink"
                  src="icons/external-link.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;