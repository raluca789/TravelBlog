import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TripArticle from '../components/TripArticle';
function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero"
        heroPic="https://rare-gallery.com/uploads/posts/561061-landscape-nature.jpg"
        title="Discover Hidden Gems"
        text="The world is calling—answer it! Whether you crave the serenity of
            nature, the buzz of urban exploration, or the charm of cultural
            discovery, let Uncharted be your guide to unforgettable
            experiences."
        buttonHome="Explore Articles"
        url="/articles"
        btnClass="show"
      />
      <Destination />
      <TripArticle />
      <Footer />
    </div>
  );
}

export default Home;
