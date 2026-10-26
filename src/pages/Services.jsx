import ServicesCard from "../components/ServicesCard";

function Services() {
  const services = [
    {
      title: "Website development",
      description:
        "Responsive websites designed to look and work beautifully across devices.",
      details: [
        "React interfaces",
        "Mobile-friendly layouts",
        "Clean components",
      ],
    },
    {
      title: "Landing pages",
      description:
        "Focused pages that introduce your idea and guide visitors to take action.",
      details: [
        "Clear page structure",
        "Engaging visual design",
        "Call-to-action setup",
      ],
    },
    {
      title: "UI implementation",
      description:
        "Careful implementation of designs with an eye for consistency and detail.",
      details: [
        "Reusable UI elements",
        "Accessible interactions",
        "Polished styling",
      ],
    },
  ];

  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">WHAT I DO</p>
        <h1>Web experiences built with care.</h1>
        <p>
          From the first layout to the finishing touches, I can help bring your
          next web project to life.
        </p>
      </section>
      <section className="section services-section">
        <div className="service-grid">
          {services.map((service) => (
            <ServicesCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;
