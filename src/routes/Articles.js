import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TripArticle from '../components/TripArticle';
import TripArticleCards from '../components/TripArticleCards';

function Articles() {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero-about"
        heroPic="https://images.unsplash.com/photo-1504119089809-1d5100a33f27?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHN1bnNldCUyMGNoaWNhZ298ZW58MHwwfDB8fHwy"
        title="Articles"
        btnClass="hide"
      />
      <TripArticle />
      <TripArticleCards />

      <Footer />
    </div>
  );
}

export default Articles;
//https://plus.unsplash.com/premium_photo-1681488267974-2e8438b60d4f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D
//AVION ALB:
//https://images.unsplash.com/photo-1493988577905-2fa4018652be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU4fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D
//FF BUNA:
//https://images.unsplash.com/photo-1532121032426-855c544b816f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDU1fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D
