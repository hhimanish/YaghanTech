"use client";
import { Suspense } from 'react';
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/work", label: "Work" },
  { href: "/for-digital-marketers", label: "For Marketers" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-surface shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/logo.svg" alt="YaghanTech" width={48} height={48} className="object-contain" />
          <span className="text-xl font-bold text-primary">YaghanTech</span>
        </Link>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-foreground hover:text-accent transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
          {/* Mobile menu placeholder */}
          <Suspense fallback={null}>
            <LanguageSwitcher />
          </Suspense>
        <button className="md:hidden text-foreground hover:text-accent" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
