import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-12 bg-surface min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">Get in Touch</h1>
        <ContactForm />
      </div>
    </section>
  );
}
