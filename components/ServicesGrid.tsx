import FeatureCard from "../components/FeatureCard";

export default function ServicesGrid() {
  const services = [
    {
      href: "/services/ai-automation",
      title: "AI & Automation",
      description: "Intelligent workflows that scale your operations.",
      iconSrc: "/assets/icons/icon_ai_automation.jpg",
    },
    {
      href: "/services/digital-transformation",
      title: "Digital Transformation",
      description: "Future‑proof your business with modern tech stacks.",
      iconSrc: "/assets/icons/icon_digital_transformation.jpg",
    },
    {
      href: "/services/e-commerce",
      title: "E‑Commerce",
      description: "Robust online stores that convert visitors into customers.",
      iconSrc: "/assets/icons/icon_ecommerce.jpg",
    },
  ];

  return (
    <section className="py-20 bg-muted text-foreground">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <FeatureCard
              key={s.title}
              href={s.href}
              title={s.title}
              description={s.description}
              iconSrc={s.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
