
import AboutCard from "./AboutCard";

function AboutSection() {
  const strengths = [
    {
      icon: "</>",
      title: "Frontend development",
      description:
        "I turn ideas into responsive, polished interfaces with maintainable code.",
    },
    {
      icon: "✳",
      title: "Thoughtful design",
      description:
        "I care about the details that make digital products feel clear and easy to use.",
    },
    {
      icon: "↗",
      title: "Always learning",
      description:
        "I keep exploring new tools and techniques to make every project a little better.",
    },
  ];

  return (
    <section className="section about-section">
      <div className="section-heading">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>Curious by nature. Creative by choice.</h2>
        <p>
          I enjoy bringing people and technology together to make websites that
          are useful, welcoming, and a pleasure to explore.
        </p>
      </div>
      <div className="about-cards">
        {strengths.map((strength) => (
          <AboutCard key={strength.title} {...strength} />
        ))}
      </div>
    </section>
  );
}

export default AboutSection;