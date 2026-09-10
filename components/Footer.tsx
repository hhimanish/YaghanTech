import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { title: "Solutions", links: [
    { href: "/solutions#digital-transformation", label: "Digital Transformation" },
    { href: "/solutions#ai-automation", label: "AI & Automation" },
    { href: "/solutions#ecommerce", label: "E‑Commerce" },
  ]},
  { title: "Company", links: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]},
  { title: "Resources", links: [
    { href: "/insights", label: "Insights" },
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case Studies" },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-surface text-foreground py-12 border-t border-muted">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo & tagline */}
        <div className="flex flex-col space-y-4">
          <Image src="/assets/logo.svg" alt="YaghanTech" width={120} height={48} className="object-contain" />
          <p className="text-sm text-muted">
            Premium technology partner turning ideas into scalable digital experiences.
          </p>
          {/* Social icons placeholder */}
          <div className="flex space-x-4 text-foreground">
            <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              {/* Simple SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.5c0-1.31-.02-3-1.84-3-1.84 0-2.12 1.44-2.12 2.92v5.58h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.6z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.918 4.918 0 0 0-8.384 4.482c-4.083-.205-7.702-2.162-10.124-5.138a4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.214 2.188 4.099a4.904 4.904 0 0 1-2.228-.616c-.054 2.383 1.68 4.617 4.149 5.108a4.935 4.935 0 0 1-2.224.084c.631 1.953 2.445 3.376 4.6 3.416a9.867 9.867 0 0 1-6.102 2.104c-.395 0-.788-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.01-7.512 14.01-14.025 0-.213-.005-.425-.014-.637a10.025 10.025 0 0 0 2.457-2.548z"/></svg>
            </a>
          </div>
        </div>
        {/* Links columns */}
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col space-y-2">
            <h4 className="font-semibold text-primary">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-muted pt-4 text-center text-sm text-muted">
        © {new Date().getFullYear()} YaghanTech. All rights reserved.
      </div>
    </footer>
  );
}
