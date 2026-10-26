
import { Link } from "react-router";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <section className="home-cta">
        <div>
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's make something great together.</h2>
        </div>
        <Link className="button button-light" to="/services">
          See how I can help
        </Link>
      </section>
    </main>
  );
}

export default Home;