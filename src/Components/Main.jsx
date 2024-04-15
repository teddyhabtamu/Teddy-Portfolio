import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import "./style.css"
function Main(){

  return(
    <html>
      <body>
        <Header />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </body>
    </html>
  )
}

export default Main;