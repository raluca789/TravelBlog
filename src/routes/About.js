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

//https://images.unsplash.com/photo-1520178606913-118a6b3c31b1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//https://images.unsplash.com/photo-1558985040-ed4d5029dd50?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

//BUNA:

//https://media.audleytravel.com/-/media/images/home/europe/italy/excursions/grand-canal-venice-gettyimages-1014259478-1000x3000.jpg?q=79&w=1920&h=640
