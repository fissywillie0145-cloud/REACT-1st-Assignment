
function ServicesCard({ number, title, description, details }) {
  return (
    <article className="service-card">
      <span className="service-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </article>
  );
}

export default ServicesCard;