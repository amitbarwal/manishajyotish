"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Determine if the header should have a solid background
  const isHomePage = pathname === "/";
  const isSolid = isScrolled || isMobileMenuOpen || !isHomePage;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isSolid
          ? "bg-parchment/95 backdrop-blur-md border-b border-gold/40 py-3 shadow-md"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full border-2 border-gold/50 flex items-center justify-center bg-gradient-to-br from-maroon to-maroon-deep text-white font-cinzel font-bold text-lg group-hover:scale-105 transition-transform shadow-lg group-hover:border-gold">
            MJ
          </div>
          <span className="font-cinzel font-bold tracking-widest text-base transition-colors text-maroon group-hover:text-maroon-deep">
            Manisha Jyotish
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const textColorClass = isActive ? "text-maroon font-bold" : "text-ink-soft hover:text-maroon";

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-cinzel text-xs tracking-wider px-4 py-2 rounded-md transition-all duration-300 relative group overflow-hidden ${textColorClass}`}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-gold"></span>
              </Link>
            );
          })}
          <Link
            href="/guidebook"
            className="ml-4 font-cinzel text-xs tracking-wider font-bold px-5 py-2.5 rounded-md whitespace-nowrap transition-all shadow-md hover:shadow-lg border hover:scale-105 bg-gradient-to-r from-maroon to-maroon-deep text-white border-maroon/20 hover:from-maroon-deep hover:to-maroon"
          >
            Spiritual Guidebook
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden transition-colors focus:outline-none p-2 text-maroon hover:text-maroon-deep"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-parchment/95 backdrop-blur-md border-b border-gold/40 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0 border-transparent"
        }`}
      >
        <div className="flex flex-col px-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-cinzel tracking-wider px-4 py-3 rounded-md transition-colors ${
                pathname === link.href
                  ? "bg-gold/15 text-maroon font-bold"
                  : "text-ink-soft hover:bg-gold/10 hover:text-maroon"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/guidebook"
            className="font-cinzel tracking-wider text-center text-white font-bold px-4 py-3 mt-2 rounded-md bg-gradient-to-r from-maroon to-maroon-deep hover:from-maroon-deep hover:to-maroon transition-colors shadow-sm"
          >
            Spiritual Guidebook
          </Link>
        </div>
      </div>
    </nav>
  );
}
