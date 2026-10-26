
function Skills() {
  const skills = [
    { name: "HTML", level: "Semantic, accessible structure" },
    { name: "CSS", level: "Responsive layouts and styling" },
    { name: "JavaScript", level: "Interactive web experiences" },
    { name: "React", level: "Reusable component-driven UI" },
    { name: "Git", level: "Version control and collaboration" },
    { name: "Responsive design", level: "Mobile-first development" },
  ];

  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">MY TOOLKIT</p>
        <h1>Skills I bring to the table.</h1>
        <p>
          A growing toolkit for building modern, accessible, and engaging web
          experiences.
        </p>
      </section>
      <section className="section skills-section">
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-item" key={skill.name}>
              <div>
                <h2>{skill.name}</h2>
                <p>{skill.level}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="skills-note">
          I'm always learning and excited to take on new challenges.
        </p>
      </section>
    </main>
  );
}

export default Skills;




   {/* <span className="skill-index">
                {String(skills.indexOf(skill) + 1).padStart(2, "0")}
              </span> */}