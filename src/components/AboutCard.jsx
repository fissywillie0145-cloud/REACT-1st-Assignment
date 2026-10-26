
function AboutCard({ title, description, icon }) {
  return (
    <article className="about-card">
      <span className="about-card-icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
  
}

export default AboutCard;