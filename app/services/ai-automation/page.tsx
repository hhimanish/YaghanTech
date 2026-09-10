import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation – YaghanTech",
  description: "Premium AI and automation services that streamline operations for SMEs.",
};

export default function AIService() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-4">AI & Automation</h1>
        <p className="text-lg text-foreground/80">
          Leverage artificial intelligence to automate repetitive tasks, gain insights, and unlock new revenue streams. Our solutions are tailored to your business needs and scale as you grow.
        </p>
        <ul className="mt-8 list-disc list-inside space-y-2 text-foreground/70">
          <li>Intelligent workflow orchestration</li>
          <li>Predictive analytics & reporting</li>
          <li>Custom AI model development</li>
          <li>Integration with existing systems</li>
        </ul>
      </div>
    </section>
  );
}
