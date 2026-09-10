import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Your Business Challenges, Solved.
        </h2>
        <p className="text-lg md:text-xl text-foreground/80">
          Scaling, automation, and digital transformation can feel overwhelming. At YaghanTech we turn complex problems into clear, premium solutions that fuel growth and keep you ahead of the competition.
        </p>
      </div>
    </section>
  );
}
