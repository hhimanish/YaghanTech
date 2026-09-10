import Link from "next/link";

export default function CTAButton({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-block bg-accent text-white font-medium py-3 px-8 rounded-md hover:bg-accent-alt transition-colors"
    >
      {label}
    </Link>
  );
}
