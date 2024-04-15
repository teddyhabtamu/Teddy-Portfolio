function Home(){

  return (
    <section class="home" id="home">
      <div class="home-content">
        <h3>Hello It's me</h3>
        <h1>Tewodros Habtamu</h1>
        <h3>
          And I'm a <span class="multiple-text">Frontend developer</span>
        </h3>
        <p>
          My expertise lies in transforming design concepts into interactive web
          applications that leave a lasting impression. I believe in the power
          of aesthetics and usability to enhance the way users interact with
          technology.
        </p>
        <a href=""></a>

        <div class="social-media">
          <a href="">
            <img src="icons/facebook.png" alt="facebook-icon" />
          </a>
          <a href="">
            <img src="icons/twitter.png" alt="twitter-icon" />
          </a>
          <a href="">
            <img src="icons/instagram.png" alt="instagram-icon" />
          </a>
          <a href="">
            <img src="icons/linkedin.png" alt="linkedin-icon" />
          </a>
        </div>
        <a
          href="https://drive.google.com/uc?exoprt=download&id=1gEL5lhnlw9Yd7Nel_8hwsv8nuIcZ-DHK"
          target="_blank"
          class="btn"
        >
          Download CV
        </a>
      </div>
      <div class="home-img">
        <img src="images/home2.png" alt="" />
      </div>
    </section>
  );
}

export default Home;