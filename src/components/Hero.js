import './hero.css';

function Hero(props) {
  return (
    <div>
      <div className={props.className}>
        <img alt="hero_img" src={props.heroPic} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonHome}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// src =
//   'https://images.unsplash.com/photo-1527605158555-853f200063e9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D';
//https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTA0fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D

//https://rare-gallery.com/uploads/posts/561061-landscape-nature.jpg
//Discover Hidden Gems

//  The world is calling—answer it! Whether you crave the serenity of
//             nature, the buzz of urban exploration, or the charm of cultural
//             discovery, let Wanderlust be your guide to unforgettable
//             experiences.
