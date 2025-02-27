function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Brainwave AI Chatting",
      image: "images/brainwave.png",
      link: "https://brainwave-six-gamma.vercel.app/",
    },
    {
      id: 2,
      title: "Nike Branding",
      image: "images/nike.png",
      link: "https://nike-shoes-steel.vercel.app/",
    },
    {
      id: 3,
      title: "Fana Digital Library",
      image: "images/fana.png",
      link: "https://fana-digital-library-ojng.vercel.app",
    },
    {
      id: 4,
      title: "PeakPulse Fitness Tracker",
      image: "images/peakpulse.png",
      link: "https://github.com/teddyhabtamu/PeakPulse-Fitness-Tracker-",
    },
    {
      id: 5,
      title: "Meme Generator",
      image: "images/meme.png",
      link: "https://meme-generator-web-app-phi.vercel.app/",
    },
    {
      id: 6,
      title: "Working Day Organizer",
      image: "images/todo.png",
      link: "https://github.com/teddyhabtamu/To-do-List-Web-Application",
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
            <a href={project.link} target="_blank">
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
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
