import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Uncharted</h1>
          <p>Explore. Wander. Discover.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-pinterest-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="./">Copyright Information</a>
          <a href="./">Status</a>
          <a href="./">License</a>
          <a href="./">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="./">Membership</a>
          <a href="./">Events</a>
          <a href="./">Content</a>
          <a href="./">Discussion Board</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="./">Terms of Service</a>
          <a href="./">Privacy Policy</a>
          <a href="./">Support</a>
        </div>
        <div className="subscribe">
          <div className="textDiv">
            <h4>Stay Connected</h4>
            <p>Subscribe to our newsletter for the latest travel inspiration</p>

            <div className="email">
              <input type="text" placeholder="Enter your email" />
              <button className="btnsub">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
