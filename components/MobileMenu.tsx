'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { navLinks } from './Navbar';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden h-screen w-screen">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-screen w-full max-w-xs bg-white p-6 shadow-xl z-[60]">
        <div className="flex items-center justify-between">
          <span className="text-heading font-semibold text-primary">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-foreground hover:bg-muted hover:text-primary"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block rounded-md px-3 py-2 text-body font-medium transition-colors ${
                      isActive
                        ? 'bg-muted text-primary'
                        : 'text-foreground hover:bg-light-yellow/50 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
