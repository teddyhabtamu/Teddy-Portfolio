function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="fa-solid fa-code"></i>
          <h3>Web Design</h3>
          <p>
            Our web design service focuses on creating visually appealing and
            user-friendly websites tailored to your brand's identity and target
            audience. From concept to execution, we prioritize clean layouts,
            intuitive navigation, and responsive design to ensure an engaging
            user experience across all devices.
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i className="fa-solid fa-database"></i>
          <h3>Web development</h3>
          <p>
            With our web development expertise, we bring your digital vision to
            life, crafting custom solutions that meet your specific requirements
            and business goals. Utilizing the latest technologies and best
            practices, we deliver robust, scalable, and secure web applications
            that drive results and adapt to your evolving needs.
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="fa-brands fa-python"></i>
          <h3>AI Topics</h3>
          <p>
            Explore the exciting world of artificial intelligence with our AI
            topics service, where we delve into cutting-edge advancements and
            practical applications of machine learning, natural language
            processing, and computer vision. From introductory overviews to
            in-depth discussions, we offer insights and resources to help you
            harness the power of AI for innovation and growth.
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
export default Services;