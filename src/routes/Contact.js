import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero-about"
        heroPic="https://images.unsplash.com/photo-1536009190979-329b94ad4d57?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
