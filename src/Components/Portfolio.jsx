function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Meme Generator Web-App",
      image: "images/memeGenerator.png",
      link: "https://github.com/teddyhabtamu/Meme-Generator-Web-App",
    },
    {
      id: 2,
      title: "Tic Tac Toe Web Game",
      image: "images/Tic-Tac-Toe.png",
      link: "https://github.com/teddyhabtamu/Prodigy_WD_03",
    },
    {
      id: 3,
      title: "To-Do Web App",
      image: "images/To-doList.png",
      link: "https://www.google.com",
    },
    {
      id: 4,
      title: "Digital Clock Web App",
      image: "images/DigitalClock.png",
      link: "https://github.com/teddyhabtamu/Digital-Clock-Using-React",
    },
    {
      id: 5,
      title: "Airbnb Website Clone",
      image: "images/airbnb.png",
      link: "https://github.com/teddyhabtamu/AirBnb-Website-Clone",
    },
    {
      id: 6,
      title: "Stopwatch Web App",
      image: "images/Stopwatch.png",
      link: "https://github.com/teddyhabtamu/Prodigy_WD_02",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-container">
        {projects.map((project) => (
          <div className="portfolio-box" key={project.id}>
            <div className="portfolio-img">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="externalLink-container"
                >
                  <img
                    className="icon-externalLink"
                    src="icons/external-link.png"
                    alt="External Link"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
