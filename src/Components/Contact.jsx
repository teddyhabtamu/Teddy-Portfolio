function Contact() {

  return (
    <section class="contact" id="contact">
      <h2 class="heading">Contact <span>Me!</span></h2>
    <form action="#">
      <div class="input-box">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email Address" />
      </div>

      <div class="input-box">
        <input type="text" placeholder="Mobile Number" />
        <input type="text" placeholder="Subject" />
      </div>
      <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
      <input type="submit" value="Send Message" class="btn" />

    </form>
    </section>

  )
}

export default Contact;