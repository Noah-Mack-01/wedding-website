'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/home' },
  { label: 'Bridal Party', href: '/bridal-party' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Things To Do', href: '/things-to-do' },
  { label: 'Venue', href: '/venue' },
  { label: 'Lodging', href: '/lodging' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Registry', href: '/registry' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-soft-apricot/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/home"
            className="text-heading font-semibold tracking-tight text-primary"
          >
            S & M
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-body font-medium transition-colors ${
                    isActive
                      ? 'bg-muted text-primary'
                      : 'text-foreground hover:bg-light-yellow/50 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted hover:text-primary md:hidden"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
