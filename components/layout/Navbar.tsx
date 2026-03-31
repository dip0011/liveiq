"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  variant?: "landing" | "agency";
}

function Navbar({ links, variant = "landing" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--duration-normal)]",
        scrolled
          ? "bg-surface-card shadow-ambient-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href={variant === "agency" ? "/agency" : "/"} className="flex items-center gap-2">
          <Image src="/images/LOGO.png" alt="LiveIQ" width={32} height={32} className="h-7 w-auto" priority />
          <span className="font-display font-bold text-on-surface text-lg tracking-[var(--tracking-snug)]">
            LiveIQ
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-[length:var(--font-size-body-sm)] text-on-surface-muted hover:text-on-surface transition-colors duration-[var(--duration-fast)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="primary" size="sm" href="#book-demo">
            Book a demo
          </Button>
          <Button variant="ghost" size="sm" href="#app">
            Go to app
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-on-surface p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-[var(--duration-normal)] ease-[var(--ease-sovereign)]",
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <div className="px-6 pb-6 pt-2 bg-surface-card space-y-1">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-[length:var(--font-size-body-md)] text-on-surface-muted hover:text-on-surface"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button variant="primary" size="md" href="#book-demo">
              Book a demo
            </Button>
            <Button variant="ghost" size="md" href="#app">
              Go to app
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
