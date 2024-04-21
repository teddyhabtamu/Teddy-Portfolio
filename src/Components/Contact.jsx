function Contact() {

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form action="https://formspree.io/f/xqkrwlav" method="POST">
        <div className="input-box">
          <input type="text" name="Full name" placeholder="Full name" autoComplete="off" required />
          <input type="email" name="Email" autoComplete="off" placeholder="Email Address" required />
        </div>

        <div className="input-box">
          <input type="text" placeholder="Mobile Number" autoComplete="off" name="Phone number" required />
          <input type="text" name="Subject" autoComplete="off"  placeholder="Subject" required />
        </div>
        <textarea
          name="Message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
          autoComplete="off"
        required ></textarea>
        <input type="submit" value="Send Message" autoComplete="off" className="btn" />
      </form>
    </section>
  );
}

export default Contact;