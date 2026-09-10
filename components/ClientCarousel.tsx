import Image from "next/image";

export default function ClientCarousel() {
  const clientLogos = [
    "/assets/clients/client1.jpg",
    "/assets/clients/client2.jpg",
    // Add more client logo paths here as needed
  ];

  return (
    <section className="py-12 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-2xl font-semibold text-primary text-center mb-6">
          Trusted by Leading Brands
        </h3>
        <div className="flex gap-8 overflow-x-auto py-4 px-2">
          {clientLogos.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-40 h-20">
              <Image src={src} alt={`Client ${idx + 1}`} width={160} height={80} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
