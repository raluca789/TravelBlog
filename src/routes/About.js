import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About() {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero-about"
        heroPic="https://www.civitatis.com/f/zonas/lago-de-como/lago-de-como.jpg"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
