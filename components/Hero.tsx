"use client";
import Image from "next/image";
import Link from "next/link";
import { useABTest } from "./ABTestProvider";
import { trackEvent } from "./Analytics";

export default function Hero() {
  const variant = useABTest();
  return (
    <section className="relative bg-gradient-to-br from-primary to-accent-alt text-foreground py-24 md:py-32 overflow-hidden">
      {/* Background illustration */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/assets/hero_illustration.jpg" alt="Technology ecosystem" fill priority className="object-cover" />
      </div>
      <div className="relative container mx-auto px-4 md:px-8 flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-snug">
          {variant === 'A' ? 'Empower Your Tech Growth' : 'Scale Faster with YaghanTech'}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">
          YaghanTech partners with SMEs to craft scalable software, AI‑driven automation, and modern web solutions that fuel growth.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent hover:bg-accent-alt transition-colors text-white font-medium py-3 px-8 rounded-md shadow-md" onClick={() => trackEvent('hero', 'cta_click')}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
