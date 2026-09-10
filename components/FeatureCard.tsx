import Image from "next/image";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCard({ iconSrc, title, description, href }: FeatureCardProps) {
  return (
    <a href={href} className="block p-6 bg-surface rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-muted">
      <div className="flex flex-col items-center text-center space-y-4">
        <Image src={iconSrc} alt={title + " icon"} width={64} height={64} className="object-contain" />
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </a>
  );
}
