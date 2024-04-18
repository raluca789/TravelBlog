import './Hero.css';

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
