'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';

export interface NavLink {
  labelKey: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { labelKey: 'home', href: '/home' },
  { labelKey: 'bridalParty', href: '/bridal-party' },
  { labelKey: 'gallery', href: '/gallery' },
  { labelKey: 'thingsToDo', href: '/things-to-do' },
  { labelKey: 'venue', href: '/venue' },
  { labelKey: 'lodging', href: '/lodging' },
  { labelKey: 'faq', href: '/faq' },
  { labelKey: 'registry', href: '/registry' },
];

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if path matches, accounting for locale prefix
  const isActive = (href: string) => {
    return pathname === href || pathname.endsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-soft-apricot/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/home"
            className="text-heading font-semibold tracking-tight text-primary"
          >
            I & N
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-body font-medium transition-colors ${
                    active
                      ? 'bg-muted text-primary'
                      : 'text-foreground hover:bg-light-yellow/50 hover:text-primary'
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted hover:text-primary"
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
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
