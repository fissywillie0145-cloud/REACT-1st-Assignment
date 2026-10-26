
import { Link } from "react-router";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">HELLO, I'M FISSYIE</p>
        <h1>
          I build thoughtful
          <br />
          <span>digital experiences.</span>
        </h1>
        <p className="hero-description">
          I'm a frontend developer creating clear, accessible, and engaging
          experiences for the web.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/services">
            Explore my services
          </Link>
          <Link className="button button-secondary" to="/about">
            Get to know me
          </Link>
        </div>
      </div>
      <div className="hero-art" >
       
      </div>
    </section>
  );
}

export default Hero;