function Home(){

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello It's me</h3>
        <h1>Tewodros Habtamu</h1>
        <h3>
          And I'm a <span className="multiple-text">Frontend developer</span>
        </h3>
        <p>
          My expertise lies in transforming design concepts into interactive web
          applications that leave a lasting impression. I believe in the power
          of aesthetics and usability to enhance the way users interact with
          technology.
        </p>
        <a href=""></a>

        <div className="social-media">
          <a href="https://github.com/teddyhabtamu" target="_blank">
            <img src="icons/github.png" alt="github-icon" />
          </a>
          <a href="https://twitter.com/TewodrosHa2669" target="_blank">
            <img src="icons/twitter.png" alt="twitter-icon" />
          </a>
          <a href="https://leetcode.com/teddy321/" target="_blank">
            <img src="icons/leetcode.png" alt="leetCode-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/tewodroshabtamu/"
            target="_blank"
          >
            <img src="icons/linkedin.png" alt="linkedin-icon" />
          </a>
        </div>
        <a
          href="https://drive.google.com/uc?exoprt=download&id=1gEL5lhnlw9Yd7Nel_8hwsv8nuIcZ-DHK"
          target="_blank"
          className="btn"
        >
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src="images/home2.png" alt="" />
      </div>
    </section>
  );
}

export default Home;