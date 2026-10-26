
import AboutSection from "../components/AboutSection";

function About() {
  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">ABOUT ME</p>
        <h1>Making the web a little more human.</h1>
        <p>
          I'm Fissyie, a frontend developer who loves turning thoughtful ideas
          into friendly, functional websites.
        </p>
      </section>
      <AboutSection />
      <section className="story-section">
        <div>
          <p className="eyebrow">MY APPROACH</p>
          <h2>Good work starts with listening.</h2>
        </div>
        <p>
          I believe the best digital experiences balance creativity with
          clarity. I take time to understand the people a project is for, keep
          the details accessible, and build with care from the first sketch to
          the final interaction.
        </p>
      </section>
    </main>
  );
}

export default About;